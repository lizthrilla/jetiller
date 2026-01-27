// Header Components
import Image from "next/image";

export function SectionHeader({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={`text-bf-blue font-bf-display font-bold text-xl my-5 ${className}`} > {children} </h3>
    )
}

export function LogoHeader({pageTitle, pageSubtitle}: {pageTitle: string, pageSubtitle: string}) {
    return (
        <header className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-8 px-4">
            <div className="flex-shrink-0">
                <Image src="/butterflyLogos/logo-transparent-svg.svg" alt="Butterfly Financial Consultants Logo" width={500} height={500} className="h-36 md:h-44 w-auto"/>
            </div>
            <div className="font-bf-display text-center md:text-left">
                <h1 className="text-2xl md:text-3xl text-bf-blue font-bold">
                   {pageTitle}
                </h1>
                <h2 className="text-lg md:text-xl mt-1">
                    {pageSubtitle}
                </h2>
            </div>
        </header>
    )
}

export function PageHeader({pageTitle, pageSubtitle}: {pageTitle: string, pageSubtitle: string}) {
    return (
        <header className="grid grid-rows-1 items-center gap-0 md:flex md:flex-wrap mb-4">
            <div className="grid-rows-2 font-bf-display w-full">
                <h1 className="text-2xl row-start-1 text-bf-blue font-bold"  >
                   {pageTitle}
                </h1>
                <h2 className="row-start-2">
                    {pageSubtitle}
                </h2>
            </div>
        </header>
    )
}