"use client"

import Link from "next/link"
import { Button } from "./generalButton"
import { useFormState } from "react-dom"
import { UserState } from "../lib/definition"
import { CreateNewUser } from "../lib/actions"

export default function CreateUser()
    {
        const initialState:UserState = {message:null, errors:{},serverError:null}
        const [state,dispatch] = useFormState(CreateNewUser,initialState);
        return(
            <form className="w-full" action={dispatch}>
                <div className="w-full bg-[#F9FAFB] p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="firstname" className="text-sm font-medium">First Name</label>
                        <input type="text" name="firstname" placeholder="First Name" required className="text-sm focus:outline-none border border-slate-200 rounded-md p-2"/>
                        {state?.errors?.firstname &&
                            <p className="text-red-500">{state.errors.firstname[0]}</p>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastname" className="text-sm font-medium">Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name" required className="text-sm    focus:outline-none  border border-slate-200 rounded-md p-2"/>
                        {state?.errors?.lastname &&
                            <p className="text-red-500">{state.errors.lastname[0]}</p>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input type="email" name="email" placeholder="Email" required className="text-sm focus:outline-none  border border-slate-200 rounded-md p-2" />
                        {state?.errors?.email &&
                            <p className="text-red-500">{state.errors.email[0]}</p>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-sm font-medium">City</label>
                        <input type="filetext" name="city" placeholder="City" required className="text-sm focus:outline-none  bg-white border border-slate-200 rounded-md p-2" />
                        {state?.errors?.city &&
                            <p className="text-red-500">{state.errors.city[0]}</p>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Phone" className="text-sm font-medium">Mobile No.</label>
                        <input type="tel" name="phone" placeholder="Phone No." required className="text-sm focus:outline-none  bg-white border border-slate-200 rounded-md p-2" />
                        {state?.errors?.phone &&
                            <p className="text-red-500">{state.errors.phone[0]}</p>
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
                    <Button type="submit">Edit Product</Button>
                    <Link href='/dash/users' className="py-2 px-3 rounded-md bg-gray-300 text-center">Cancel</Link>
                </div>
            </form>
    )
} 