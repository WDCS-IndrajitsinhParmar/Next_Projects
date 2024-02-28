'use client';
import { useFormState } from "react-dom";
import { Button } from "./generalButton";
import { LoginUser } from "../lib/actions";

export default function LoginForm(){
    const initialState:any = {message:null, errors:{}, serverError:null} 
    const [ state, dispatch ] = useFormState(LoginUser,initialState);
    return(
    <div className="w-screen h-screen bg-[#d6e8fa] flex flex-col items-center justify-center">
        <div className="w-2/3 p-4 flex flex-col items-center justify-center gap-8 border-2 border-slate-500 rounded-md md:w-1/2 md:p-8 lg:w-1/3 lg:p-4"> 
            <h1 className="text-3xl font-semibold">Login</h1>
            <form action={dispatch} className="w-5/6 flex flex-col items-center justify-center gap-4 md:w-4/5 lg:w-3/4">
                <input 
                    name="email" type="email" placeholder="Email" 
                    className="py-2 px-3 rounded-md w-full focus:outline-none" 
                   />
                <input 
                    name="password" type="password" placeholder="Password"
                    className="py-2 px-3 rounded-md w-full focus:outline-none" 
                    />
                <Button type="submit">Login</Button>
            </form>
        </div>
    </div>
    )
}