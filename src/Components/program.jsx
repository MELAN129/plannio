import React from "react";
import { useState } from "react";

function Program({ program }) {

    const fields = JSON.parse(program.fields);

    const [displayProgramToggle, setDisplayProgramToggle] = useState(false)

    const deleteProgram = () => {
        if (window.confirm("Voulez-vous vraiment supprimer le programme " + program.name + " ?")) {
            const requestOptions = {
                method: 'DELETE',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(program)
            };
            fetch("http://localhost:5500/programs/" + program.id, requestOptions)
                .catch((error) => console.log(error));
        }
    }

    return (
        <div>
            <span>
                {program.name}
            </span>
            <button
                onClick={() => setDisplayProgramToggle(!displayProgramToggle)}
            >
                {
                    displayProgramToggle ?
                        "-" :
                        "+"
                }
            </button>
            {
                displayProgramToggle
                    ?
                    <div>
                        {
                            fields.map((field, index) => {
                                return (
                                    <span key={index}>{field.name}</span>
                                )
                            })
                        }
                        <button onClick={() => deleteProgram()}>Supprimer</button>
                    </div>
                    :
                    <></>
            }
        </div>
    )
}

export default Program;