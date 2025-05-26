'use client';

import { EXPERIENCES_QUERYResult } from '@/sanity/types';
import { useState } from 'react';

export default function Accordion({ experiences }: { experiences: EXPERIENCES_QUERYResult }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const sortedExperiences = [...experiences].sort((a, b) => {
        // Put current experience first
        if (a.isCurrent) return -1;
        if (b.isCurrent) return 1;
        // For past experiences, sort by end date (most recent first)
        return new Date(b.endDate?.date || '').getTime() - new Date(a.endDate?.date || '').getTime()
    });

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className='accordion space-y-10'>
            {sortedExperiences.map((experience, index) => (
                <div key={experience?._id} className='border-b'>
                    <button
                        className='w-full text-left py-2 font-heading tracking-tighter text-2xl font-light text-slate-800 dark:text-slate-200'
                        onClick={() => toggle(index)}
                    >
                        {experience?.jobTitle + " @ " + experience?.company}
                    </button>
                    {openIndex === index && (
                        <>
                            <div className="flex flex-wrap gap-2 py-2">
                                {experience?.skills?.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-2 py-1 text-sm text-white bg-orange-400 rounded"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className='py-2 text-stone-500 font-sans dark:text-stone-400'>
                                {experience.description}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}