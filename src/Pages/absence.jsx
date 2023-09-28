import React from "react";
import { useState, useEffect } from "react";
import MonthlyPlanning from "./monthlyPlanning";
import "../Styles/absence.css"

function Absence() {

    // // Save unavailabilities in state
    const [selectedDates, setSelectedDates] = useState(
        JSON.parse(localStorage.getItem("selectedDates"))
        ?? []
    );

    const handleClick = (index) => {
        selectedDates[index] = !selectedDates[index];
        setSelectedDates([...selectedDates])
    }

    // Save the state in the localstorage
    useEffect(() => {
        localStorage.setItem("selectedDates", JSON.stringify(selectedDates))
    }, [selectedDates])

    // let binary = unavailable.reduce((acc, cur, i) => acc | (cur << i), 0)
    // const arr = new Array(unavailable.length).fill(false)
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = ((binary & (1 << i)) !== 0)
    // }
    // console.log(arr);



    return (
        <div>
            <h2>Indisponibilités</h2>
            <MonthlyPlanning handleClick={handleClick} selectedDates={selectedDates} />
        </div >

    )
}

export default Absence