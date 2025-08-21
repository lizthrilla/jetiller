export default function Card({ title, description, bullets }: { title: string, description: string, bullets: string[] }) {
    return (
        <div id="buyers" className="scroll-mt-28 rounded-2xl border bg-white shadow-sm p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-neutral-700">
                {description}
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {bullets.map((bullet, index) => (   
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-800">
                            <svg className="h-4 w-4 text-green-600 mt-0.5 flex-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}