'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks(){
    const pathname = usePathname();
    const links = [
        {name:"Products", href:"/dash"},
        {name:"Users", href:"/dash/users"},
    ]

    return(
        <>
            {links.map((link)=>{
                return(
                       <Link key={link.name} href={link.href}
                            className={clsx('px-3 py-2 hover:bg-blue-100 hover:text-blue-600 rounded-md',
                            {
                              'bg-sky-100 text-blue-600': pathname === link.href,
                            },)}  
                        >
                        {link.name}
                       </Link>
                )
            })}
        </>
    )
} 