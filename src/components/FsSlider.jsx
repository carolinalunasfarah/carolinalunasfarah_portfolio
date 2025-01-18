import React, { useState } from "react";
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

// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";

const FsSlider = () => {
    const [videoUrl, setVideoUrl] = useState(null);
    const fsData = FullstackData;

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    const handleVideoClick = (url) => {
        setVideoUrl(url);
    };

    const closeVideoPlayer = () => {
        setVideoUrl(null);
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
                            text: "Programación",
                        },
                    ]}></NavigationBreadcrumb>
            </section>
            <section className="row skills_slider">
                <section className="col-5 col-md-5 col-lg-5 col-sm-12 flex_col ps-4">
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
                    className="col-7 col-md-7 col-lg-7 col-sm-12 slider">
                    {fsData.map((fsProject, index) => (
                        <SwiperSlide key={index}>
                            <section className="flex_col">
                                <LazyLoadImage
                                    src={fsProject.image_src}
                                    alt={fsProject.name}
                                    className="rounded-4"
                                />
                            </section>
                            <section className="py-3 slider_body">
                                <h4 className="cursor_default">
                                    {fsProject.name}
                                </h4>
                                <p className="cursor_default">
                                    {fsProject.description}
                                </p>
                                <section className="slider_links">
                                    {fsProject.website_url && (
                                        <button
                                            onClick={() =>
                                                handleClick(
                                                    fsProject.website_url
                                                )
                                            }
                                            className="btn btn-secondary cursor-pointer flex_col me-4"
                                            aria-label="Visitar página">
                                            <span>Visita esta página</span>
                                        </button>
                                    )}
                                    {fsProject.video_src && (
                                        <button
                                            onClick={() =>
                                                handleVideoClick(
                                                    fsProject.video_src
                                                )
                                            }
                                            className="btn btn-secondary cursor-pointer flex_col me-4"
                                            aria-label="Ver video">
                                            <span>Ver video</span>
                                        </button>
                                    )}
                                    <button
                                        onClick={() =>
                                            handleClick(fsProject.rep_url)
                                        }
                                        className="btn btn-secondary cursor-pointer flex_col"
                                        aria-label="Visitar código">
                                        <span>Ver código</span>
                                    </button>
                                </section>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Video Player */}
            {videoUrl && (
                <section
                    className="video-player-overlay"
                    onClick={closeVideoPlayer}>
                    <article
                        className="video-player"
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-button"
                            onClick={closeVideoPlayer}>
                            &times;
                        </button>
                        <video
                            src={videoUrl}
                            controls
                            controlsList="nodownload noremoteplayback"
                            disablePictureInPicture
                            onContextMenu={(e) => e.preventDefault()}
                            className="video-element">
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    </article>
                </section>
            )}
        </>
    );
};

export default FsSlider;
