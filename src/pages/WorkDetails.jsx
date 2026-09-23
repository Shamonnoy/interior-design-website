import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useParams } from "react-router-dom";
import worksData from "../assets/Data/Work.json";
import PageBanner from "../components/ui/PageBanner";

import galleryImage1 from "/images/Gallery/gallery-image-02.jpg"
import galleryImage2 from "/images/Gallery/gallery-image-03.jpg"
import galleryImage3 from "/images/Gallery/gallery-image-08.jpg"
import MainBtn from "../components/ui/Buttons/MainBtn";
import { Mail, MapPin, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WorkDetails = () => {
    const workRef = useRef();
    const { id } = useParams();

    const work = worksData.find((item) => item.id === parseInt(id));

    if (!work) return <p>work not found</p>;

    useEffect(() => {
        if (!workRef.current) return;

        const ctx = gsap.context(() => {

            const mainImage = workRef.current.querySelector(".main-image");
            const title = workRef.current.querySelector(".main-title");
            const paras = workRef.current.querySelectorAll(".para");
            const galleryImgs = workRef.current.querySelectorAll(".gallery-img");
            const bottomImage = workRef.current.querySelector(".bottom-image");
            const formTitle = workRef.current.querySelector(".form-title");
            const form = workRef.current.querySelector(".contact-form");
            const inputs = workRef.current.querySelectorAll(".input-wrapper");
            const contactItems = workRef.current.querySelectorAll(".contact-item");
            const button = workRef.current.querySelector(".submit-btn");

            if (mainImage) {
                gsap.from(mainImage, {
                    scale: 1.1,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: mainImage,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (title) {
                gsap.from(title, {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            paras.forEach((para) => {
                gsap.from(para, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: para,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            });

            if (galleryImgs.length) {
                gsap.from(galleryImgs, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: galleryImgs[0],
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (bottomImage) {
                gsap.from(bottomImage, {
                    scale: 1.05,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bottomImage,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (formTitle) {
                gsap.from(formTitle, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: formTitle,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (inputs.length) {
                gsap.from(inputs, {
                    y: 25,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: form,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (contactItems.length) {
                gsap.from(contactItems, {
                    x: 40,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contactItems[0],
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (button) {
                gsap.from(button, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    delay: 0.4,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: button,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            }

        }, workRef);

        return () => ctx.revert();
    }, []);

    return (
        <>

            <PageBanner
                title="work Details"
                currentPage="work Details"
                productName={work.title}
            />

            <div ref={workRef} className="container mx-auto px-4 py-[8%]">
                <div className="section-container p-0! gap-10 lg:gap-14">
                    <div className="w-full lg:w-[70%]">
                        <img
                            src={work.mainimage}
                            alt={work.title}
                            className="w-full h-full object-cover rounded main-image"
                        />

                        <h3 className="text-3xl lg:text-4xl font-semibold pt-8 pb-5 main-title">{work.title}</h3>
                        <p className="text-paragraph pb-8 para leading-relaxed">
                            Commissioned as a holistic residential transformation, {work.title} emphasizes balanced proportions, honest materiality, and an uninterrupted visual connection with surrounding natural light.
                        </p>

                        <div className="centered-row justify-between flex-col lg:flex-row gap-3 w-full h-auto lg:h-90">
                            <div className="image group overflow-hidden rounded-sm h-full w-full gallery-img shadow-sm">
                                <img src={galleryImage1} alt="Spatial elevation" className="section-image group-hover:scale-105 transition-all duration-700" />
                            </div>
                            <div className="image group overflow-hidden rounded-sm h-full w-full gallery-img shadow-sm">
                                <img src={galleryImage2} alt="Artisanal carpentry and joinery" className="section-image group-hover:scale-105 transition-all duration-700" />
                            </div>
                        </div>

                        <p className="text-paragraph py-8 para leading-relaxed">
                            The spatial layout was re-engineered around central gathering zones while maintaining distinct zones of quiet solitude. Custom-milled timber wall treatments conceal storage elements to maintain clean, uninterrupted architectural planes.
                        </p>

                        <p className="text-paragraph pb-8 para leading-relaxed">
                            Lighting was conceptualized with concealed ambient LED channels and sculptural statement fixtures, allowing the atmospheric temperature of the residence to transition gracefully from daylight clarity to evening warmth.
                        </p>

                        <div className="h-auto lg:h-150 rounded-sm overflow-hidden shadow-md">
                            <img src={galleryImage3} alt="Completed project atmosphere" className="section-image bottom-image" />
                        </div>
                        <p className="text-paragraph py-8 para leading-relaxed">
                            The finished commission stands as a testament to our studio's philosophy: serene, functional luxury curated to elevate the rituals of daily life.
                        </p>
                    </div>
                    <div className="w-full lg:w-[30%] bg-white shadow p-5 lg:p-8 rounded-sm lg:sticky h-full top-0 right-0">
                        <h4 className="form-title">Get in Touch</h4>

                        <form className="space-y-8 mt-10">
                            <div className="input-wrapper pb-2 relative">
                                <input type="text" placeholder="Name" className="input-box w-full outline-none" required />
                            </div>

                            <div className="input-wrapper pb-2 relative">
                                <input type="email" placeholder="Email" className="input-box w-full outline-none" required />
                            </div>

                            <div className="input-wrapper pb-2 relative">
                                <input type="text" placeholder="Message" className="input-box w-full outline-none" required />
                            </div>

                            <MainBtn type="submit" text={"Get In Touch"} className="submit-btn bg-black! text-white! shadow-none! rounded-sm! mt-6" />
                        </form>

                        <div className="contact-info">
                            <h3 className="text-2xl font-medium pt-8 pb-8 form-title">Contact Info</h3>
                            <ul className="space-y-6 max-w-md">
                                <li className="flex items-start gap-4 group contact-item">
                                    <div className="w-10 h-10 rounded-full border border-stone-300 bg-light-yellow text-heading flex items-center justify-center transition-transform duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                        <MapPin size={18} strokeWidth={1.5} />
                                    </div>

                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        <span className="font-semibold block text-base text-heading">Kolkata Studio</span>
                                        Sector V, Salt Lake City <br />
                                        Kolkata, West Bengal 700091
                                    </p>
                                </li>

                                <li className="flex items-center gap-4 group contact-item">
                                    <div className="w-10 h-10 rounded-full border border-stone-300 bg-light-yellow text-heading flex items-center justify-center transition-transform duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                        <Mail size={18} strokeWidth={1.5} />
                                    </div>

                                    <p className="text-gray-700 text-sm">contact@aurastudio.design</p>
                                </li>

                                <li className="flex items-center gap-4 group contact-item">
                                    <div className="w-10 h-10 rounded-full border border-stone-300 bg-light-yellow text-heading flex items-center justify-center transition-transform duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                        <Phone size={18} strokeWidth={1.5} />
                                    </div>

                                    <p className="text-gray-700 text-sm">+91 33 2357 8000</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkDetails;