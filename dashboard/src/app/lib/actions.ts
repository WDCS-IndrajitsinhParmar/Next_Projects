"use server";

import { z } from "zod";
import { State, UserState } from "@/app/lib/definition";
import { revalidatePath } from "next/cache";

const productSchema = z.object({
  id: z.string(),
  product_name: z
    .string()
    .min(3, { message: "Enter valid product name" })
    .max(60, { message: "Please enter short name" })
    .refine((value) => value.trim().length > 4, {
      message: "Enter valid product name",
    }),
  price: z.coerce
    .number()
    .gte(1, { message: "Enter valid amount" })
    .lte(1000, { message: "Too big number" }),
  description: z
    .string()
    .min(20, { message: "Minimum 20 character reqired" })
    .max(150, { message: "Too long" }),
  image: z.string(),
  category: z
    .string()
    .refine((value) => value !== undefined || value !== null, {
      message: "Please select a category",
    }),
});

const userSchema = z.object({
  id: z.string(),
  firstname: z
    .string()
    .min(2, { message: "Minimum two character reqired" })
    .max(15, { message: "Too long name" })
    .refine((value) => value.trim().length > 2, {
      message: "Please enter a valid name",
    }),
  lastname: z
    .string()
    .min(2, { message: "Minimum two character reqired" })
    .max(15, { message: "Too long name" })
    .refine((value) => value.trim().length > 2, {
      message: "Please enter a valid name",
    }),
  email: z.string().email(),
  city: z
    .string()
    .min(3, { message: "Enter valid city name" })
    .max(15, { message: "Enter valid city name" })
    .regex(
        new RegExp(
            /^[A-Za-z\s\-]+$/
        ),
        "Please enter valid city name"
    ),
  phone: z  
    .string()
    .regex(
      new RegExp(
        /^(?:\+\d{1,3})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})$/
      ),
      "Please enter valid mobile number"
    ),
});

const CreateProduct = productSchema.omit({ id: true });
const CreateUser = userSchema.omit({ id: true });

export async function UpdateProduct(
  id: string,
  prevState: State,
  formData: FormData
) {
  let rowImage;
  const image = formData.get("image");

  if (image instanceof File) {
    rowImage = image.name;
  } else {
    return { message: "Not a valid File object" };
  }

  let rowData = { ...Object.fromEntries(formData.entries()), image: rowImage };
  const validFormData = CreateProduct.safeParse(rowData);

  if (!validFormData.success) {
    return {
      errors: validFormData.error.flatten().fieldErrors,
    };
  }
  const product = validFormData?.data;
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: product.product_name,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      }),
    }).then((res) => res.json());
    return {
      message: "Successfully product updated",
    };
  } catch (error) {
    return {
      serverError: "Server error",
    };
  }
}

export async function CreateNewProduct(prevState: State, formData: FormData) {
  let rowImage;
  const image = formData.get("image");

  if (image instanceof File) {
    rowImage = image.name;
  } else {
    return { message: "Not a valid File object" };
  }

  let rowData = { ...Object.fromEntries(formData.entries()), image: rowImage };
  const validFormData = CreateProduct.safeParse(rowData);

  if (!validFormData.success) {
    return {
      errors: validFormData.error.flatten().fieldErrors,
    };
  }
  const product = validFormData?.data;
  try {
    const data = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: product.product_name,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      }),
    }).then((res) => res.json());
    return {
      message: "Successfully product created",
    };
  } catch (error) {
    return {
      serverError: "Server error",
    };
  }
}

export async function DeleteProduct(id: string) {
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    console.log(data);
    revalidatePath("/");
    return { message: "Invoice deleted successfully" };
  } catch (error) {
    throw new Error("Product not deleted");
  }
}

export async function DeleteUser(id: string) {
  try {
    const data = await fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    console.log(data);
    revalidatePath("/");
    return { message: "Invoice deleted successfully" };
  } catch (error) {
    throw new Error("Product not deleted");
  }
}

export async function UpdateUser(
  id: string,
  prevState: UserState,
  formData: FormData
) {
    const rowData = Object.fromEntries(formData.entries());
    const validFormData = CreateUser.safeParse(rowData);

    if(!validFormData.success){
        return{
            errors: validFormData.error.flatten().fieldErrors,
        }
    }
    const user = validFormData.data;

    try {
        const data = await fetch(`https://fakestoreapi.com/users/${id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    email:user.email,
                    username:user.firstname+user.lastname,
                    password:'m38rmF$',
                    name:{
                        firstname:user.firstname,
                        lastname:user.lastname
                    },
                    address:{
                        city:user.city,
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:user.phone
                }
            )
        }).then(res=>res.json());
        return{
            message:"User updated succesfully"
        }
    } catch (error) {
        return{
            serverError:"Server Error"
        }
    }
}

export async function CreateNewUser(prevState:UserState, formData: FormData) {
    const rowData = Object.fromEntries(formData.entries());
    const validFormData = CreateUser.safeParse(rowData);

    if(!validFormData.success){
        return{
            errors: validFormData.error.flatten().fieldErrors,
        }
    }
    const user = validFormData.data;

    try {
        const data = await fetch("https://fakestoreapi.com/users",{
            method:"POST",
            body:JSON.stringify(
                {
                    email:user.email,
                    username:user.firstname+user.lastname,
                    password:'m38rmF$',
                    name:{
                        firstname:user.firstname,
                        lastname:user.lastname
                    },
                    address:{
                        city:user.city,
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:user.phone
                }
            )
        }).then(res=>res.json());
        return{
            message:"User created succesfully"
        }
    } catch (error) {
        return{
            serverError:"Server Error"
        }
    }
}
