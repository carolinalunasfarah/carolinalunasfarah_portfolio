import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

const Contact = () => {
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
                            text: "Contacto",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
            <section className="row about-row">
                <article className="col col-6 about">
                    <h3 className="about-title">Descargables</h3>
                </article>
                <article className="col col-6">
                    <p className="py-2 px-5 m-0 about-text">
                        Link mail
                    </p>
                    <p className="py-2 px-5 m-0 about-text">
                        Link CV
                    </p>
                </article>
            </section>
        </>
    );
};

export default Contact;
