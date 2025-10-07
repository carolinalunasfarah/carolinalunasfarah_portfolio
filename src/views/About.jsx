const About = () => {
    return (
    <div className="about_row">
        <section className="row about_section mb-4">
            <article className="col-4 flex_col">
                <i className="bi bi-person"></i>
            </article>
            <article className="col-12 col-md-8">
                <p className="about_text cursor_default mb-4">
                    <strong>Arquitecta</strong> titulada de la Universidad de Chile, con interés en urbanismo, paisajismo,
                     arquitectura vernacular y el uso de energías renovables no convencionales en la planificación urbana.
                </p>
            </article>
        </section>

        <section className="row about_section mb-4">
            <article className="col-4 flex_col">
                <i className="bi bi-laptop"></i>
            </article>
            <article className="col-12 col-md-8">
                <p className="about_text cursor_default mb-4">
                    <strong> Desarrolladora Full Stack JavaScript y TypeScript</strong> con formación en Academia Desafío Latam,
                    y experiencia en Frontend y Backend. Combino mi pasión por crear soluciones tecnológicas
                    innovadoras y accesibles con una perspectiva única que integra pensamiento visual, habilidades analíticas y enfoque en la eficiencia.
                </p>
            </article>
        </section>

        <section className="row about_section t-4">
            <article className="col-4 flex_col">
                <i className="bi bi-star"></i>
            </article>
            <article className="col-12 col-md-8">
                <p className="about_text cursor_default mb-4">
                    Además, soy una persona muy curiosa y disfruto explorar diversas formas de expresión creativa. Me dedico también
                    al <strong>bordado</strong> y a la <strong>fotografía análoga</strong> de paisajes y la esencia de la ciudad.
                    Me considero una persona eficiente y detallista, me desempeño bien trabajando tanto en equipo como de manera independiente.
                </p>
            </article>
        </section>
    </div>
    );
};

export default About;
