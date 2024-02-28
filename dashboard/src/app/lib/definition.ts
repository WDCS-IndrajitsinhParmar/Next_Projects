export type Product = {
    id:string,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}

export type User = {
    id:string,
    email:string,
    username:string,
    password:string,
    name:{
        firstname:string,
        lastname:string
    },
    address:{
        city:string,
        street:string,
        number:number,
        zipcode:string,
        geolocation:{
            lat:string,
            long:string
        }
    },
    phone:string
}

export type State={
    message?: string | null;
    errors?:{
        product_name?:string[],
        price?:string[],
        description?:string[],
        image?:string[],
        category?:string[]
    }
    serverError?:string | null;
}

export type UserState={
    message?:string | null;
    errors?:{
        firstname?:string[],
        lastname?:string[],
        city?:string[],
        email?:string[],
        phone?:string[]
    }
    serverError?:string | null;
}

export function UpdateProductAPI(id:string){
    return `https://fakestoreapi.com/products/${id}`
}

export function CreateProductAPI(){
    return "https://fakestoreapi.com/products"
}