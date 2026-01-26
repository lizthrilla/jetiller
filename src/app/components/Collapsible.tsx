"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";

interface CollapsibleProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

export default function Collapsible({ title, children, defaultOpen = false }: CollapsibleProps) {
    return (
        <Disclosure defaultOpen={defaultOpen}>
            {({ open }) => (
                <div>
                    <DisclosureButton className="flex items-center gap-2 w-full py-3 text-left cursor-pointer text-bf-blue font-bf-display font-bold text-lg hover:opacity-80 transition-opacity">
                        <FaChevronDown 
                            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} 
                        />
                        {title}
                    </DisclosureButton>
                    <div
                        className={`grid transition-all duration-300 ease-in-out ${
                            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                        <DisclosurePanel static className="overflow-hidden">
                            {children}
                        </DisclosurePanel>
                    </div>
                </div>
            )}
        </Disclosure>
    );
}
