import React from "react";
import { useState, useEffect } from "react";
import Program from "../Components/program"

function EditPrograms() {

    // Get groups

    const [groups, setGroups] = useState({ name: "", fields: [] })

    useEffect(() => {
        fetch("http://localhost:5500/groups", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setGroups(data)
            })
            .catch((error) => console.log(error));
    }, [])

    // Get programs

    const [programs, setPrograms] = useState([])

    useEffect(() => {
        fetch("http://localhost:5500/programs", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setPrograms(data)
            })
            .catch((error) => console.log(error));
    }, [])



    // Add and delete new field to the new program

    const [newField, setNewField] = useState({ name: "", group: "" })

    const [addFieldToggle, setAddFieldToggle] = useState(false)

    const addField = () => {
        setAddFieldToggle(!addFieldToggle)
    }

    const submitNewField = () => {
        setNewProgram({ ...newProgram, fields: [...newProgram.fields, newField] });
    }

    const deleteField = (index) => {
        newProgram.fields.splice(index, 1);
        setNewProgram({ ...newProgram, fields: newProgram.fields })
    }

    // Create new program

    const [newProgram, setNewProgram] = useState({ name: "", fields: [] })

    const submitNewProgram = () => {
        if (window.confirm("Voulez-vous vraiment créer le groupe " + newProgram.name + " ?")) {
            fetch("http://localhost:5500/programs", {
                method: "POST",
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(newProgram)
            })
                .then(() =>
                    setNewProgram({ name: "", fields: [] })
                )
                .catch((error) => console.log(error));
        }
    }

    return (
        <div>
            <div className="bg-red-500">
                Créer un nouveau programme
                <input
                    type="text"
                    placeholder="Nom du programme"
                    onChange={(e) => setNewProgram({ ...newProgram, name: e.target.value })}
                />
                <button
                    onClick={() => addField()}
                >
                    Ajouter un champ
                </button>

                {
                    addFieldToggle ?
                        <div>
                            <input
                                type="text"
                                placeholder="Nom du champ"
                                onChange={(e) => setNewField({ ...newField, name: e.target.value })}
                            />
                            <select
                                name=""
                                id=""
                                onChange={(e) => setNewField({ ...newField, group: e.target.value })}
                            >
                                <option
                                    value=""
                                >
                                    Choisir un groupe
                                </option>
                                {
                                    groups.map((group, index) => { return <option key={index} value={group.name}>{group.name}</option> }
                                    )
                                }
                            </select>
                            <button
                                onClick={() => submitNewField()}
                            >
                                Ajouter nouveau champ
                            </button>
                            <button
                                onClick={() => addField()}
                            >
                                Annuler
                            </button>
                        </div> :
                        <></>
                }
                {
                    newProgram.fields.map((field, index) => {
                        return (
                            <div key={index}>
                                <span>{field.name}</span>
                                <span>{field.group}</span>
                                <button
                                    onClick={() => deleteField(index)}
                                >
                                    Supprimer
                                </button>
                            </div>
                        )
                    })
                }
                <button
                    onClick={() => submitNewProgram()}
                >
                    Créer un nouveau programme
                </button>
            </div>
            <div>
                {
                    programs.map((program, index) => {
                        return (
                            <Program program={program} key={index} />
                        )
                    })
                }
            </div>
        </div >
    )
}

export default EditPrograms;