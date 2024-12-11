import './navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src=".//src/assets/logo-marca.png" alt="GameON Logo" />
                <img src=".//src/assets/logo-name.png" alt="GameON Nome Logo" />
            </div>
            
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#games">Gêneros</a></li>
                <li><a href="#games">Plataformas</a></li>
                <li><a href="#games">Gratuitos</a></li>
                <li><a href="#reviews">Sobre nós</a></li>
                <li><a href="#games">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;