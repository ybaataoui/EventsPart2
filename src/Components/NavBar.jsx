import Header from "./Header";
import { FaHome, FaSearch, FaExclamation } from 'react-icons/fa';
import { Link } from "react-router-dom";
const NavBar = () => {

    return (
        <div className="sideNav">
            <Header />
            <ul class="nav flex-column text-start">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><FaHome size="2rem"/>&nbsp; &nbsp;<Link  to="/">DashBoard</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><FaSearch size="2rem"/>&nbsp; &nbsp;Search</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><FaExclamation size="2rem"/>&nbsp; &nbsp;About</a>
                </li>
            </ul>
            
        </div>
    )
}

export default NavBar;