"use client"
import Link from "next/link"
import { Product, State } from "../lib/definition"
import { Button } from "./generalButton"
import { UpdateProduct } from "../lib/actions"
import { useFormState } from "react-dom"
export default async function EditForm(
    {
        categories,
        product
    }:
    {
        categories:string[],
        product:Product
    })
    {
        // const initialState:State = {message:null, errors:{}}
        // const updateProductById = UpdateProduct.bind(null,product.id)
        // const [state,dispatch] = useFormState(updateProductById,initialState)
        return(
            <form className="w-full">
                <div className="w-full bg-[#F9FAFB] p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="product_name" className="text-sm font-medium">Product Name</label>
                        <input type="text" value={product?.title} required className="text-sm focus:outline-none border border-slate-200 rounded-md p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="price" className="text-sm font-medium">Price</label>
                        <input type="number" value={product.price} required className="text-sm    focus:outline-none  border border-slate-200 rounded-md p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="text-sm font-medium">Description</label>
                        <input type="text-area" value={product.description} required className="text-sm focus:outline-none  border border-slate-200 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="image" className="text-sm font-medium">Image</label>
                        <input type="file" accept="image/png, image/jpeg" required className="text-sm focus:outline-none  bg-white border border-slate-200 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-sm font-medium">Category</label>    
                        <select className="text-sm focus:outline-none  bg-white border border-slate-200 rounded-md p-2" required defaultValue={product.category}>
                            <option value="" disabled>
                                Select Category
                            </option>
                            {categories?.map((category:string)=>{
                                return(
                                    <option value={category} key={category}>{category}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <Button type="submit">Edit Product</Button>
                    <Link href='/' className="py-2 px-3 rounded-md bg-gray-300 text-center">Cancel</Link>
                </div>
            </form>
    )
} 