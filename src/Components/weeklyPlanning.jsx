import { useState } from "react"
import "../Styles/weeklyPlanning.css"

function WeeklyPlanning() {

    const [dateToDisplay, setDateToDisplay] = useState(new Date());

    const dateOfTheDay = dateToDisplay.getDate()
    const dateNumber = dateToDisplay.getDay()

    const calculateWeekNumber = () => {
        const startDate = new Date(dateToDisplay.getFullYear(), 0, 1);
        const days = Math.floor((dateToDisplay - startDate) / (24 * 60 * 60 * 1000));
        const weekNumber = Math.ceil(days / 7)
        return weekNumber
    }
    const weekNumber = calculateWeekNumber()

    const dateDisplay = () => {
        return dateOfTheDay - dateNumber + 1
    }

    // const test = () => console.log(dateOfTheDay, dateNumber)
    // test()

    return (
        <div>
            <div className="week-display">
                <div className="week-title">
                    <button onClick={() => {
                        setDateToDisplay(() => {
                            return new Date(dateToDisplay.getTime() - 7 * 24 * 60 * 60 * 1000)
                        })
                    }}>Précedent</button>
                    <h1>Semaine {weekNumber}</h1>
                    <button onClick={() => {
                        setDateToDisplay(() => {
                            return new Date(dateToDisplay.getTime() + 7 * 24 * 60 * 60 * 1000)
                        })
                    }}>Suivant</button>
                </div>
                <div className="days-display">
                    <div className="day">
                        <h2>Lundi {dateDisplay()}
                        </h2>
                    </div>
                    <div className="day">
                        <h2>Mardi {dateDisplay() + 1}</h2>
                    </div>
                    <div className="day">
                        <h2>Mercredi {dateDisplay() + 2}</h2>
                    </div>
                    <div className="day">
                        <h2>Jeudi {dateDisplay() + 3}</h2>
                    </div>
                    <div className="day">
                        <h2>Vendredi {dateDisplay() + 4}</h2>
                    </div>
                    <div className="day">
                        <h2>Samedi {dateDisplay() + 5}</h2>
                    </div>
                    <div className="day">
                        <h2>Dimanche {dateDisplay() + 6}</h2>
                    </div>
                </div>


            </div>
            <div className="tasks-box">
                <div className="tasks">
                    <h2 className="tasks-title">Aujourd'hui</h2>
                </div>
                <div className="tasks">
                    <h2 className="tasks-title">A venir</h2>
                </div>
            </div>
        </div>
    )
}

export default WeeklyPlanning