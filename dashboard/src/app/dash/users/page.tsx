
import UserTable from "@/app/ui/userTable";
import { Button } from "@/app/ui/generalButton";
import Link from "next/link";

export default async function Page() {
  return (
        <div className="w-full">
          <div className="w-full flex gap-4 mb-6">
            <input type="text" placeholder="Search User" className="flex-grow focus:outline-none bg-white border border-slate-200 rounded-md px-2"/>
            <Link href="/dash/users/create-user">
              <Button>Add User</Button>
            </Link>
          </div>
          <UserTable />
        </div>
  );
}
