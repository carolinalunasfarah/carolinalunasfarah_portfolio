import Embroidery from "/assets/icons/hobbies_embroidery.png";
import Photography from "/assets/icons/hobbies_photography.png";

const Hobbies = () => {
    const hobbies_url = [
        {
            embroidery: "https://www.instagram.com/ninaleborda/",
            photography: "https://www.lomography.es/homes/ninalemoons",
        },
    ];

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <section className="row about-row hobbies_section">
                <article className="col">
                    <ul className="list-unstyled me-4">
                        <li className="list-elements">
                            <img src={Embroidery} alt="Embroidery icon" />
                            <p className="mt-4">
                                Uno de mis principales hobbies tiene que ver con
                                la búsqueda de formas de distracción y
                                expresión, entre ellas está el bordado, ya sea
                                relacionados a la naturaleza, creación de
                                patrones y buscar combinaciones de colores.
                            </p>
                            {hobbies_url.map((hobbies, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        handleClick(hobbies.embroidery)
                                    }
                                    className="btn btn-tertiary cursor-pointer me-4">
                                    <span>Ver más bordados</span>
                                </button>
                            ))}
                        </li>
                    </ul>
                </article>
                <article className="col">
                    <ul className="list-unstyled me-4">
                        <li className="list-elements">
                            <img src={Photography} alt="Photography icon" />
                            <p className="mt-4">
                                En mi interés por la arquitectura y el
                                paisajismo, he visitado y fotografiado con mi
                                cámara análoga distintos lugares como parques,
                                ciudades y la distinta flora que se encuentra en
                                nuestro país.
                            </p>
                            {hobbies_url.map((hobbies, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        handleClick(hobbies.photography)
                                    }
                                    className="btn btn-tertiary cursor-pointer me-4">
                                    <span>Ver más fotografías</span>
                                </button>
                            ))}
                        </li>
                    </ul>
                </article>
            </section>
        </>
    );
};

export default Hobbies;
