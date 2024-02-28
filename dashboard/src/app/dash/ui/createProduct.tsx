"use client"

import Link from "next/link"
import { Button } from "./generalButton"
import { State } from "../../lib/definition"
import { CreateNewProduct } from "../../lib/actions"
import { useFormState } from "react-dom"

export default  function CreateProduct({categories}:{categories:string[]})
    {
        const initialState:State = {message:null, errors:{}, serverError:null}
        const [state,dispatch] = useFormState(CreateNewProduct,initialState)

        return(
            <form className="w-full" action={dispatch}>
                <div className="w-full bg-[#F9FAFB] p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="product_name" className="text-sm font-medium">Product Name</label>
                        <input type="text" name="product_name" placeholder="Title" required className="text-sm focus:outline-none border border-slate-200 rounded-md p-2"/>
                        {state?.errors?.product_name &&
                            <p className="text-red-500 ">{state.errors.product_name[0]}</p>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="price" className="text-sm font-medium">Price</label>
                        <input type="number" name="price" placeholder="Price" required className="text-sm    focus:outline-none  border border-slate-200 rounded-md p-2"/>
                        {state?.errors?.price &&
                            <p className="text-red-500 ">{state.errors.price[0]}</p>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="text-sm font-medium">Description</label>
                        <input type="text-area" name="description" placeholder="Description"required className="text-sm focus:outline-none  border border-slate-200 rounded-md p-2" />
                        {state?.errors?.description &&
                            <p className="text-red-500 ">{state.errors.description[0]}</p>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-sm font-medium">Category</label>    
                        <select name="category" className="text-sm focus:outline-none bg-white border border-slate-200 rounded-md p-2" required>
                            <option value="" disabled>
                                Select Category
                            </option>
                            {categories?.map((category:string)=>{
                                return(
                                    <option value={category} key={category}>{category}</option>
                                )
                            })}
                        </select>
                        {state?.errors?.category && 
                            <p className="text-red-500 ">{state.errors.category[0]}</p>    
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="image" className="text-sm font-medium">Image</label>
                        <input type="file" name="image" accept="image/png, image/jpeg" required className="text-sm focus:outline-none  bg-white border border-slate-200 rounded-md p-2" />
                        {state?.errors?.image && 
                            <p className="text-red-500 ">{state.errors.image[0]}</p>    
                        }
                        
                    </div>
                </div>
                {state?.message &&
                        <p className="text-green-500 text-center">{state.message}</p>    
                }
                {state?.serverError &&
                    <p className="text-red-500 text-center">{state.serverError}</p>   
                }
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <Button type="submit">Create Product</Button>
                    <Link href='/' className="py-2 px-3 rounded-md bg-gray-300 text-center">Cancel</Link>
                </div>
            </form>
    )
} 