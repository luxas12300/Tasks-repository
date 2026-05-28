"use client";

import { useState } from "react"
import Input from "../components/Input"



function AddTasks({onAddTaskSubmit}:any){

    const [title, setTile] = useState("")
    const [description, setDescription] = useState("")


    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col text-black gap-2">
            <Input 
                type="text" 
                placeholder="Digite o título da sua tarefa" 
                value={title}  
                onChange={(event:any) => setTile(event.target.value)}/>

            <Input 
                type="text" 
                placeholder="Digite a descrição da sua tarefa"
                value={description}onChange={(event:any) => setDescription(event.target.value)}
                />
                
            <button 
                onClick={() => {

                    if(!title.trim() || !description.trim()){
                        return alert("Preencha o título e a descrição da tarefa")
                    }
                    onAddTaskSubmit(title, description)
                    setTile("")
                    setDescription("")
                }

                }
            > 
            Adicionar
             </button>
        </div>
    )
}

export default AddTasks