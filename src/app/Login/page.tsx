"use client";
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";
import { useState, useEffect, useContext } from "react";
import { Route } from "next";

function Login(){
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = (event:any) =>{
        event.preventDefault()

        alert("Enviando os dados: " + username + " - " + password)
    }
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div>
                    <h3>Digide seu email</h3>
                    <input 
                        type="email"
                        placeholder="E-mail" 
                        onChange={((e) => setUsername(e.target.value))}/>
                    <FaUser className="icon"/>
                </div>
                <div>
                    <h3>Senha</h3>
                    <input 
                        type="text" 
                        placeholder="senha"
                        onChange={((e) => setPassword(e.target.value))}/>
                    <FaLock className="icon"/>
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembrar de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="#">Registrar</a>
                    </p>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Login;