const Footer = () => {
    return (
        <footer>
            <section>
                <small className="cursor_default">
                    Carolina Lunas Farah 2024. Todos los derechos reservados.
                </small>
            </section>
            <section>
                <article>
                    <a
                        href="https://www.linkedin.com/in/carolina-lunas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ir a página de LinkedIn">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </article>
                <article>
                    <a
                        href="https://github.com/carolinalunasfarah"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ir a página de GitHub">
                        <i className="bi bi-github"></i>
                    </a>
                </article>
            </section>
        </footer>
    );
};

export default Footer;
