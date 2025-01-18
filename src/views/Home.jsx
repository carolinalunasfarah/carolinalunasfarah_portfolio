import About from "./About";

const Home = () => {
    return (
        <>
            <header>
                <section className="flex_col">
                    <h1 className="cursor_default">¡Hola!</h1>
                    <h4 className="cursor_default">
                        Soy Carolina Lunas Farah, Arquitecta, <br />{" "}
                        Programadora Full Stack JavaScript y Android
                    </h4>
                </section>
            </header>
            <main>
                <About />
            </main>
        </>
    );
};

export default Home;
