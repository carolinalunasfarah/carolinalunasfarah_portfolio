import { NavLink } from "react-router-dom";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");

    return (
        <>
            <nav>
                <section className="navigation_title">
                    <NavLink className="active" to="/">
                        CAROLINA LUNAS FARAH
                    </NavLink>
                </section>
                <section className="d-flex pt-4">
                    <ul className="list-unstyled nav_items">
                        <li className="flex_col">
                            <i className="bi bi-folder-fill"></i>
                            <NavLink className={activeClass} to="/works">
                                Trabajos
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="list-unstyled nav_items">
                        <li className="flex_col">
                            <i className="bi bi-envelope-fill"></i>
                            <NavLink className={activeClass} to="/contact">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </nav>
        </>
    );
};

export default Navigation;
