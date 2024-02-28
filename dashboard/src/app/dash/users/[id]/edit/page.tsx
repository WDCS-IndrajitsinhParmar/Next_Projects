import {getUserById} from "@/app/lib/adminData"
import EditUserForm from "@/app/ui/editUser"
import { lusitana } from "@/app/ui/font";

export default async function Page({params}:{params:{id:string}}){   
    const id = params.id; 
    const userById:any = await getUserById(id);
    return(
        <div className="w-full items-center">
            <h2 className={`${lusitana.className} text-2xl font-medium  mb-2`}>Edit User</h2>
            <EditUserForm user={userById}/>
        </div>

    )
}