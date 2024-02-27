"use client"

import Link from "next/link"
import { Button } from "./generalButton"

export default async function CreateUser()
    {
        return(
            <form className="w-full">
                <div className="w-full bg-[#F9FAFB] p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="product_name" className="text-sm font-medium">First Name</label>
                        <input type="text" placeholder="First Name" required className="text-sm focus:outline-none border border-slate-200 rounded-md p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastname" className="text-sm font-medium">Last Name</label>
                        <input type="text" placeholder="Last Name" required className="text-sm    focus:outline-none  border border-slate-200 rounded-md p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input type="email" placeholder="Email" required className="text-sm focus:outline-none  border border-slate-200 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-sm font-medium">City</label>
                        <input type="filetext" placeholder="City" required className="text-sm focus:outline-none  bg-white border border-slate-200 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Phone" className="text-sm font-medium">Mobile No.</label>
                        <input type="tel" placeholder="Mobile No." required className="text-sm focus:outline-none  bg-white border border-slate-200 rounded-md p-2" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <Button type="submit">Edit Product</Button>
                    <Link href='/users' className="py-2 px-3 rounded-md bg-gray-300 text-center">Cancel</Link>
                </div>
            </form>
    )
} 