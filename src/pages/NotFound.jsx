import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
            <h1>404 Not Found Mostri!</h1>
            <p>Page not found</p>
            <p>{error.error.message || error.statusText }</p>
            <Link to='/'>Go back to Home</Link>
        </div>
    )
}

export default NotFound;