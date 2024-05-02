import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

// data
import CV from "/calf_cv_2024.pdf";

const Contact = () => {
    const cv = CV;

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
                <article className="col col-4">
                    <h3 className="about-title">¡Contáctame!</h3>
                </article>
                <article className="col col-8">
                    <section className="row contact_items">
                        <article className="col-4">
                            <ul className="list-unstyled me-4">
                                <li className="list-elements">
                                    <a href={cv} download>
                                        <i className="bi bi-file-earmark-person"></i>
                                    </a>
                                    <p className="mb-4 about-text">
                                        Descarga mi CV para más información
                                    </p>
                                </li>
                            </ul>
                        </article>
                        <article className="col-4">
                            <ul className="list-unstyled me-4">
                                <li className="list-elements contact_items">
                                    <a href="mailto:carolinalunasfarah@gmail.com">
                                        <i className="bi bi-envelope-at-fill"></i>
                                    </a>
                                    <p className="mb-4 about-text">Envíame un correo</p>
                                </li>
                            </ul>
                        </article>
                    </section>
                </article>
            </section>
        </>
    );
};

export default Contact;
