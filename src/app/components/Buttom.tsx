"use client"

export default function Buttom(props:any){
    return (
      <button 
        className="bg-slate-400 text-white px-4 py-2 rounded-md font-medium"
        {...props}
      >
        {props.children}
        </button>  
    )
}