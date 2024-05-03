// swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// swiper modules
import { Pagination, Navigation } from "swiper/modules";

// components
import NavigationBreadcrumb from "./NavigationBreadcrumb.jsx";
import SkillsIcons from "./SkillsIcons.jsx";
// data
import { FullstackData } from "../data/FsProjects.jsx";
import { FsSkills } from "../data/FsSkills.jsx";

const FsSlider = () => {
    const fsData = FullstackData;

    const handleClick = (url) => {
        window.open(url, "_blank");
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
                            text: "Fullstack",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
            <section className="row mt-3 ps-3 pe-5">
                <section className="col-5 cold-md-5 col-lg-5 col-sm-12 slider_body">
                    <SkillsIcons skillsData={FsSkills} />
                </section>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="col col-7 slider">
                    {fsData.map((fsProject, index) => (
                        <SwiperSlide key={index}>
                            <section className="flex_col">
                                <img
                                    src={fsProject.image_src}
                                    alt={fsProject.name}
                                    className="rounded-4"
                                />
                            </section>
                            <section className="py-3 slider_body">
                                <h3 className="cursor_default">
                                    {fsProject.name}
                                </h3>
                                <p className="cursor_default">
                                    {fsProject.description}
                                </p>
                                <section>
                                    {fsProject.website_url && (
                                        <button
                                            onClick={() =>
                                                handleClick(
                                                    fsProject.website_url
                                                )
                                            }
                                            className="btn btn-primary cursor-pointer me-4"
                                            aria-label="Visitar página">
                                            <span>Visita esta página</span>
                                        </button>
                                    )}
                                    <button
                                        onClick={() =>
                                            handleClick(fsProject.rep_url)
                                        }
                                        className="btn btn-secondary cursor-pointer"
                                        aria-label="Visitar código">
                                        <span>Ver código</span>
                                    </button>
                                </section>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default FsSlider;
