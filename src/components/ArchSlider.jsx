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
import SkillsIcons from "./SkillsIcons.jsx";
// data
import { ArchitectureData } from "../data/ArchProjects.jsx";
import { ArchSkills } from "../data/ArchSkills.jsx"

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
            <section className="row mt-3">
                <section className="col-4">
                    <SkillsIcons skillsData={ArchSkills}/>
                </section>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="col-8 slider">
                    {archData.map((archProject, index) => (
                        <SwiperSlide key={index}>
                            <section className="d-flex justify-content-center">
                                <img
                                    src={archProject.image_src}
                                    alt={archProject.name}
                                    className="slider_img"
                                />
                            </section>
                            <section className="py-3 slider_body">
                                <h3>{archProject.name}</h3>
                                <p>{archProject.description}</p>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default ArchSlider;
