import { signOut } from "@/auth";
import NavLinks from "./navLinks"

export default function SideNav({links}:{links:any}){
    return (
        <div className="flex h-full md:flex-col p-4">
            <div className="flex flex-grow md:flex-col gap-2">
                <NavLinks links={links}/>
            </div>
            <form
                action={async()=>{
                    'use server'
                    await signOut();
                }}>
                <button className="px-3 py-2  hover:bg-blue-100 hover:text-blue-600 rounded-md">Sign Out</button>
            </form>
        </div>
    )
}


