import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-center p-10">
                <div className="mr-20">
                    <Avatar>
                        <AvatarImage src="/avatars/nav-avatar.JPG" />
                        <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <ul className="flex items-center space-x-10">
                        <li className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400">
                            <Link href="/">HOME</Link>
                        </li>
                        <li className="text-slate-800 dark:text-slate-200 font-heading text-xl font-black hover:text-orange-400 dark:hover:text-orange-400">
                            <Link href="/">BLOG</Link>
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
            </div>
        </header>
    );
}