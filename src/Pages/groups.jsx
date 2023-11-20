import React from "react";
import { useState, useEffect } from "react";
import Group from "../Components/group"

function Groups() {

    // Get groups

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/groups", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setGroups(data);
            })
            .catch((error) => console.log(error));
    }, [])

    // Create new group

    const [newGroup, setNewGroup] = useState({ name: "", description: "", head: "" })

    const handleSubmit = () => {
        console.log(JSON.stringify(newGroup))
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(newGroup)
        };
        fetch("http://localhost:5500/groups", requestOptions)
            .then(
                (data) => {
                    setNewGroup({ name: "", description: "", head: "" });
                    console.log(data)
                }
            )
            .catch((error) => console.log(error));
    }


    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Nom"
                    onChange={(e) => {
                        setNewGroup({ ...newGroup, name: e.target.value })
                    }} />
                <input
                    type="text"
                    placeholder="Description"
                    onChange={(e) => {
                        setNewGroup({ ...newGroup, description: e.target.value })
                    }} />
                <input
                    type="text"
                    placeholder="Responsable"
                    onChange={(e) => {
                        setNewGroup({ ...newGroup, head: e.target.value })
                    }} />
                <button onClick={() => handleSubmit()}>Créer un nouveau groupe</button>
            </div>
            <div>
                {
                    groups.map((group, index) => {
                        return (
                            <Group group={group} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Groups