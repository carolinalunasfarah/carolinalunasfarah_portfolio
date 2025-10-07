import About from "./About";

const Home = () => {
    return (
        <>
            <header className="flex_col">
                <h1 className="cursor_default">¡Hola!</h1>
                <h2 className="cursor_default">
                    Soy Carolina Lunas Farah, Arquitecta, <br />{" "}
                    Programadora Full Stack JavaScript y TypeScript
                </h2>
            </header>
            <main>
                <About />
            </main>
        </>
    );
};

export default Home;
