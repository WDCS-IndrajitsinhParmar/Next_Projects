'use client'

import { useFormStatus } from "react-dom"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }

export function Button({children}:ButtonProps){
    const {pending} = useFormStatus();
    return(
        <button className="py-2 px-3 bg-[#3570F3] text-white rounded-md" aria-disabled={pending}>
            {pending ? "Loading..." : children}
        </button>
    )
}