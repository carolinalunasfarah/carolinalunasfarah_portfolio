import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

const About = () => {
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
                            text: "Sobre mi",
                        },
                    ]}></NavigationBreadcrumb>
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
                </article>
            </section>
        </>
    );
};

export default About;
