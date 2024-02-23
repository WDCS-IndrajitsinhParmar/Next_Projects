import Image from "next/image";
import { getProductData } from "../lib/adminData";
import { UpdateProduct } from "./buttons";

export default async function ProductTable() {
  const products = await getProductData();
  return (
    <table className="w-full hidden md:table bg-gray-50 shadow-md shadow-gray-100 rounded-md">
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
                  <UpdateProduct id={product.id}/>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="red"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
