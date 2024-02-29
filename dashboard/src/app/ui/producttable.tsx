import Image from "next/image";
import { getProductData } from "../lib/adminData";
import { DeleteProductButton} from "./buttons";
import Link from "next/link";

export default async function ProductTable() {
  const products = await getProductData();
  return (
    <>
    <div className="w-full md:hidden">
      {
        products.map((product:any)=>{
          return(
            <div className="w-full border-8 border-[#f4f8fc] p-4 rounded-md mb-8" key={product.id}>
              <div className="flex flex-row justify-between gap-8 pb-4 border-b">
                  <Image
                      src={product.image}
                      alt="product"
                      width={70}
                      height={70}
                    />
                <div className="flex-grow">
                  <div>
                    {product.title}
                  </div>
                  <div className="font-medium mt-2">
                    {product.category}
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <div className="font-semibold">{product.price}</div>
                <div className="flex gap-4">
                  <Link href={`/dash/${product.id}/edit`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="green"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                  </Link>
                  <DeleteProductButton id={product.id} />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    <table className="w-full hidden md:table bg-gray-50 shadow-lg shadow-gray-100 rounded-md">
      <thead>
        <tr>
          <th className="pt-4 pb-2 text-left px-4">Name</th>
          <th className="pt-4 pb-2 text-left px-4">Categories</th>
          <th className="pt-4 pb-2 text-left px-4">Price</th>
          <th className="pt-4 pb-2 text-left px-4">Image</th>
          <th className="pt-4 pb-2 text-left px-4"></th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {products?.map((product: any) => {
          return (
            <tr className="h-auto w-full border-b" key={product.id}>
              <td className="w-1/3 px-3 ">{product.title}</td>
              <td className="w-1/5 px-3 ">{product.category}</td>
              <td className="w-1/5 px-3 ">{product.price}</td>
              <td className="py-3 px-4">
                <Image
                  src={product.image}
                  alt="product"
                  width={60}
                  height={60}
                />
              </td>
              <td>
                <div className="flex justify-center gap-4">
                  <Link href={`/dash/${product.id}/edit`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="green"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                  </Link>
                  <DeleteProductButton id={product.id} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}
