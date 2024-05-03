// swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// swiper modules
import { Navigation } from "swiper/modules";

// components
import NavigationBreadcrumb from "./NavigationBreadcrumb.jsx";
import SkillsIcons from "./SkillsIcons.jsx";
// data
import { ArchitectureData } from "../data/ArchProjects.jsx";
import { ArchSkills } from "../data/ArchSkills.jsx";
import ArchitecturePortfolio from "/calf_architecture_portfolio.pdf";

const ArchSlider = () => {
    const archData = ArchitectureData;

    const architecturePortfolio = ArchitecturePortfolio;

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
            <section className="row mt-3 ps-3 pe-5">
                <section className="col-5 cold-md-5 col-lg-5 col-sm-12 slider_body">
                    <SkillsIcons skillsData={ArchSkills} />
                    <button className="btn btn-secondary cursor-pointer mb-3">
                        <a
                            href={architecturePortfolio}
                            download
                            aria-label="Descargar portafolio arquitectura completo">
                            <span>Portafolio completo</span>
                        </a>
                    </button>
                </section>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="col-7 cold-md-7 col-lg-7 col-sm-12 slider">
                    {archData.map((archProject, index) => (
                        <SwiperSlide key={index}>
                            {archProject.image_src && (
                                <section className="flex_col">
                                    <img
                                        src={archProject.image_src}
                                        alt={`${archProject.name} + "website image"`}
                                    />
                                </section>
                            )}
                            <section
                                className={`slider_body ${
                                    !archProject.image_src && "slide_only_text"
                                }`}>
                                <h4 className="cursor_default">
                                    {archProject.name}
                                </h4>
                                <p className="cursor_default">
                                    {archProject.description}
                                </p>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default ArchSlider;
