"use client"

import Link from "next/link"
import { Button } from "./generalButton"

export default async function CreateProduct()
    {
        return(
            <form className="w-full">
                <div className="w-full bg-[#F9FAFB] p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="product_name" className="text-sm font-medium">Product Name</label>
                        <input type="text" placeholder="Title" required className="text-sm focus:outline-none border border-slate-200 rounded-md p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="price" className="text-sm font-medium">Price</label>
                        <input type="number" placeholder="Price" required className="text-sm    focus:outline-none  border border-slate-200 rounded-md p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="text-sm font-medium">Description</label>
                        <input type="text-area" placeholder="Description"required className="text-sm focus:outline-none  border border-slate-200 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-sm font-medium">Category</label>    
                        <input type="text" placeholder="Category" required className="text-sm focus:outline-none  border border-slate-200 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="image" className="text-sm font-medium">Image</label>
                        <input type="file" accept="image/png, image/jpeg" required className="text-sm focus:outline-none  bg-white border border-slate-200 rounded-md p-2" />
                    </div>
                   
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <Button type="submit">Create Product</Button>
                    <Link href='/' className="py-2 px-3 rounded-md bg-gray-300 text-center">Cancel</Link>
                </div>
            </form>
    )
} 