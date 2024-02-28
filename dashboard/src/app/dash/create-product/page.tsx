import CreateProduct from "@/app/ui/createProduct";
import { fetchCategories } from "@/app/lib/adminData"
import { lusitana } from "@/app/ui/font";

export default async function Page(){
    const categories:any = await fetchCategories();
    return(
        <div className="w-full items-center">
            <h2 className={`${lusitana.className} text-2xl font-medium  mb-2`}>Create Product</h2>
            <CreateProduct categories={categories}/>
        </div>
        
    )
}