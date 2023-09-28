import React from 'react';
import { useState } from 'react';
import "../Styles/monthlyPlanning.css"


function MonthlyPlanning({ handleClick, selectedDates }) {

    const [currentDate, setCurrentDate] = useState(new Date())
    const datesToDisplay = getDatesToDisplay(new Date(currentDate.getTime()))

    // Get previous and next month

    const currentMonth = getMonthName(currentDate.getMonth());
    const previousMonth = getMonthName(currentDate.getMonth() - 1)
    const nextMonth = getMonthName(currentDate.getMonth() + 1);


    return (
        <div className='calendar'>

            <div className="month-choice">
                <button
                    onClick={() => {
                        setCurrentDate(
                            () => {
                                currentDate.setDate(0);
                                currentDate.setDate(1);
                                return new Date(currentDate.getTime())
                            }
                        )
                    }}
                >{previousMonth}</button>
                <h3>{currentMonth}</h3>
                <button
                    onClick={() => {
                        setCurrentDate(
                            () => {
                                currentDate.setMonth(currentDate.getMonth() + 1);
                                return new Date(currentDate.getTime())
                            }
                        )
                    }}
                >{nextMonth}</button>
            </div>

            <div className="calendar-header">
                <div className="calendar-cell">
                    <h2>Lundi</h2>
                </div>
                <div className="calendar-cell">
                    <h2>Mardi</h2>
                </div>
                <div className="calendar-cell">
                    <h2>Mercredi</h2>
                </div>
                <div className="calendar-cell">
                    <h2>Jeudi</h2>
                </div>
                <div className="calendar-cell">
                    <h2>Vendredi</h2>
                </div>
                <div className="calendar-cell">
                    <h2>Samedi</h2>
                </div>
                <div className="calendar-cell">
                    <h2>Dimanche</h2>
                </div>
            </div>

            <div className='calendar-dates'>
                {datesToDisplay.map((day, index) => {
                    let className = 'calendar-cell'
                    if (selectedDates?.[index]) {
                        className += ' calendar-cell--selected'
                    }
                    return (<div
                        key={index}
                        className={className}
                        onClick={() => handleClick?.(index)}>
                        {day}
                    </div>)
                })}
            </div>
        </div >
    )
}

function getDatesToDisplay(currentDate) {
    const datesToDisplay = []
    currentDate.setDate(1)
    const monthNumber = currentDate.getMonth()

    // // Get days on the month
    while (currentDate.getMonth() === monthNumber) {
        datesToDisplay.push(currentDate.getDate());
        currentDate.setDate(currentDate.getDate() + 1)
    }

    // // Get days after until sunday
    while ((currentDate.getDay()) !== 1) {
        datesToDisplay.push(currentDate.getDate());
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // // Get days before until monday
    currentDate.setMonth(monthNumber)
    currentDate.setDate(0)

    while ((currentDate.getDay()) !== 0) {
        datesToDisplay.unshift(currentDate.getDate());
        currentDate.setDate(currentDate.getDate() - 1)
    }

    return datesToDisplay
}


function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);

    return date.toLocaleString('default', { month: 'long' })
}


export default MonthlyPlanning






// const getDatesToDisplay = (month) => {
//     const datesToDisplay = []
// date.setDate(1)

//     month.setDate(1)

//     // Get days on the month
//     while (date.getMonth() === monthNumber) {
//         datesToDisplay.push(date.getDate());
//         date.setDate(date.getDate() + 1)
//     }

//     // Get days after until sunday
//     while ((date.getDay()) !== 1) {
//         datesToDisplay.push(date.getDate());
//         date.setDate(date.getDate() + 1);
//     }

//     // Get days before until monday
//     date = new Date()
//     date.setDate(0)

//     while ((date.getDay()) !== 0) {
//         datesToDisplay.unshift(date.getDate());
//         date.setDate(date.getDate() - 1)
//     }

//     return datesToDisplay
// }