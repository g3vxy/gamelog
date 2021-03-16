import './Header.css'
import {
    Link,
} from "react-router-dom"

const Header = () => {

    return <div className="header">
                <h2 className="logo">
                    <Link to="/">GameLog</Link>
                </h2>
                <button className="hamburger" onClick={() => {
                    document.getElementsByClassName("navigation")[0].classList.toggle("show")
                }}>
                    &#9776;
                </button>
                <div className="navigation">
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/">Community</Link>
                    <Link to="/">Account</Link>
                </div>
            </div>
}

export default Header