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
import { ArchitectureData } from "../data/ArchProjects.jsx";

const ArchSlider = () => {
    const archData = ArchitectureData;

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
                            text: "Arquitectura",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="slider">
                {archData.map((yearData, index) => (
                    <section key={index}>
                        {yearData.projects.map((archProject, projectIndex) => (
                            <SwiperSlide key={projectIndex}>
                                <section className="d-flex justify-content-center">
                                    <img
                                        src={archProject.image_src}
                                        alt={archProject.name}
                                    />
                                </section>
                                <section className="py-3">
                                    <h3>{archProject.name}</h3>
                                    <p>{archProject.description}</p>
                                </section>
                            </SwiperSlide>
                        ))}
                    </section>
                ))}
            </Swiper>
        </>
    );
};

export default ArchSlider;
