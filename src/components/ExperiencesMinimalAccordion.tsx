'use client';

import { EXPERIENCES_QUERYResult } from '@/sanity/types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const formatYear = (iso?: string | null) => {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    return String(d.getFullYear());
};

export default function ExperiencesMinimalAccordion({ experiences }: { experiences: EXPERIENCES_QUERYResult }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const sorted = [...experiences].sort((a, b) => {
        if (a.isCurrent) return -1;
        if (b.isCurrent) return 1;
        return new Date(b.endDate?.date || '').getTime() - new Date(a.endDate?.date || '').getTime();
    });

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-700 border-t border-zinc-200 dark:border-zinc-700">
            {sorted.map((experience, index) => {
                const isOpen = openIndex === index;
                const start = formatYear(experience.startDate);
                const end = experience.isCurrent ? 'Present' : formatYear(experience.endDate?.date);
                const range = start && end ? `${start} — ${end}` : start || end;

                return (
                    <li key={experience._id}>
                        <button
                            type="button"
                            onClick={() => toggle(index)}
                            aria-expanded={isOpen}
                            className="group w-full flex items-start justify-between gap-6 py-8 text-left"
                        >
                            <div className="flex-1 flex items-start gap-4">
                                {experience.isCurrent && (
                                    <span
                                        aria-hidden
                                        className="mt-4 inline-block w-2 h-2 rounded-full bg-orange-400 shrink-0"
                                    />
                                )}
                                <div>
                                    <h3 className="font-heading font-normal text-xl md:text-2xl tracking-tight text-slate-800 dark:text-slate-100 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-orange-400">
                                        {experience.jobTitle}
                                    </h3>
                                    <p className="mt-2 font-sans text-sm text-slate-600 dark:text-slate-400">
                                        {experience.company}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 shrink-0">
                                <span className="hidden sm:inline font-sans text-xs tracking-widest uppercase text-slate-600 dark:text-slate-400">
                                    {range}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                />
                            </div>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-8 pl-0 sm:pl-6 max-w-3xl">
                                        <p className="font-sans text-base leading-relaxed text-slate-700 dark:text-slate-300">
                                            {experience.description}
                                        </p>
                                        {experience.skills && experience.skills.length > 0 && (
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {experience.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2.5 py-1 font-sans text-xs tracking-wider uppercase text-slate-700 dark:text-slate-300 border border-zinc-300 dark:border-zinc-600 rounded-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                );
            })}
        </ul>
    );
}
