'use client'

export default function Error(
    {
        error,
        reset
    }:{
        error:Error & {digest:String},
        reset:()=>void
    }
){
    <html>
        <body>
            <h2>
                Something went wrong
            </h2>
            <button onClick={()=>reset()}>Try again</button>
        </body>
    </html>
}