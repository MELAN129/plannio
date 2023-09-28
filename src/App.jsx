import "./App.css";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Header from "./Components/header"
import Sidebar from "./Components/sidebar"
import WeeklyPlanning from "./Components/weeklyPlanning";
import MonthlyPlanning from "./Pages/monthlyPlanning";
import Absence from "./Pages/absence";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="app-body">
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<WeeklyPlanning />} />
            <Route path='/monthlyPlanning' element={<MonthlyPlanning />} />
            <Route path='/absence' element={<Absence />} />

          </Routes>
        </div>

      </div>
    </Router >
  )
}

export default App;
