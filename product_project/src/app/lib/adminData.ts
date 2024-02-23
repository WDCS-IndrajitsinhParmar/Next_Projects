
export async function getProductData(){
    try {
        const data = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    return data
    } catch (error) {
        return "Somthing went wrong"
    }
    
}

export async function getUsers(){
    try {
        const data = fetch('https://fakestoreapi.com/users').then(res=>res.json())
        return data;
    } catch (error) {
        return "Somthing went wrong"
    }
}