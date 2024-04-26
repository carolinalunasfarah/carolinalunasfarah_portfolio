import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

const Hobbies = () => {
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
                            text: "Hobbies",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
            <section className="row about-row">
                <article className="col">
                    <ul className="list-unstyled me-4">
                        <li className="list-elements">
                            <i className="bi bi-person me-2"></i>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. A corrupti tenetur eum illum
                                placeat perspiciatis sequi deserunt mollitia,
                                quibusdam aliquid aperiam minima earum amet
                                explicabo doloribus cumque voluptatem. Ipsum,
                                dolore!
                            </p>
                        </li>
                    </ul>
                </article>
                <article className="col">
                    <ul className="list-unstyled me-4">
                        <li className="list-elements">
                            <i className="bi bi-person me-2"></i>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. A corrupti tenetur eum illum
                                placeat perspiciatis sequi deserunt mollitia,
                                quibusdam aliquid aperiam minima earum amet
                                explicabo doloribus cumque voluptatem. Ipsum,
                                dolore!
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
        </>
    );
};

export default Hobbies;
