"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"
export interface Task{
    title: string,
    description: string,
}

function AddTasks({onAddTaskSubmit}: {onAddTaskSubmit(title: string, description: string) : void}){

    const [title, setTile] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter();


    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col text-black gap-2">
            <input type="text" 
                placeholder="Digite o título da sua tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md p-2"
                value={title}
                onChange={(event) => setTile(event.target.value)}
                />
            <input type="text" 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md p-2" 
                placeholder="Digite a descrição da sua tarefa"
                value={description}onChange={(event) => setDescription(event.target.value)}/>
            <button 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
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

             <button className="text-slate-600 font-semi-bold" 
             onClick={() => router.push("/")}>
                Voltar para o menu
                </button>
        </div>
    )
}

export default AddTasks