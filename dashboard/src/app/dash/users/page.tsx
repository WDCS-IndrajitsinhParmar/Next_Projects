
import UserTable from "@/app/ui/userTable";
import { Button } from "@/app/ui/generalButton";
import Link from "next/link";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  // if(!session) console.log("no session")
  // console.log(session,"sdasmdkfsd")
  return (
    <>
      {session?.user?.role == "admin" 
      ?(<p>You are not authorized for this page</p>) 
      :(
        <div className="w-full">
          <div className="w-full flex gap-4 mb-6">
            <input type="text" placeholder="Search User" className="flex-grow focus:outline-none bg-white border border-slate-200 rounded-md px-2"/>
            <Link href="/dash/users/create-user">
              <Button>Add User</Button>
            </Link>
          </div>
          <UserTable />
        </div>
        )
      }
    </>
   
  );
}
