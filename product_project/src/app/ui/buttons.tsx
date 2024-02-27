
import { DeleteProduct, DeleteUser } from "../lib/actions";
import { DeleteButton} from "./button";


export function DeleteProductButton({ id }: { id: string }) {
  const deleteProductById = DeleteProduct.bind(null,id)
  return(
    <form action={deleteProductById}>
      <DeleteButton />
    </form>
  )
}

export function DeleteUserButton({ id }: { id: string }) {
  const deleteUserById = DeleteUser.bind(null,id)
  return(
    <form action={deleteUserById}>
      <DeleteButton />
    </form>
  )
}
