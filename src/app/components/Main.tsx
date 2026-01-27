export function Main({ children }: { children: React.ReactNode }) {
    return (
        <main 
            id="main-content" 
            tabIndex={-1}
            className="flex flex-col items-center font-[family-name:var(--font-geist-sans)]"
        >
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
