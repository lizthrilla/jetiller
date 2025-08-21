export default function PageLayout({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`flex flex-col items-center justify-center w-screen ${className}`}>
            {children}
        </div>
    )
}