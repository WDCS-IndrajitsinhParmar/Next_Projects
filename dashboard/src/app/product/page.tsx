import { fetchCart } from "../lib/adminData"
import Product from "../ui/user/product";

export default  async function Page(){
    const cartData = await fetchCart();
    return(
      <Product />
    )
}