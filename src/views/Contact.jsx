import NavigationBreadcrumb from "../components/NavigationBreadcrumb";

const Contact = () => {
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
        </>
    );
};

export default Contact;
