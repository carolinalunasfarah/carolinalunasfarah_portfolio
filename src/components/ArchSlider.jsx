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

// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";

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
            <section className="row about_row">
                <section className="col-5 col-md-5 col-lg-5 col-sm-12 slider_body">
                    <SkillsIcons skillsData={ArchSkills} />
                    <button className="btn btn-secondary cursor-pointer btn_arch">
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
                    className="col-7 col-md-7 col-lg-7 col-sm-12 slider arch_body">
                    {archData.map((archProject, index) => (
                        <SwiperSlide key={index}>
                            {archProject.image_src && (
                                <section className="flex_col">
                                    <LazyLoadImage
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
