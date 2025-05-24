import Accordion from "@/components/Accordion";

const items = [
    { title: 'Web Developer - 898 Marketing (2023-Present)', content: 'Built custom websites for companies using a WordPress stack (Elementor, ACF, PHP) and SanityCMS stack (Next.js, Sanity, Tailwind)' },
    { title: 'Student IT Technican - Youngstown State University', content: 'Assisted students and faculity/staff with IT related questions/issues' }

]

export default function Page() {
    return (
        <div className="bg-white dark:bg-zinc-900">
            <div>
                <div className="max-w-2xl mx-auto py-10">
                    <h1 className="text-2xl font-bold mb-4">Job Experience</h1>
                    <Accordion items={items} />
                </div>
            </div>
        </div>
    );
}