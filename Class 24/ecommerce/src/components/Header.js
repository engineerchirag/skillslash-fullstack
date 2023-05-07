import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { UserActivityContext } from "../context/userActivityContext";

function Header() {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const { selectedProducts} = useContext(UserActivityContext);
    return (
        <div className="header">
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
            <div>
                <input type="checkbox" onChange={toggleTheme} />{isDarkMode? 'Change to light mode' : 'Change to dark mode'}
            </div>
            <span>Cart({Object.values(selectedProducts).length})</span>
        </div>
    )
}

export default Header;