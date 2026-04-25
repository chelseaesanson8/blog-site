import { Icon } from "@sanity/icons";

export default function Hero() {
    return (
        <div className="flex flex-col gap-8 md:gap-5 mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20 pt-32 pb-32">
            <div className="flex flex-col gap-8">
                <p className="text-1xl font-heading uppercase text-slate-700 dark:text-slate-200">Web Developer</p>
                <h1 className="text-7xl font-heading text-slate-800 dark:text-slate-200">Hi, I&apos;m Chelsea Sanson</h1>
                <p className="text-1xl font-sans text-slate-700 dark:text-slate-200 max-w-3xl">I craft digital experiences with clean code and thoughtful design. Currently focused on building products that matter.</p>
            </div>
            <div className="mt-4 flex gap-4">
                <div className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-700 pt-1 pb-1 pr-3 pl-3 rounded text-zinc-900 dark:text-zinc-100 hover:bg-zinc-600 dark:hover:bg-zinc-600 hover:text-white dark:hover:text-white transition-colors">
                    <Icon name="github" symbol="github" className="w-5 h-5" />
                    <p className="text-1xl font-heading">Github</p>
                </div>
                <div className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-700 pt-1 pb-1 pr-3 pl-3 rounded text-zinc-900 dark:text-zinc-100 hover:bg-zinc-600 dark:hover:bg-zinc-600 hover:text-white dark:hover:text-white transition-colors">
                    <Icon name="linkedin" symbol="linkedin" className="w-5 h-5" />
                    <p className="text-1xl font-heading">LinkedIn</p>
                </div>
                <div className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-700 pt-1 pb-1 pr-3 pl-3 rounded text-zinc-900 dark:text-zinc-100 hover:bg-zinc-600 dark:hover:bg-zinc-600 hover:text-white dark:hover:text-white transition-colors">
                    <Icon name="email" symbol="envelope" className="w-5 h-5" />
                    <p className="text-1xl font-heading">Message Me</p>
                </div>
            </div>
        </div>
    );
}
