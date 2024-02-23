import { Suspense } from "react";
import ProductTable from "./ui/producttable";
import Spinner from "./ui/loader";


export default async function Home() {
  return (
    <Suspense fallback={<Spinner/>} >
      <ProductTable />
    </Suspense>
  );
}
