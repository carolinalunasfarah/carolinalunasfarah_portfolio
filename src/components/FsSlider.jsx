// swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// swiper modules
import { Pagination, Navigation } from "swiper/modules";

// component
import NavigationBreadcrumb from "./NavigationBreadcrumb.jsx";
// data
import { FullstackData } from "../data/FsProjects.jsx";

const FsSlider = () => {
    const fsData = FullstackData;

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
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="slider">
                {fsData.map((fsProject, index) => (
                    <SwiperSlide key={index}>
                        <section className="d-flex justify-content-center">
                            <img
                                src={fsProject.image_src}
                                alt={fsProject.alt}
                            />
                        </section>
                        <section className="py-3">
                            <h3>{fsProject.name}</h3>
                            <p>{fsProject.description}</p>
                            <button>{fsProject.website_url}</button>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default FsSlider;
