import { Icon } from "@sanity/icons"
import { Coffee } from "lucide-react"
import Link from "next/link"
export default function Footer() {
    return (
        <section className="w-full bg-neutral-100 dark:bg-zinc-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 pt-8 pb-8 px-6 sm:px-10 lg:px-20 w-full max-w-screen-2xl mx-auto">
                <div>
                    <h2 className="text-3xl mb-5 mt-5 tracking-tighter font-display dark:text-white/70">Let&apos;s Work Together</h2>
                    <p className="text-1xl font-heading dark:text-white/70">© Chelsea Sanson 2026</p>
                </div>
                <div className="flex flex-wrap md:justify-end gap-6">
                    <Link href="https://buymeacoffee.com/chelseaesanson" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black/50 dark:hover:text-white/90">
                            <Coffee className="w-4 h-4" />
                            <p className="text-1xl font-heading">Buy Me a Coffee</p>
                        </div>
                    </Link>
                    
                    <Link href="/resume">
                        <div className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black/50 dark:hover:text-white/90">
                            <Icon name="document" symbol="document" className="w-5 h-5" />
                            <p className="text-1xl font-heading">Resume</p>
                        </div>
                    </Link>
                    <Link href="mailto:chels@developedbychels.com">
                        <div className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black/50 dark:hover:text-white/90">
                            <Icon name="envelope" symbol="envelope" className="w-5 h-5" />
                            <p className="text-1xl font-heading">Message Me</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

