'use server';

import {z} from 'zod';
import { State } from "../lib/definition"
import { revalidatePath } from 'next/cache';

const productSchema = z.object({
    id:z.string(),
    product_name:z.string()
                    .min(3,{message:"Enter valid product name"})
                    .max(25,{message:"Please enter short name"})
                    .refine((value)=>value.trim().length<4,{message:"Enter valid product name"}),
    price:z.number()
            .min(1,{message:"Enter valid amount"})
            .max(1000000, {message:"Enter amount below 1000000"}),
    description:z.string()
                    .min(20, {message:"Minimum 20 character reqired"})
                    .max(50, {message:"Too long"}),
    image:z.string(),
    category:z.string()
                .refine((value)=> value === undefined || value === null, {message:"Please select a category"})
})

const userSchema = z.object({
    id:z.string(),
    firstname:z.string()
                .min(2,{message:"Minimum two character reqired"})
                .max(15,{message:"Too long name"})
                .refine((value)=>value.trim().length < 2 ,{message:"Please enter a valid name"}),
    lastname:z.string()
                .min(2,{message:"Minimum two character reqired"})
                .max(15,{message:"Too long name"})
                .refine((value)=>value.trim().length < 2 ,{message:"Please enter a valid name"}),
    email:z.string().email(),
    city:z.string()
            .min(3,{message:"Enter valid city name"})
            .max(15,{message:"Enter valid city name"}),
    phone:z.string()
})

const CreateProduct = productSchema.omit({id:true});
const CreateUser = userSchema.omit({id:true});

export async function UpdateProduct(id:string, prevState:State, formData:FormData){
    
}

export async function DeleteProduct(id:string){
    try {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`,{
                        method:"DELETE"
                    })
                    .then(res=>res.json())
        console.log(data)
        revalidatePath('/');
        return{message:"Invoice deleted successfully"}
    } catch (error) {
        throw new Error("Product not deleted")
    }
}

export async function DeleteUser(id:string){
    try {
        const data = await fetch(`https://fakestoreapi.com/users/${id}`,{
                        method:"DELETE"
                    })
                    .then(res=>res.json())
        console.log(data)
        revalidatePath('/');
        return{message:"Invoice deleted successfully"}
    } catch (error) {
        throw new Error("Product not deleted")
    }
}