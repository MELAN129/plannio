import React from "react";
import { useState, useEffect } from "react";

function Group({ group }) {


    const [groupMembers, setGroupMembers] = useState([])

    useEffect(() => {
        if (group) {
            fetch("http://localhost:5500/groups/" + group.id + "/users", {
                method: "GET"
            })
                .then((response) => response.json())
                .then((data) => {
                    setGroupMembers(data);
                })
                .catch((error) => console.log(error));
        }
    }, [group])

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5500/users", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.log(error));
    }, [])

    const handleDelete = (group) => {
        if (window.confirm("Voulez-vous vraiment supprimer le groupe " + group.name + " ?")) {
            const requestOptions = {
                method: 'DELETE',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(group)
            };
            fetch("http://localhost:5500/groups/" + group.id, requestOptions)
                .catch((error) => console.log(error));
        }
    }

    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive)
    }

    const [usersAddable, setUsersAddable] = useState([])

    const addMember = () => {
        const groupMembersId = groupMembers.map((member) => member.id)
        setUsersAddable(users.filter((user) => !groupMembersId.includes(user.id)));
    }

    const addThisMember = (user) => {
        if (window.confirm("Voulez-vous vraiment ajouter " + user.name + " au groupe " + group.name + " ?")) {
            const requestOptions = {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(user)
            };
            fetch("http://localhost:5500/groups/" + group.id + "/users", requestOptions)
                .catch((error) => console.log(error));
        }
    }

    return (
        <div>
            <label
                htmlFor="">
                <span>{group.name}</span>
                <span>Responsable : {group.head}</span>
                <button onClick={() => handleDelete(group)}>Supprimer</button>
                <button onClick={() => toggle()}>{isActive ? "-" : "+"}</button>
                {isActive && <>
                    {groupMembers.map((member, index) => {
                        return (
                            <span key={index}>{member.name}</span>
                        )
                    })}
                    <button onClick={() => {
                        addMember()
                    }}>Ajouter un nouveau membre</button>
                    {usersAddable.map((user, index) => {
                        return (
                            <div key={index}>
                                <button onClick={() => addThisMember(user)}>{user.name}</button>
                            </div>
                        )
                    })}
                </>
                }
            </label>
        </div>
    )
}

export default Group;