import { useNavigate } from "react-router-dom";
import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

const Works = () => {
    const navigate = useNavigate();

    const handleClickFs = () => {
        navigate("/works/fullstack");
    };

    const handleClickArch = () => {
        navigate("/works/architecture");
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
            <section className="row pb-4">
                <article className="col works">
                    <i className="bi bi-boxes works_icons"></i>
                    <h3>Portafolio Arquitectura</h3>
                    <p>
                        Aquí podrás revisar algunas imágenes de proyectos que
                        realicé durante la carrera, donde explico un poco de los
                        proyectos y puedes ver lo generado para cada propuesta,
                        además puedes descargar mi portafolio completo en esta
                        sección.
                    </p>
                    <button
                        onClick={handleClickArch}
                        className="btn btn-primary cursor-pointer"
                        aria-label="Ver Portafolio Arquitectura">
                        <span>Portafolio Arquitectura</span>
                    </button>
                </article>
                <article className="col works">
                    <i className="bi bi-code-slash works_icons"></i>
                    <h3>Portafolio Programación</h3>
                    <p>
                        Aquí podrás revisar las aplicaciones desarrolladas
                        durante la carrera, donde podrás visitar tanto el deploy
                        de cada propuesta, como también revisar el código que
                        las compone. Además, puedes ver otros proyectos en los
                        repositorios de mi perfil de GitHub.
                    </p>
                    <button
                        onClick={handleClickFs}
                        className="btn btn-primary cursor-pointer"
                        aria-label="Ver Portafolio Programación">
                        <span>Portafolio Programación</span>
                    </button>
                </article>
            </section>
        </>
    );
};

export default Works;
