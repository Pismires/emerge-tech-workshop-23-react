import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="nav">
                <Link className="link" to="code-1">Code 01</Link>
                <Link className="link" to="code-2">Code 02</Link>
                <Link className="link" to="exercise-2">Exercise 02</Link>
                <Link className="link" to="exercise-3">Exercise 03</Link>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;