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
            <section className="row about-row">
                <article className="col col-4 about">
                    <h3 className="about-title">¡Hola!</h3>
                </article>
                <article className="col col-8">
                    <p className="py-2 px-5 m-0 about-text">
                        Mi nombre es <strong>Carolina Lunas Farah</strong>, soy{" "}
                        <strong>Arquitecta</strong> titulada de la Universidad
                        de Chile, con interés en el urbanismo, paisajismo,
                        arquitectura vernacular y el uso de energías renovables
                        no convencionales para el funcionamiento de la ciudad.
                    </p>
                    <p className="py-2 px-5 m-0 about-text">
                        Además soy <strong>Programadora</strong> Full Stack
                        Javascript de la Academia Desafío Latam, por ahora no
                        tengo ninguna preferencia específica de Frontend o
                        Backend pero me fascina aprender, y ser programadora es
                        estar constantemente en ese camino, por lo que estoy
                        abierta a seguir explorando las opciones.
                    </p>
                    <article className="col col-12 d-flex justify-content-center mt-4">
                        <button
                            onClick={handleClick}
                            className="btn btn-secondary cursor-pointer">
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
