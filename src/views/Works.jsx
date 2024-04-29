import { useNavigate } from "react-router-dom";
import NavigationBreadcrumb from "../components/NavigationBreadcrumb";
import FsCarousel from "../components/FsCarousel";

const Works = () => {
    const navigate = useNavigate();

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
            <section>
                {" "}
                <FsCarousel />{" "}
            </section>
        </>
    );
};

export default Works;
