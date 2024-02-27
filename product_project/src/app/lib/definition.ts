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
    
}

export type State={
    message?: string | null;
    errors?:{
        // id?:string[]
        product_name?:string[],
        price?:string[],
        description?:string[],
        image?:string[],
        category?:string[]
    }
}