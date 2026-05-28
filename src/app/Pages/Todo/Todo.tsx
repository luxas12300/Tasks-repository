"use client";

import { useState, useEffect } from "react";
import AddTasks from "../AddTasks/page";
import Tasks from "../Tasks/page";
import { v4 as uuidv4 } from "uuid";

interface Task {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
}

// Dados iniciais para demonstração
const INITIAL_TASKS: Task[] = [];

function Todo() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isClient, setIsClient] = useState(false);

    // Carregar tarefas do localStorage APENAS no cliente
    useEffect(() => {
        setIsClient(true);
        try {
            const storedTasks = localStorage.getItem("tasks");
            console.log("Loading tasks from localStorage:", storedTasks);
            
            if (storedTasks) {
                const parsedTasks = JSON.parse(storedTasks);
                if (Array.isArray(parsedTasks) && parsedTasks.length > 0) {
                    setTasks(parsedTasks);
                    console.log("parsedTasks", tasks)
                } else {
                    setTasks(INITIAL_TASKS);
                }
            } else {
                setTasks(INITIAL_TASKS);
            }
        } catch (error) {
            console.error("Erro ao carregar tarefas:", error);
            setTasks(INITIAL_TASKS);
        }
    }, []);

    // Salvar tarefas no localStorage sempre que mudar
    useEffect(() => {
        if (isClient && tasks.length > 0) {
            try {
                localStorage.setItem("tasks", JSON.stringify(tasks));
                console.log("Saving tasks to localStorage:", tasks);
            } catch (error) {
                console.error("Erro ao salvar tarefas:", error);
            }
        }
    }, [tasks, isClient]);

    function onTaskClick(taskId: string) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });
        setTasks(newTasks);
    }

    function onDeleteTaskClick(taskId: string) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    function onAddTasksSubmit(title: string, description: string) {
        const newTask: Task = {
            id: uuidv4(),
            title,
            description,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
    }

    // Mostra loading ou mensagem enquanto não está no cliente
    if (!isClient) {
        return (
            <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
                <div className="w-[500px] space-y-4">
                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                        Gerenciador de Tarefas
                    </h1>
                    <div className="bg-slate-200 p-6 rounded-md shadow text-center">
                        Carregando tarefas...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Gerenciador de Tarefas
                </h1>
                <AddTasks onAddTaskSubmit={onAddTasksSubmit} />
                <Tasks
                    tasks={tasks} 
                    onTaskClick={onTaskClick} 
                    onDeleteTaskClick={onDeleteTaskClick} 
                />
            </div>
        </div>
    );
}

export default Todo;