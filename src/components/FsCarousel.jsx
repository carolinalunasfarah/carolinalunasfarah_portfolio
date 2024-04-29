import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";

// context
import { DataContext } from "../context/DataContext";

const FsCarousel = () => {
    const { fsData } = useContext(DataContext);

    return (
        <Carousel>
            {fsData.map((item) => (
                <Carousel.Item key={item.id}>
                    <img src={item.image_src} alt={item.alt} />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <button>{item.website_url}</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default FsCarousel;
