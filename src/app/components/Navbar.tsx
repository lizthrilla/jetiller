"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const navigation = [
    {name: "About", href: "/#about"},
    {name: "Services", href: "/services"},
    {name: "Contact", href: "/#contact"},
]

export default function Navbar() {

    return (
        <nav className="bg-white shadow flex flex-col">
            <div className="flex flex-row justify-between items-center px-2 py-2">
                <Link href="/" className="text-2xl font-display text-bf-blue">Butterfly Financial Consultants</Link>
                <div className="hidden sm:block flex-row space-x-8 text-sm font-display">
                    {navigation.map((item, i) => (
                        <a key={i} href={item.href} className="hover:text-mint-500 transition">{item.name}</a>
                    ))}
                </div>
                <div className="md:hidden">
                    <Menu>
                        <MenuButton>
                            <FaBars />
                        </MenuButton>   
                        <MenuItems className="flex flex-col bg-white absolute top-16 right-0 w-full">
                            {navigation.map((item, i) => (
                                <MenuItem key={i}>
                                    <Link href={item.href}>{item.name}</Link>
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}