export function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {children}
        </main>
    )
}

export function MainPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center w-screen">
            {children}
        </div>
    )
}
