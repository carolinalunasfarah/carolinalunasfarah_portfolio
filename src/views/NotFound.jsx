import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex_col">
            <section className="flex_col my-4">
                <h3 className="cursor_default">¡Ups!</h3>
                <small className="cursor_default">Vaya vaya.</small>
                <p className="mt-4 cursor_default">
                    La página solicitada no existe.
                </p>
                <Link to="/">
                    <button
                        className="btn btn-primary cursor-pointer mt-2"
                        aria-label="Redirección al Home">
                        <span>Volvamos al Home</span>
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default NotFound;
