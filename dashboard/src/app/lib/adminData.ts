
export async function getProductData(){
    try {
        const data = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    return data
    } catch (error) {
        console.log("getProductError", error)
        throw new Error("Somthing went wrong")
    }
    
}

export async function getUsers(){
    try {
        const data = fetch('https://fakestoreapi.com/users').then(res=>res.json())
        return data;
    } catch (error) {
        console.log("getUsers", error)
        throw new Error("Somthing went wrong")
    }
}

export async function getUserById(id:string){
    try {
        const data = await fetch(`https://fakestoreapi.com/users/${id}`).then(res=>res.json())
        return data;
    } catch (error) {
        console.log("getUser", error)
        throw new Error("Somthing went wrong")
    }
}

export async function fetchCategories(){
    try {
        const data = await fetch('https://fakestoreapi.com/products/categories')
                        .then(res=>res.json());
        return data;
    } catch (error:any) {
        console.log("fetchCategoriesError", error)
        throw new Error("Somthing went wrong")
    }
}

export async function fetchProductById(id:string){
    try {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
                    .then(res=>res.json())
        return data;
    } catch (error) {
        console.log("fetchProductError", error)
        throw new Error("Somthing went wrong")
    }
}