import Header from "./Header";
import { FaHome, FaSearch, FaExclamation } from 'react-icons/fa';
import { Link } from "react-router-dom";
const NavBar = () => {

    return (
        <div className="sideNav">
            <Header />
            <ul>

                <li><FaHome size="2rem"/>&nbsp; &nbsp; <Link  to="/">DashBoard</Link></li>
                <li><FaSearch size="2rem"/>&nbsp; &nbsp;Search</li>
                <li><FaExclamation size="2rem"/>&nbsp; &nbsp;About</li>
            </ul>
        </div>
    )
}

export default NavBar;