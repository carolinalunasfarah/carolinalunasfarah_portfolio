import { NavLink } from "react-router-dom";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");
    return (
        <>
            <nav className="bg-primary sticky-top">
                <section href="/">
                    <NavLink className={activeClass} to="/">
                        CAROLINA LUNAS FARAH
                    </NavLink>
                </section>
                <section className="justify-content-end align-items-center">
                    <NavLink className={activeClass} to="/about">
                        Acerca de mi
                    </NavLink>
                    <NavLink className={activeClass} to="/works">
                        Trabajos
                    </NavLink>
                    <NavLink className={activeClass} to="/contact">
                        Contacto
                    </NavLink>
                </section>
            </nav>
        </>
    );
};

export default Navigation;
