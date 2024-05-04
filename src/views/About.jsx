import { useState } from "react";
import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

// component
import Hobbies from "../components/Hobbies.jsx";

const About = () => {
    const [showHobbies, setShowHobbies] = useState(false);
    const [breadcrumbPaths, setBreadcrumbPaths] = useState([
        {
            text: "Inicio",
            to: "/",
        },
        {
            text: "Sobre mi",
        },
    ]);

    const handleClick = () => {
        setShowHobbies(!showHobbies);
        if (showHobbies) {
            setBreadcrumbPaths([
                {
                    text: "Inicio",
                    to: "/",
                },
                {
                    text: "Sobre mi",
                },
            ]);
        } else {
            setBreadcrumbPaths([
                {
                    text: "Inicio",
                    to: "/",
                },
                {
                    text: "Sobre mi",
                    to: "/about",
                },
                {
                    text: "Hobbies",
                    to: "/about/hobbies",
                },
            ]);
        }
    };

    return (
        <>
            <section className="px-5 pt-4">
                <NavigationBreadcrumb paths={breadcrumbPaths} />
            </section>
            <section className="row about_row">
                <article className="col-3 col-md-3 col-lg-3 col-sm-12 flex_col">
                    <h3 className="about_title cursor_default">¡Hola!</h3>
                </article>
                <article className="col-9 col-md-9 col-lg-9 col-sm-12">
                    <p className="about_text cursor_default">
                        Mi nombre es <strong>Carolina Lunas Farah</strong>, soy{" "}
                        <strong>Arquitecta</strong> titulada de la Universidad
                        de Chile, con interés en el urbanismo, paisajismo,
                        arquitectura vernacular y el uso de energías renovables
                        no convencionales para el funcionamiento de la ciudad.
                    </p>
                    <p className="about_text cursor_default">
                        Además soy <strong>Programadora</strong> Full Stack
                        Javascript de la Academia Desafío Latam, tengo
                        conocimientos de Frontend y Backend y tengo una gran
                        pasión por aprender de forma continua, y ser
                        programadora es estar constantemente en ese camino, por
                        lo que sigo aprendiendo y fortaleciendo mis
                        conocimientos.
                    </p>
                    <p className="about_text cursor_default">
                        Por otro lado, puedo decir también que soy una persona
                        muy curiosa y me gusta aprender distintas formas de
                        expresión de creatividad, por lo que me dedico también a
                        los <strong>Bordados</strong> y a la{" "}
                        <strong>Fotografía Análoga</strong> de paisajes y la
                        ciudad en general. Me considero una persona eficiente y
                        detallista, me gusta el trabajo en equipo, así como
                        también el trabajo en solitario.
                    </p>
                    <article className="col-12 col-md-12 col-lg-12 col-sm-12 flex_col mt-4">
                        <button
                            onClick={handleClick}
                            className="btn btn-secondary cursor-pointer"
                            aria-label="Ver sección Hobbies">
                            <span>Ver Hobbies</span>
                        </button>
                    </article>
                </article>
                <section>
                    <article>{showHobbies && <Hobbies />}</article>
                </section>
            </section>
        </>
    );
};

export default About;
