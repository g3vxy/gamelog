import './Header.css'
import {
    Link,
} from "react-router-dom"

const Header = () => {
    return <div className="header">
                <div className="blur"></div>
                <h2 className="logo">
                    <Link to="/">GameLog</Link>
                </h2>
                <div className="navigation">
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/">Community</Link>
                    <Link to="/">Account</Link>
                </div>
            </div>
}

export default Header