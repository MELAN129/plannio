import React from "react";
import { useState, useEffect } from "react";

function Profil({ profil }) {

    const handleDelete = (profil) => {
        if (window.confirm("Voulez-vous vraiment supprimer " + profil.name + " ?")) {
            const requestOptions = {
                method: 'DELETE',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(profil)
            };
            fetch("http://localhost:5500/users/" + profil.id, requestOptions)
                .catch((error) => console.log(error));
        }
    }


    // Get groups

    const [groups, setGroups] = useState([])

    useEffect(() => {
        fetch("http://localhost:5500/groups", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setGroups(data);
                setSelectedGroup(data[0].name)
            })
            .catch((error) => console.log(error));
    }, []);

    // Get user's groups

    const [usersGroups, setUsersGroups] = useState([""])

    useEffect(() => {
        fetch("http://localhost:5500/users/" + profil.id + "/groups", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setUsersGroups(data);
            })
            .catch((error) => console.log(error));
    }, [profil.id]);

    // Set group to user

    const [selectedGroup, setSelectedGroup] = useState("");

    const addGroup = (profil) => {
        console.log(selectedGroup)
        if (window.confirm("Voulez-vous vraiment ajouter " + profil.name + " au groupe " + selectedGroup + " ?")) {
            const group = groups.find(group => {
                return group.name === selectedGroup
            })
            console.log(group)
            if (!group) return
            const requestOptions = {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({ groupId: group.id })
            };
            fetch("http://localhost:5500/users/" + profil.id + "/groups", requestOptions)
                .then((response) => response.json())
                .then((data) => { setSelectedGroup(groups[0].name); setUsersGroups(data) })
                .catch((error) => console.log(error));

        }

    }

    const handleDeleteGroup = (profil, group) => {
        console.log(profil.id)
        console.log(group.id)
        if (window.confirm("Voulez-vous vraiment supprimer " + profil.name + " du groupe " + group.name + " ?")) {
            const requestOptions = {
                method: 'DELETE',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({ groupId: group.id })
            };
            fetch("http://localhost:5500/users/" + profil.id + "/groups", requestOptions)
                .catch((error) => console.log(error));
        }
    }
    // if (window.confirm("Voulez-vous vraiment ajouter " + profil.name + " au groupe " + selectedGroup + " ?")) {
    //     const group = groups.find(group => {
    //         return group.name === selectedGroup
    //     })
    //     if (!group) return

    return (
        <div>
            <span>{profil.name}</span>
            <span>{profil.role}</span>
            <span>{profil.assignments}</span>
            <ul>Groupes</ul>
            {usersGroups.map((group, index) => {
                return (
                    <div key={index}>
                        <li key={index}>{group.name}</li>
                        <button onClick={() => handleDeleteGroup(profil, group)}>Supprimer</button>
                    </div>
                )
            })}
            <label htmlFor="?">
                <select
                    name="assignments"
                    id="assignments"
                    onChange={(e) => { setSelectedGroup(e.target.value) }}
                >
                    <optgroup
                        label="Sélectionner une responsabilité"
                    >
                        {groups.map((group, index) => {
                            return (
                                <option value={group.name} key={index}>{group.name}</option>
                            )
                        })}
                    </optgroup>
                </select>
            </label>
            <button onClick={() => {
                addGroup(profil);
            }}>Ajouter au groupe</button>
            <button onClick={() => handleDelete(profil)}>Supprimer</button>
        </div>
    )
}

export default Profil