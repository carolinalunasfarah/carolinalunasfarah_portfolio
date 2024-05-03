import Embroidery from "/assets/icons/hobbies_embroidery.png";
import Photography from "/assets/icons/hobbies_photography.png";

const Hobbies = () => {
    return (
        <>
            <section className="row about_row hobbies">
                <article className="col-6 cold-md-6 col-lg-6 col-sm-12">
                    <ul className="list-unstyled mt-3">
                        <li className="flex_col">
                            <img src={Embroidery} alt="Embroidery icon" />
                            <h4 className="mt-4 cursor_default">Bordados</h4>
                            <p className="mt-3 cursor_default">
                                Uno de mis principales hobbies tiene que ver con
                                la búsqueda de formas de distracción y
                                expresión, entre ellas está el bordado, ya sea
                                relacionados a la naturaleza, creación de
                                patrones y buscar combinaciones de colores.
                            </p>
                            <button className="btn btn-tertiary cursor-pointer">
                                <a
                                    href="https://www.instagram.com/ninaleborda/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Ir a Instagram de Bordados">
                                    <span>Ver bordados</span>
                                </a>
                            </button>
                        </li>
                    </ul>
                </article>
                <article className="col-6 cold-md-6 col-lg-6 col-sm-12">
                    <ul className="list-unstyled mt-3">
                        <li className="flex_col">
                            <img src={Photography} alt="Photography icon" />
                            <h4 className="mt-4 cursor_default">
                                Fotografía análoga
                            </h4>
                            <p className="mt-3 cursor_default">
                                En mi interés por la arquitectura y el
                                paisajismo, he visitado y fotografiado con mi
                                cámara análoga distintos lugares como parques,
                                ciudades y la distinta flora que se encuentra en
                                nuestro país.
                            </p>
                            <button className="btn btn-tertiary cursor-pointer">
                                <a
                                    href="https://www.lomography.es/homes/ninalemoons"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Ir a página de Lomography">
                                    <span>Ver fotografías</span>
                                </a>
                            </button>
                        </li>
                    </ul>
                </article>
            </section>
        </>
    );
};

export default Hobbies;
