'use client'

import { useFormStatus } from "react-dom"

export function AddButton(){
    const {pending} = useFormStatus();
    return(
        <button className="py-2 px-3 bg-[#3570F3] text-white rounded-md" type="submit" aria-disabled={pending}>
            {pending ? 
                "Adding...":
                    "Add to cart"
            }
      </button>
    )
}
