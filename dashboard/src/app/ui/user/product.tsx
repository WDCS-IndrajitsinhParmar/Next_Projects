import { getProductData } from "@/app/lib/adminData";
import Image from "next/image";
import { AddButton } from "./addbutton";
import { addToCart } from "@/app/lib/actions";

export default async function Product(){
    const products = await getProductData();
    return(
        <div className="w-full mb-2  flex flex-wrap justify-center gap-12">
            {products?.map((product:any)=>{
                return(
                    <div key={product.id} className="w-[270px] p-4 border border-gray-400 rounded-md flex items-center justify-start gap-4">
                        <Image
                        src={product.image}
                        alt="product"
                        width={100}
                        height={100}
                        />
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-center">{product.category}</p>
                            <p className="font-semibold text-center">$ {product.price}</p>
                            <form action={addToCart}>
                                <AddButton />
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
