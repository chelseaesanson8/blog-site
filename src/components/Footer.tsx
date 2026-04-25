import { Icon } from "@sanity/icons"
import { Coffee } from "lucide-react"

export default async function Footer() {
    return (
        <section className="w-full bg-neutral-100 dark:bg-zinc-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 pt-12 pb-12 px-6 sm:px-10 lg:px-20 w-full max-w-screen-2xl mx-auto">
                <div>
                    <h2 className="text-3xl mb-5 mt-5 tracking-tighter font-heading text-slate-800 dark:text-slate-200">Let&apos;s Work Together</h2>
                    <p className="text-1xl font-heading text-slate-700 dark:text-slate-200">chels@developedbychels.com</p>
                </div>
                <div className="flex flex-wrap md:justify-end gap-6">
                    <div className="flex items-center gap-2">
                        <Coffee className="w-4 h-4" />
                        <p className="text-1xl font-heading">Buy Me a Coffee</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon name="document" symbol="document" className="w-5 h-5" />
                        <p className="text-1xl font-heading">Resume</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

