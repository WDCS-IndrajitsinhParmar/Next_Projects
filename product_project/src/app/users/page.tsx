
import { Suspense } from "react";
import Spinner from "../ui/loader";
import UserTable from "../ui/userTable";


export default async function Page() {
  return (
    <Suspense fallback={<Spinner/>} >
      <UserTable />
    </Suspense>
  );
}
