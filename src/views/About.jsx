
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
                            Universidad de Chile, con interés en el urbanismo,
                            paisajismo, arquitectura vernacular y el uso de
                            energías renovables no convencionales para el
                            funcionamiento de la ciudad.
                        </p>
                    </article>
                </section>

                <section className="row about_section mb-4">
                    <article className="col-4 col-md-4 col-lg-4 col-sm-12 flex_col">
                        <i class="bi bi-laptop"></i>
                    </article>
                    <article className="col-8 col-md-8 col-lg-8 col-sm-12">
                        <p className="about_text cursor_default mb-4">
                            <strong>Programadora Full Stack JavaScript
                            y Android</strong> de la Academia Desafío Latam, tengo
                            conocimientos de Frontend, Backend y generaciónde
                            aplicaciones web; además de una gran pasión por
                            aprender de forma continua, y ser programadora es
                            estar constantemente en ese camino, por lo que sigo
                            aprendiendo y fortaleciendo mis conocimientos.
                        </p>
                    </article>
                </section>

                <section className="row about_section t-4">
                    <article className="col-4 col-md-4 col-lg-4 col-sm-12 flex_col">
                        <i class="bi bi-star"></i>
                    </article>
                    <article className="col-8 col-md-8 col-lg-8 col-sm-12 flex_col">
                        <p className="about_text cursor_default mb-4">
                            Por otro lado, puedo decir también que soy una
                            persona muy curiosa y me gusta aprender distintas
                            formas de expresión de creatividad, por lo que me
                            dedico también a los <strong>bordados</strong> y a
                            la <strong>fotografía análoga</strong> de paisajes y
                            la ciudad en general. Me considero una persona
                            eficiente y detallista, me desempeño bien trabajando
                            en equipo, así como también en solitario.
                        </p>
                    </article>
                </section>
            </div>
        </>
    );
};

export default About;
