import { Resend } from 'resend'
import { contactSchema } from '@/lib/contactSchema'
import { client } from '@/sanity/lib/client'
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyTurnstile(token: string) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  })
  const data = await res.json()
  return data.success === true
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { turnstileToken, ...formData } = body

    // Turnstile verification
    if (!turnstileToken) {
      return Response.json({ error: 'Missing verification token' }, { status: 400 })
    }

    const isHuman = await verifyTurnstile(turnstileToken)
    if (!isHuman) {
      return Response.json({ error: 'Verification failed' }, { status: 403 })
    }

    const result = contactSchema.safeParse(formData)

    if (!result.success) {
      return Response.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const data = result.data

    // Honeypot — silently succeed so bots don't know
    if (data.website) {
      return Response.json({ ok: true })
    }

    // Send owner notification
    const ownerEmail = await resend.emails.send({
      from: 'Portfolio <noreply@developedbychels.com>',
      to: 'chels@developedbychels.com',
      replyTo: data.email,
      subject: `New inquiry from ${data.name}${data.requestResume ? ' (Resume requested)' : ''}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      html: `<p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Message:</strong> ${data.message}</p>`
    })

    if (ownerEmail.error) {
      console.error('Resend error (owner notification):', ownerEmail.error)
      return Response.json({ error: 'Failed to send notification' }, { status: 500 })
    }

    // Send resume auto-reply if requested
    if (data.requestResume) {
      const settings = await client.fetch(SITE_SETTINGS_QUERY)

      if (settings?.resumeUrl) {
        const resumeEmail = await resend.emails.send({
          from: 'Chels <noreply@developedbychels.com>',
          to: data.email,
          subject: 'Here\'s my resume',
          text: `Hi ${data.name},\n\nThanks for reaching out! You can download my resume here:\n\n${settings.resumeUrl}\n\nI'll be in touch shortly.\n\nChels`,
          html: `<p>Hi ${data.name},</p>
                 <p>Thanks for reaching out! You can download my resume here:</p>
                 <p><a href="${settings.resumeUrl}">Download Resume</a></p>
                 <p>I'll be in touch shortly.</p>
                 <p>Chels</p>`
        })
        if (resumeEmail.error) {
          console.error('Resend error (resume reply):', resumeEmail.error)
        }
      } else {
        console.warn('Resume requested but no PDF uploaded in Studio')
      }
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}