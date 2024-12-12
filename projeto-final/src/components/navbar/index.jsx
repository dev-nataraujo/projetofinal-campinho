import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src=".//src/assets/logomarca2.png" alt="GameON Logo" />
                {/* <img src=".//src/assets/logo-name.png" alt="GameON Nome Logo" /> */}
            </div>

            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li className="dropdown">
                    <button className="dropbtn">Gêneros</button>
                    <div className="dropdown-item">
                        <a href="#acao" className="nav-item">Ação</a>
                        <a href="#animacao" className="nav-item">Animação</a>
                        <a href="#aventura" className="nav-item">Aventura</a>
                        <a href="#cozy" className="nav-item">Cozy</a>
                        <a href="#coop" className="nav-item">Cooperativo</a>
                        <a href="#fps" className="nav-item">FPS</a>
                        <a href="#rpg" className="nav-item">RPG</a>
                        <a href="#simulacao" className="nav-item">Simulação</a>
                    </div>
                </li>
                <li className="dropdown">
                    <button className="dropbtn">Plataformas</button>
                    <div className="dropdown-item">
                        <a href="#acao" className="nav-item">PC</a>
                        <a href="#animacao" className="nav-item">Playstation</a>
                        <a href="#aventura" className="nav-item">Xbox</a>
                        <a href="#cozy" className="nav-item">Nintendo</a>
                    </div>
                </li>
                <li><a href="#games">Gratuitos</a></li>
                <li><a href="#reviews">Sobre nós</a></li>
                <li><a href="#games">Login</a></li>
            </ul>

        </nav>
    )
}

export default Navbar;