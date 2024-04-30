import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

const Links = () => {
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
                            text: "Links",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
        </>
    );
};

export default Links;
