import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

const Works = () => {
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
                            text: "Trabajos",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
        </>
    );
};

export default Works;
