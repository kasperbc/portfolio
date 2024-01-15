import { Link } from "react-router-dom";

export default function Header()
{
    return (
        <div className="AppHeader">
            <div className="Links">
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}