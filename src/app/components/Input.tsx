"use client"

export default function Input(props:any){
    return (
        <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        {...props}
        // type={props.type}
        // placeholder={props.placeholder}
        // value={props.value}
        // onChange={props.onchange}
        />    
        
    )
}