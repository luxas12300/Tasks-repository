"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface TaskClientProps {
    title?: string;
    description?: string;
}

export default function TaskClient({ title, description }: TaskClientProps) {
    const router = useRouter();
    
    const taskTitle = title ?? "Título não informado";
    const taskDescription = description ?? "Sem descrição";
    
    function onBackClick() {
        router.back();
    }
    
    return (
        <div className="bg-slate-500 h-screen w-screen p-6">
            <div className="space-y-4">
                <div className="justify-center flex relative mb-6">
                    <button 
                        className="absolute left-0 top-0" 
                        onClick={onBackClick}
                    >
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                        Detalhes da tarefa
                    </h1>
                </div>
                
                <div className="bg-slate-200 p-4 rounded-md shadow">
                    <h2 className="text-xl text-slate-600 font-bold">{taskTitle}</h2>
                    <p className="text-slate-600 mt-2">{taskDescription}</p>
                </div>
                
                <div className="gap-4 flex">
                    <button 
                        className="bg-slate-400 rounded-md p-4" 
                        onClick={() => router.push("/")}
                    >
                        Menu principal
                    </button>
                    <button 
                        className="bg-slate-400 rounded-md p-4" 
                        onClick={() => router.push("/Pages/Tasks")}
                    >
                        Lista de tarefas
                    </button>
                </div>
            </div>
        </div>
    );
}