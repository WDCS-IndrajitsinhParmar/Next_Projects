'use client';
import { useFormState } from "react-dom";
import { Button } from "./generalButton";
import { authenticate, githubLogin, googleLogin } from "@/app/lib/actions";


export default function LoginForm(){
    const [ errorMessage, dispatch ] = useFormState(authenticate,undefined);
    return(
    <div className="w-screen h-screen bg-[#363434] flex flex-col items-center justify-center">
        <div className="w-2/3 p-4 flex flex-col items-center justify-center gap-8 border-2 border-slate-500 rounded-md md:w-1/2 md:p-8 lg:w-1/3 lg:p-4"> 
            <h1 className="text-3xl font-semibold text-white">Login</h1>
            <form action={dispatch} className="w-5/6 flex flex-col items-center justify-center gap-4 md:w-4/5 lg:w-3/4">
                <input 
                    name="username" type="text" placeholder="Username" required
                    className="py-2 px-3 rounded-md w-full focus:outline-none" 
                   />
                <input 
                    name="password" type="password" placeholder="Password" required
                    className="py-2 px-3 rounded-md w-full focus:outline-none" 
                    />
                {errorMessage&&
                    <p className="text-red-500 text-center">{errorMessage}</p>    
                }
                <button type='submit' className="px-4 py-1 bg-white border rounded-md font-medium text-black">
                    Login
                </button>
            </form>
            <div className="flex gap-4">
            <form action={githubLogin}>
                <button type='submit' className="px-4 py-1 bg-white border rounded-md font-medium text-black">
                    Github
                </button>
            </form>
            <form action={googleLogin}>
                <button type='submit' className="px-4 py-1 bg-white border rounded-md font-medium text-black">
                    Google
                </button>
            </form>
            </div>
            
        </div>
    </div>
    )
}