"use client"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "next-sanity"
import type { POST_QUERYResult } from "@/sanity/types"

type Props = {
  author: NonNullable<POST_QUERYResult>['author']
}

export default function AuthorBox({ author }: Props) {
  if (!author) return null

  const nameParts = author.name?.split(' ') ?? []
  const firstName = nameParts[0] ?? ''
  const lastName = nameParts.slice(1).join(' ') ?? ''

  return (
    <div className="relative p-6 rounded-xl transition-colors bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 overflow-hidden mt-12">
      
      {/* Top row — image + name */}
      <div className="flex items-center gap-4 mb-3">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
          {author.image ? (
            <Image
              src={urlFor(author.image).url()}
              alt={author.name ?? ''}
              fill
              className="object-cover"
            />
          ) : (
            <span className="text-black/60 dark:text-white/60 font-heading text-xl">{firstName[0]}</span>
          )}
        </div>
        <div>
          <span className="text-xs tracking-widest uppercase text-black/60 dark:text-white/60 font-sans">Written by</span>
          <p className="font-heading text-xl text-slate-800 dark:text-white mt-0.5">
            {firstName}{' '}
            <span className="font-display italic font-medium text-orange-400">{lastName}</span>
          </p>
        </div>
      </div>

      {/* Bio full width below */}
      {author.bio && (
        <div className="text-black/70 dark:text-white/60 font-sans text-sm prose prose-invert max-w-none prose-p:my-0">
          <PortableText value={author.bio} />
        </div>
      )}

    </div>
  )
}