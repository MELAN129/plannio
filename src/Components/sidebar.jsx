import "../Styles/sidebar.css"

function Sidebar() {
    return (
        <div>
            <div>
                <nav className="nav-box">
                    <a href="/" className="nav-item">Accueil</a>
                    <a href="/monthlyPlanning" className="nav-item">Planning</a>
                    <a href="/absence" className="nav-item">Indisponibilités</a>
                    <a href="/editProfils" className="nav-item">Profils</a>
                    <a href="/groups" className="nav-item">Groupes</a>
                    <a href="/editPrograms" className="nav-item">Programmes</a>
                    <a href="..." className="nav-item">Paramètres</a>
                    <a href="/login" className="nav-item">Déconnexion</a>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar