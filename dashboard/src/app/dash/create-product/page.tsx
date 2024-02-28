import CreateProduct from "@/app/ui/createProduct";
import { fetchCategories } from "@/app/lib/adminData"

export default async function Page(){
    const categories:any = await fetchCategories();
    return(
        <CreateProduct categories={categories}/>
    )
}