"use client"

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeToggle from "./ThemeToggle";
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    const handleToggle = () => {
        setToggle(prev => !prev);
    }

    return (
        <header className="bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-center p-10">
                <div className="mr-20">
                    <Avatar>
                        <AvatarImage src="/avatars/nav-avatar.JPG" />
                        <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                </div>
                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className="flex items-center space-x-10">
                        <li className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400">
                            <Link href="/">HOME</Link>
                        </li>
                        <li className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400">
                            <Link href="/posts">BLOG</Link>
                        </li>
                        <li className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400">
                            <Link href="/">CASE STUDIES</Link>
                        </li>
                        <li className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400">
                            <Link href="/">NEWSLETTER</Link>
                        </li>
                        <li className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400">
                            <Link href="/">CONTACT</Link>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
                {/* Mobile Menu Button */}
                <div className="lg:hidden space-x-5 flex ml-20">
                    <button onClick={handleToggle} className="text-slate-800 dark:text-slate-200">
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
                        className="lg:hidden"
                    >
                        <motion.ul
                            className="space-y-10"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <motion.li variants={itemVariants} className="content-center text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400 text-center">
                                <Link href="/">HOME</Link>
                            </motion.li>
                            <motion.li variants={itemVariants} className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400 text-center">
                                <Link href="/posts">BLOG</Link>
                            </motion.li>
                            <motion.li variants={itemVariants} className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400 text-center">
                                <Link href="/">CASE STUDIES</Link>
                            </motion.li>
                            <motion.li variants={itemVariants} className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400 text-center">
                                <Link href="/">NEWSLETTER</Link>
                            </motion.li>
                            <motion.li variants={itemVariants} className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400 text-center">
                                <Link href="/">CONTACT</Link>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}