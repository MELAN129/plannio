import React from "react";
import { useState, useEffect } from "react";
import "../Styles/editProfils.css"
import Profil from "../Components/profil"

function EditProfils() {

    // Get users

    const [profils, setProfils] = useState([])
    useEffect(() => {
        fetch("http://localhost:5500/users", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setProfils(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const [newProfil, setNewProfil] = useState({ name: "", role: "", assignments: [""] })

    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(newProfil)
        };
        fetch("http://localhost:5500/users", requestOptions)
            .then(
                (data) => {
                    setNewProfil({ name: "", role: "", assignments: [""] });
                    console.log(data)
                }
            )
            .catch((error) => console.log(error));
    }

    return (
        <div className="profils">
            {profils.map((profil, index) =>
                <Profil profil={profil} key={index} />
            )}

            <div>
                <h2>Créer un profil</h2>
                <div className="create-profil">
                    <input
                        type="text"
                        placeholder="Nom"
                        className="create-profil_item"
                        onChange={(e) =>
                            setNewProfil({ ...newProfil, name: e.target.value })
                        } />
                    <input
                        type="text"
                        placeholder="Role"
                        className="create-profil_item"
                        onChange={(e) => setNewProfil({ ...newProfil, role: e.target.value })} />

                    <button
                        className="create-profil_item"
                        onClick={() => handleSubmit()}
                    >
                        Créer profil
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditProfils

// 1) creer state qui sera array
// 2) useEffect au chargement qui fetch l'api et injecte dans state
// 3) map sur state.
// 4) Si state vide, afficherloader

