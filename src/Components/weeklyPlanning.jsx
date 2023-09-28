import "../Styles/weeklyPlanning.css"

function WeeklyPlanning() {

    const date = new Date()
    const dateOfTheDay = date.getDate()
    const dateNumber = date.getDay()

    const calculateWeekNumber = () => {
        const startDate = new Date(date.getFullYear(), 0, 1);
        const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
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
                <h1 className="week-title">Semaine {weekNumber}</h1>
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