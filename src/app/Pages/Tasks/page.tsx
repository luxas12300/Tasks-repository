// "use client"
// import Buttom from "@/app/components/Buttom";
// import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { Router } from "react-router-dom";

// export interface Task{
//     id: string,
//     title: string,
//     description: string,
//     isCompleted: boolean
// }

// interface TasksProps{
//     tasks: Task[];
//     onTaskClick?: (id: string) => void;
//     onDeleteTaskClick?: (id: string) => void;
// }

// function Tasks ({tasks, onTaskClick, onDeleteTaskClick}: TasksProps){
//     console.log("tasks:",tasks)


//     const router = useRouter();

//     function seeTaskDetails(task: Task): void{
//         const query = new URLSearchParams();
//         query.set("title", task.title)
//         query.set("description", task.description)
//         router.push(`/Pages/TaskPage?${query.toString()}`)
//     }

//     // if(!tasks || tasks.length == 0){
//     //     console.log("Tasks lenght:", tasks?.length)
//     //     console.log(tasks)
//     //     return (
//     //         <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
//     //             <li className="text-center text-slate-600">Nenhuma task encontrada</li>
//     //         </ul>
//     //     )
//     // }

//     return (
//         <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
//             {tasks.map((task: Task) => (
//                 <li key={task.id} className="flex gap-2">
//                     <button onClick={() => onTaskClick?.(task.id)} className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
//                         {task.title}
//                     </button>
                    
//                     <Buttom onClick={() => {seeTaskDetails(task)}}> <ChevronRightIcon /></Buttom>

//                     <Buttom onClick={() => onDeleteTaskClick?.(task.id)}><TrashIcon/></Buttom>
//                     {/* <button onClick={() => router.push("/")}>Voltar para o menu</button> */}
//                 </li>
//         ))}

//         </ul>
//     )
// }

// export default Tasks;

"use client";

import Buttom from "@/app/components/Buttom";
import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export interface Task {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
}

interface TasksProps {
    tasks?: Task[];
    onTaskClick?: (id: string) => void;
    onDeleteTaskClick?: (id: string) => void;
}

function Tasks({ tasks = [], onTaskClick, onDeleteTaskClick }: TasksProps) {
    const router = useRouter();

    console.log("Tasks component - received tasks:", tasks);
    console.log("Tasks component - tasks length:", tasks?.length);


    function seeTaskDetails(task: Task): void {
        
        const params = new URLSearchParams({
            title: task.title,
            description: task.description
        })

        router.push(`/Pages/TaskPage?${params.toString()}`)
        
        // const query = new URLSearchParams();
        // query.set("title", task.title);
        // query.set("description", task.description);
        // router.push(`/Pages/TaskPage?${query.toString()}`);
    }

    // Verificação segura
    if (!tasks || tasks.length === 0) {
        return (
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                <li className="text-center text-slate-600">
                    Nenhuma tarefa encontrada
                </li>
                <li className="text-center text-slate-400 text-sm">
                    Adicione sua primeira tarefa acima!
                </li>
                <li>
                    <button className="bg-slate-400 rounded-md p-4"
                    onClick={
                        () => router.push("/")
                    }
                    >Menu principal</button>
                </li>
            </ul>
        );
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task: Task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => onTaskClick?.(task.id)} 
                        className={`bg-slate-400 w-full text-left flex text-white items-center gap-2 p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}
                    >
                        {task.isCompleted && <CheckIcon />}
                        {task.title}
                    </button>
                    
                    <button 
                        onClick={() => seeTaskDetails(task)}
                        className="bg-slate-400 p-2 rounded-md hover:bg-slate-500 transition-colors"
                    >
                        <ChevronRightIcon />
                    </button>

                    <button 
                        onClick={() => onDeleteTaskClick?.(task.id)}
                        className="bg-slate-400 p-2 rounded-md hover:bg-slate-500 transition-colors"
                    >
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;

// "use client";

// import { Suspense } from "react";
// import { ChevronLeftIcon } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";

// // Componente que usa useSearchParams
// function TaskDetails() {
//     const searchParams = useSearchParams();
//     const router = useRouter();
    
//     const title = searchParams.get("title") ?? "Título não informado";
//     const description = searchParams.get("description") ?? "Sem descrição";
    
//     function onBackClick() {
//         router.back();
//     }
    
//     return (
//         <div className="bg-slate-500 h-screen w-screen p-6">
//             <div className="space-y-4">
//                 <div className="justify-center flex relative mb-6">
//                     <button 
//                         className="absolute left-0 top-0" 
//                         onClick={onBackClick}
//                         aria-label="Voltar"
//                     >
//                         <ChevronLeftIcon />
//                     </button>
//                     <h1 className="text-3xl text-slate-100 font-bold text-center">
//                         Detalhes da tarefa
//                     </h1>
//                 </div>
                
//                 <div className="bg-slate-200 p-4 rounded-md shadow">
//                     <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
//                     <p className="text-slate-600 mt-2">{description}</p>
//                 </div>
                
//                 <div className="gap-4 flex">
//                     <button 
//                         className="bg-slate-400 rounded-md p-4 hover:bg-slate-600 transition-colors" 
//                         onClick={() => router.push("/")}
//                     >
//                         Menu principal
//                     </button>
//                     <button 
//                         className="bg-slate-400 rounded-md p-4 hover:bg-slate-600 transition-colors" 
//                         onClick={() => router.push("/Pages/Tasks")}
//                     >
//                         Lista de tarefas
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Componente principal com Suspense
// export default function TaskPage() {
//     return (
//         <Suspense fallback={
//             <div className="bg-slate-500 h-screen w-screen p-6 flex items-center justify-center">
//                 <div className="text-white text-xl">Carregando detalhes da tarefa...</div>
//             </div>
//         }>
//             <TaskDetails />
//         </Suspense>
//     );
// }