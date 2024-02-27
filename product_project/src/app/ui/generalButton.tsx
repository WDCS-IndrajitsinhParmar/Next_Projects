interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }

export function Button({children}:ButtonProps){
    return(
        <button className="py-2 px-3 bg-[#3570F3] text-white rounded-md">
            {children}
        </button>
    )
}