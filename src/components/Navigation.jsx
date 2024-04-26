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
                        <li>
                            <i className="bi bi-person ms-4"></i>
                        </li>
                        <li>
                            <NavLink className={activeClass} to="/about">
                                Sobre mi
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="list-unstyled me-4">
                        <li>
                            <i className="bi bi-folder2 ms-4"></i>
                        </li>
                        <li>
                            <NavLink className={activeClass} to="/works">
                                Trabajos
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="list-unstyled me-4">
                        <li>
                            <i className="bi bi-chat-heart ms-4"></i>
                        </li>
                        <li>
                            <NavLink className={activeClass} to="/hobbies">
                                Hobbies
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <i className="bi bi-envelope ms-4"></i>
                        </li>
                        <li>
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
