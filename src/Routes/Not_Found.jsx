import { Link } from "react-router-dom"


const NotFound = () => {

    return (
        <div>
            <h3>There's nothing here!</h3>
            <Link  to="/">
              Back to Home
            </Link>
        </div>
    )
}

export default NotFound;