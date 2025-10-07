import { useNavigate } from "react-router-dom";
import NavigationBreadcrumb from "../components/NavigationBreadcrumb/NavigationBreadcrumb";

const Works = () => {
    const navigate = useNavigate();

    const handleClick = (destination) => {
        navigate(destination);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <section className="px-5 pt-4">
                <NavigationBreadcrumb
                    paths={[
                        {
                            text: "Inicio",
                            to: "/",
                        },
                        {
                            text: "Trabajos",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
            <section className="row pb-4 works_section">
                <article className="col-6 col-md-6 col-lg-6 col-sm-12 flex_col works">
                    <i className="bi bi-code-slash"></i>
                    <h3 className="mt-4 cursor_default">Programación</h3>
                    <p className="mt-3 cursor_default">
                        Te invito a revisar las aplicaciones desarrolladas
                        durante la carrera de Programación y un trabajo
                        Freelance, donde podrás visitar tanto el deploy de cada
                        propuesta, como también revisar el código que las
                        compone. Además, puedes ver otros proyectos en los
                        repositorios de mi perfil de GitHub.
                    </p>
                    <button
                        onClick={() => handleClick("/works/fullstack")}
                        className="btn btn-secondary cursor-pointer mt-2"
                        aria-label="Ver Portafolio Programación">
                        <span>Portafolio Programación</span>
                    </button>
                </article>
                <article className="col-6 col-md-6 col-lg-6 col-sm-12 flex_col works">
                    <i className="bi bi-boxes"></i>
                    <h3 className="mt-4 cursor_default">Arquitectura</h3>
                    <p className="mt-3 cursor_default">
                        Aquí podrás revisar algunas imágenes de proyectos que
                        realicé durante la carrera de Arquitectura, donde
                        explico un poco los proyectos y puedes ver lo generado
                        para cada propuesta, además puedes descargar mi
                        portafolio completo en esta sección.
                    </p>
                    <button
                        onClick={() => handleClick("/works/architecture")}
                        className="btn btn-secondary cursor-pointer mt-2"
                        aria-label="Ver Portafolio Arquitectura">
                        <span>Portafolio Arquitectura</span>
                    </button>
                </article>
            </section>
        </>
    );
};

export default Works;
