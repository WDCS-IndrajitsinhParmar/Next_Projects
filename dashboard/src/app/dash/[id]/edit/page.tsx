import { fetchCategories, fetchProductById } from "@/app/lib/adminData"
import { Product } from "@/app/lib/definition";
import EditProductForm from "@/app/ui/editProduct"
import { lusitana } from "@/app/ui/font";

export default async function Page({params}:{params:{id:string}}){   
    const id = params.id; 
    const categories:any = await fetchCategories();
    const product:Product = await fetchProductById(id);
    return(
        <div className="w-full items-center">
            <h2 className={`${lusitana.className} text-2xl font-medium  mb-2`}>Edit Product</h2>
            <EditProductForm categories={categories} product={product}/>
        </div>

    )
}