'use client';

import { useState } from 'react';

type AccordionItem = {
    title: string
    content: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className='accordion space-y-10'>
            {items.map((item, index) => (
                <div key={index} className='border-b'>
                    <button
                        className='w-full text-left py-2 font-heading tracking-tighter text-2xl font-light text-slate-800 dark:text-slate-200'
                        onClick={() => toggle(index)}
                    >
                        {item.title}
                    </button>
                    {openIndex === index && (
                        <div className='py-2 text-stone-500 font-sans dark:text-stone-400 '>{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    )
}