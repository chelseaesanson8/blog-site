'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowUpRight } from 'lucide-react'
import { contactSchema, type ContactInput } from '@/lib/contactSchema'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile' 
import { useRef } from 'react'

const fieldClass =
  'w-full rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-3 font-sans text-white placeholder:text-white/60 transition-colors focus:border-orange-400 focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-orange-400/40'
const labelClass =
  'mb-2 block font-heading text-xs uppercase tracking-widest text-white/60'
const errorClass = 'mt-1.5 font-sans text-sm text-orange-300'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<TurnstileInstance>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { requestResume: false, website: '' },
  })

  const onSubmit = async (data: ContactInput) => {
    if (!turnstileToken) {
      setStatus('error')
      return
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...data, turnstileToken: turnstileToken as string}),
      })
      if (!res.ok) throw new Error('Request failed')
      reset()
      setStatus('success')
      turnstileRef.current?.reset()
    } catch {
      setStatus('error')
      turnstileRef.current?.reset()
    }
  }

  if (status === 'success') {
    return (
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <p className="font-sans text-lg text-white">
          Thanks — your message landed in my inbox. I&apos;ll be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="font-heading text-sm uppercase tracking-wider text-orange-400 transition-colors hover:text-orange-300"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col gap-5 text-left"
    >
      <div className="hidden" aria-hidden>
        <input
          {...register('website')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            placeholder="Your name"
            className={fieldClass}
            {...register('name')}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={fieldClass}
            {...register('email')}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell me about your project, a role, or just say hi."
          className={`${fieldClass} resize-none`}
          {...register('message')}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      <label className="flex cursor-pointer select-none items-center gap-3">
        <input
          type="checkbox"
          className="h-4 w-4 accent-orange-400"
          {...register('requestResume')}
        />
        <span className="font-sans text-sm text-white/70">
          Send me a copy of your resume
        </span>
      </label>

      {status === 'error' && (
        <p role="alert" className="font-sans text-sm text-orange-300">
          Something went wrong. Please email me directly at chels@developedbychels.com.
        </p>
      )}

      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={setTurnstileToken}
        options={{ size: 'invisible'}}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 px-8 py-3.5 font-heading text-sm uppercase tracking-wider text-zinc-900 transition-all hover:bg-orange-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Send message'}
        {!isSubmitting && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    </form>
  )
}
