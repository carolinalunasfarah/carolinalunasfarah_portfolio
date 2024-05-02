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
import { useNavigate } from "react-router-dom";

const ArchSlider = () => {
    const archData = ArchitectureData;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/links");
    };

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
                <section className="col-5 slider_body">
                    <SkillsIcons skillsData={ArchSkills} />
                    <button
                        onClick={handleClick}
                        className="btn btn-secondary cursor-pointer">
                        <span>Portafolio completo</span>
                    </button>
                </section>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="col-7 slider">
                    {archData.map((archProject, index) => (
                        <SwiperSlide key={index}>
                            {archProject.image_src && (
                                <section className="d-flex justify-content-center">
                                    <img
                                        src={archProject.image_src}
                                        alt={`${archProject.name} + "website image"`}
                                        className="slider_img"
                                    />
                                </section>
                            )}
                            <section
                                className={`py-3 slider_body ${
                                    !archProject.image_src && "slide_only_texts"
                                }`}>
                                <h4>{archProject.name}</h4>
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