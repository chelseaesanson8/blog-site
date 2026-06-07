"use client"

import { useState } from "react"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"
import { LinkIcon } from "lucide-react"
import { EnvelopeIcon } from "@sanity/icons"

type Props = {
  title: string | null
  slug: string | null
}

export default function ShareButtons({ title, slug }: Props) {
  const [copied, setCopied] = useState(false)
  const url = `https://developedbychels.com/blog/${slug ?? ''}`

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const btnClass = "flex items-center gap-2 border border-black/10 dark:border-white/5 rounded-lg text-black/60 dark:text-white/60 text-xs tracking-widest uppercase px-5 py-2.5 hover:border-black/30 hover:text-black/80 dark:hover:border-white/40 dark:hover:text-white/80 transition-colors bg-black/5 dark:bg-white/5"

  return (
    <div>
      <p className="text-black/70 dark:text-white/50 font-heading font-extralight tracking-widest text-sm uppercase">Share this post</p>
      <div className="pt-2 flex gap-2">
        <Link href={`https://x.com/intent/tweet?text=${encodeURIComponent(title ?? '')}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className={btnClass}>
          <FaXTwitter className="w-4 h-4" />
          <span className="font-heading">Share on X</span>
        </Link>
        <button onClick={handleCopy} className={btnClass}>
          <LinkIcon className="w-4 h-4" />
          <span className="font-heading">{copied ? 'Copied!' : 'Copy link'}</span>
        </button>
        <a href={`mailto:?subject=${encodeURIComponent(title ?? '')}&body=${encodeURIComponent(`I thought you might find this interesting: ${url}`)}`} className={btnClass}>
          <EnvelopeIcon className="w-4 h-4" />
          <span className="font-heading">Email</span>
        </a>
      </div>
    </div>
  )
}