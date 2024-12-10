import './navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                🎮 GameZone
            </div>
            
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#games">Gêneros</a></li>
                <li><a href="#games">Em breve</a></li>
                <li><a href="#reviews">Sobre nós</a></li>
                <li><a href="#games">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;