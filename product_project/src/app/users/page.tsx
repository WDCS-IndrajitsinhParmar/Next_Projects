
import { Suspense } from "react";
import Spinner from "../ui/loader";
import UserTable from "../ui/userTable";
import { Button } from "../ui/generalButton";
import Link from "next/link";


export default async function Page() {
  return (
    <div className="w-full">
      <div className="w-full flex gap-4 mb-6">
        <input type="text" placeholder="Search User" className="flex-grow text-sm focus:outline-none bg-white border border-slate-200 rounded-md px-2"/>
        <Link href="/users/create-user">
          <Button>Add User</Button>
        </Link>
      </div>
      <Suspense fallback={<Spinner/>} >
        <UserTable />
      </Suspense>
    </div>
  );
}
