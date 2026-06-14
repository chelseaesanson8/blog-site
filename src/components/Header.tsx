"use client"

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import CSLogo from "./CSLogo";

const listVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: 1,
        },
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

export default function Header() {
    const [isToggled, setToggle] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setToggle(false);
    }, [pathname]);

    const handleToggle = () => {
        setToggle(prev => !prev);
    }

    const navigateToAnchor = (e: React.MouseEvent, anchor: string) => {
        e.preventDefault();
        setToggle(false);
        if (pathname === '/') {
            document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/#${anchor}`);
        }
    }

    return (
        <header className="bg-white dark:bg-zinc-900 sticky top-0 z-50 shadow-sm dark:shadow-zinc-800/80 backdrop-blur-sm">
            <div className="flex p-5 justify-between items-center">
                <div className="mr-20">
                    <CSLogo className="w-24"/>
                </div>
                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className="flex items-center space-x-10">
                        <li className="text-black/70 dark:text-white/70 font-heading text-lg font-light dark:hover:text-white/90 hover:text-black/50">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-black/70 dark:text-white/70 font-heading text-lg font-light dark:hover:text-white/90 hover:text-black/50">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className="text-black/70 dark:text-white/70 font-heading text-lg font-light dark:hover:text-white/90 hover:text-black/50 scroll-mt">
                            <Link href="/#case-studies" onClick={(e) => navigateToAnchor(e, 'case-studies')}>Case Studies</Link>
                        </li>
                        <li className="text-black/70 dark:text-white/70 font-heading text-lg font-light dark:hover:text-white/90 hover:text-black/50 scroll-mt">
                            <Link href="/#contact" onClick={(e) => navigateToAnchor(e, 'contact')}>Contact</Link>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
                {/* Mobile Menu Button */}
                <div className="lg:hidden space-x-5 flex ml-20">
                    <button onClick={handleToggle} aria-label={isToggled ? "Close menu" : "Open menu"} className="text-black/70 dark:text-white/70">
                        {isToggled ? <X /> : <Menu />}
                    </button>
                    <ThemeToggle />
                </div>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isToggled && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden pr-5 border-t-2 border-orange-400 dark:border-orange-400"
                    >
                        <motion.ul
                            className="space-y-6 pl-6 pt-10 pb-10"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.li variants={itemVariants} className="content-center text-black/70 dark:text-white/70 font-heading text-lg font-light hover:text-black/50 dark:hover:text-white/90 text-left">
                                <Link href="/">Home</Link>
                            </motion.li>
                            <motion.li variants={itemVariants} className="text-black/70 dark:text-white/70 font-heading text-lg font-light hover:text-black/50 dark:hover:text-white/90 text-left scroll-mt">
                                <Link href="/blog">Blog</Link>
                            </motion.li>
                            <motion.li variants={itemVariants} className="text-black/70 dark:text-white/70 font-heading text-lg font-light hover:text-black/50 dark:hover:text-white/90 text-left scroll-mt">
                                <Link href="/#case-studies" onClick={(e) => navigateToAnchor(e, 'case-studies')}>Case Studies</Link>
                            </motion.li>
                            <motion.li variants={itemVariants} className="text-black/70 dark:text-white/70 font-heading text-lg font-light hover:text-black/50 dark:hover:text-white/90 text-left">
                                <Link href="/#contact" onClick={(e) => navigateToAnchor(e, 'contact')}>Contact</Link>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}