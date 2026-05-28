"use client"
import { ChevronLeftIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react";


export function TaskDetails(){

    const searchParams = useSearchParams();
    const router = useRouter()

    const title = searchParams.get("title") ?? "Título não encontrado";
    const description = searchParams.get("description") ?? "Descrição não encontrada"

    function rollBack(){
        router.back()
    }

    return (
        <div className="bg-slate-500 w-screen h-screen p-6">
            <div className="space-y-4">
                <div className="justify-center flex relative mb-6">
                    <button className="absolute left-0 top-0 "
                    onClick={rollBack}
                    >
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes das task</h1>
                </div>    

                <div className="bg-slate-100 rounded-md p-4">
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-600 mt-2">{description}</p>

                </div>
                
                <div className="gap-4 flex">
                    <button className="bg-slate-400 rounded-md p-4"
                        onClick={() => router.push("/")}
                    >Menu principal</button>
                    
                    {/* <button className="bg-slate-400 rounded-md p-4"
                    onClick={() => router.push("/Pages/Tasks")}
                    >Lista de Tarefas
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default function Task(){
    return (
        <Suspense fallback={
            <div className="bg-slate-500 h-screen w-screen p-6 flex items-center justify-center">
                <div className="text-white text-xl">Carregando detalhes da tarefa....</div>
            </div>
        }>
            <TaskDetails />
        </Suspense>
    )
}