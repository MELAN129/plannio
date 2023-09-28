import "../Styles/sidebar.css"

function Sidebar() {
    return (
        <div>
            <div>
                <nav className="nav-box">
                    <a href="/" className="nav-item">Accueil</a>
                    <a href="/monthlyPlanning" className="nav-item">Planning</a>
                    <a href="/absence" className="nav-item">Indisponibilités</a>
                    <a href="..." className="nav-item">Profil</a>
                    <a href="..." className="nav-item">Paramètres</a>
                    <a href="..." className="nav-item">Déconnexion</a>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar