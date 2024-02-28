import CreateUser from "@/app/ui/createUser";
import { lusitana } from "@/app/ui/font";

export default function Page(){
    return(
        <div className="w-full items-center">
            <h2 className={`${lusitana.className} text-2xl font-medium  mb-2`}>Create User</h2>
            <CreateUser />
        </div>
       
    )
}