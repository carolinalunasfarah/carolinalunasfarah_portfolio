import Carousel from "react-bootstrap/Carousel";
import NavigationBreadcrumb from "../components/NavigationBreadcrumb";
import { FullstackData } from "./../data/FullstackProjects.jsx";

const FsCarousel = () => {
    const data = FullstackData;

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
                            to: "/works",
                        },
                        {
                            text: "Fullstack",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
            <Carousel className="carouselContainer">
                {data.map((project) => (
                    <Carousel.Item className="carouselItem" key={project.id}>
                        <img
                            className="carouselImg"
                            src={project.image_src}
                            alt={project.alt}
                        />
                        <Carousel.Caption className="carouselCaption">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <button>{project.website_url}</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};

export default FsCarousel;
