import { NavLink } from "react-router-dom";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");

    return (
        <>
            <nav>
                <section>
                    <NavLink className="active" to="/">
                        CAROLINA LUNAS FARAH
                    </NavLink>
                </section>
                <section className="d-flex pt-4">
                    <ul className="list-unstyled me-4">
                        <li className="list-elements">
                            <i className="bi bi-person me-2"></i>
                            <NavLink className={activeClass} to="/about">
                                Sobre mi
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="list-unstyled me-4">
                        <li className="list-elements">
                            <i className="bi bi-folder2 me-2"></i>
                            <NavLink className={activeClass} to="/works">
                                Trabajos
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="list-unstyled me-4">
                        <li className="list-elements">
                            <i className="bi bi-envelope me-2"></i>
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
