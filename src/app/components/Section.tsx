"use client"

export default function Section({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) {
    return (
        <div className={`p-10 flex flex-col justify-center ${className}`} id={id}>
            {children}
        </div>
    )
}