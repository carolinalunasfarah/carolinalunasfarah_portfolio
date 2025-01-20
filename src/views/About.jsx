const About = () => {
    return (
        <>
            <div className="about_row">
                <section className="row about_section mb-4">
                    <article className="col-4 col-md-4 col-lg-4 col-sm-12 flex_col">
                        <i class="bi bi-person"></i>
                    </article>
                    <article className="col-8 col-md-8 col-lg-8 col-sm-12">
                        <p className="about_text cursor_default mb-4">
                            <strong>Arquitecta</strong> titulada de la
                            Universidad de Chile, con interés en urbanismo,
                            paisajismo, arquitectura vernacular y el uso de
                            energías renovables no convencionales en la
                            planificación urbana.
                        </p>
                    </article>
                </section>

                <section className="row about_section mb-4">
                    <article className="col-4 col-md-4 col-lg-4 col-sm-12 flex_col">
                        <i class="bi bi-laptop"></i>
                    </article>
                    <article className="col-8 col-md-8 col-lg-8 col-sm-12">
                        <p className="about_text cursor_default mb-4">
                            <strong>
                                Desarrolladora Full Stack JavaScript y Android
                            </strong>{" "}
                            con formación en Academia Desafío Latam, y
                            experiencia en Frontend, Backend y desarrollo de
                            aplicaciones web. Como arquitecta, combino mi pasión
                            por crear soluciones tecnológicas innovadoras y
                            accesibles con una perspectiva única que integra
                            pensamiento visual, habilidades analíticas y enfoque
                            en la eficiencia.
                        </p>
                    </article>
                </section>

                <section className="row about_section t-4">
                    <article className="col-4 col-md-4 col-lg-4 col-sm-12 flex_col">
                        <i class="bi bi-star"></i>
                    </article>
                    <article className="col-8 col-md-8 col-lg-8 col-sm-12 flex_col">
                        <p className="about_text cursor_default mb-4">
                            Además, soy una persona muy curiosa y disfruto
                            explorar diversas formas de expresión creativa. Me
                            dedico también al <strong>bordado</strong> y a la{" "}
                            <strong>fotografía análoga</strong> de paisajes y la
                            esencia de la ciudad. Me considero una persona
                            eficiente y detallista, me desempeño bien trabajando
                            tanto en equipo como de manera independiente.
                        </p>
                    </article>
                </section>
            </div>
        </>
    );
};

export default About;
