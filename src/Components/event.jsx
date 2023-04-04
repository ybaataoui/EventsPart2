import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Event = ({id, image, title, date, place}) => {
    return (
        <div className="card p-3"> 
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{place}</p>
                <Link
                    to={`/eventDetails/${id}`}
                    key={id}
                >
                    {id}
                </Link>
                <p className="card-text">{date}</p>
            </div>
        </div>   
    );
}

export default Event;