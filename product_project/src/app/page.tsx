import { Suspense } from "react";
import ProductTable from "./ui/producttable";
import Spinner from "./ui/loader";
import { Button } from "./ui/generalButton";
import Link from "next/link";


export default async function Home() {
  return (
    <div className="w-full">
      <div className="w-full flex gap-4 mb-6">
        <input type="text" placeholder="Search product" className="flex-grow focus:outline-none bg-white border border-slate-200 rounded-md px-2"/>
        <Link href="/create-product">
          <Button>Add Product</Button>
        </Link>
        
      </div>
      <Suspense fallback={<Spinner/>} >
        <ProductTable />
      </Suspense>
    </div>
  );
}
