import React, { useState } from "react";
import '../Styles/login.css'
import loginData from "../login.json"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const checkLogin = () => {
        if (email === loginData.mail && password === loginData.password) {
            console.log("Connexion réussie")
        } else if (email !== loginData.mail && password !== loginData.password) {
        } else if (email !== loginData.mail) {
            console.log("Erreur email")
            console.log("Erreur d'identification")
        } else if (password !== loginData.password) {
            console.log("erreur mdp")
        }
    }

    return (
        <div>
            <h2 className="login-title">Connexion</h2>
            <div className="login">
                <input
                    type="text"
                    placeholder="Email"
                    className="login-input"
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="text"
                    placeholder="Mot de passe"
                    className="login-input"
                    onChange={(e) => setPassword(e.target.value)} />
                <button
                    className="login-button"
                    onClick={() => checkLogin()}>Connexion</button>
            </div>
        </div>
    )
}

export default Login