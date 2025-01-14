import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

// data
import CV from "/calf_cv_2025.pdf";

const Contact = () => {
    const curriculum = CV;

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
            <section className="row about_row contact">
                <article className="col-5 col-md-5 col-lg-5 col-sm-12 flex_col">
                    <h3 className="about_title cursor_default">¡Contáctame!</h3>
                </article>
                <article className="col-7 col-md-7 col-lg-7 col-sm-12">
                    <section className="row">
                        <article className="col-6 col-md-6 col-lg-6 col-sm-6">
                            <ul className="list-unstyled mt-3">
                                <li className="flex_col">
                                    <a
                                        href={curriculum}
                                        aria-label="Descargar Curriculum"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download>
                                        <i className="bi bi-file-earmark-person"></i>
                                    </a>
                                    <p className="cursor_default">
                                        Descarga mi CV para más información
                                    </p>
                                </li>
                            </ul>
                        </article>
                        <article className="col-6 col-md-6 col-lg-6 col-sm-6">
                            <ul className="list-unstyled mt-3">
                                <li className="flex_col contact">
                                    <a
                                        href="mailto:carolinalunasfarah@gmail.com"
                                        aria-label="Enviar correo electrónico">
                                        <i className="bi bi-envelope-at-fill"></i>
                                    </a>
                                    <p className="cursor_default">
                                        Envíame un correo
                                    </p>
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
