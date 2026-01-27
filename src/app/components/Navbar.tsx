"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const navigation = [
    {name: "Services", mobileName: "Services", href: "/services"},
    {name: "Life, Health and Annuity Reinsurance", mobileName: "Book", href: "/book"},
    {name: "About", mobileName: "About", href: "/about"},
    {name: "Resources", mobileName: "Resources", href: "/resources"},
    {name: "Contact", mobileName: "Contact", href: "/contact"},
]

export default function Navbar() {

    return (
        <nav className="bg-white shadow" aria-label="Main navigation">
            <div className="flex flex-row justify-between items-center px-4 py-3">
                <Link href="/" className="text-xl lg:text-2xl font-display text-bf-blue whitespace-nowrap">
                    Butterfly Financial Consultants
                </Link>
                
                {/* Desktop navigation - hidden until lg breakpoint */}
                <div className="hidden lg:flex flex-row items-center gap-6 text-sm font-display">
                    {navigation.map((item, i) => (
                        <a key={i} href={item.href} className="hover:text-mint-500 transition whitespace-nowrap">
                            {item.name}
                        </a>
                    ))}
                </div>
                
                {/* Mobile menu - visible until lg breakpoint */}
                <div className="lg:hidden">
                    <Menu>
                        <MenuButton aria-label="Open menu" className="p-2">
                            <FaBars aria-hidden="true" className="text-xl" />
                        </MenuButton>   
                        <MenuItems className="flex flex-col bg-white shadow-lg absolute top-14 right-0 w-full z-50" aria-label="Main menu">
                            {navigation.map((item, i) => (
                                <MenuItem key={i}>
                                    <Link href={item.href} className="px-4 py-3 hover:bg-gray-100 transition">
                                        {item.mobileName}
                                    </Link>
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}