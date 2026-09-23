import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useParams } from "react-router-dom";
import blogs from "../assets/Data/Blogs.json"

import author from "/images/Index/Blogs/author.png"
import gallery1 from "/images/Index/Blogs/gallery-image-01.jpg"
import gallery2 from "/images/Index/Blogs/gallery-image-02.jpg"
import post from "/images/Index/Blogs/gallery-main.jpg"
import { Quote } from "lucide-react";

import blogData from "../assets/Data/Blogs.json"
import BlogCard from "../components/ui/Cards/BlogCard";

gsap.registerPlugin(ScrollTrigger);


const BlogDetails = () => {
    const blogdetailRef = useRef();
    const { id } = useParams();

    const blog = blogs.find((item) => item.id === Number(id));

    if (!blog) return <p>Blog not found</p>;

    useEffect(() => {
        if (!blogdetailRef.current) return;

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(blogdetailRef);

            // 🔥 Banner
            gsap.from(q(".animate-banner"), {
                scale: 1.2,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            // 🔥 Header
            gsap.from(q(".animate-header"), {
                y: 80,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            });

            // 🔥 Text sections
            gsap.utils.toArray(q(".animate-text")).forEach((el) => {
                gsap.from(el, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });

            // 🔥 Gallery images
            gsap.from(q(".animate-gallery img"), {
                y: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".animate-gallery"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 Quote box
            gsap.from(q(".animate-quote"), {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: q(".animate-quote"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 Single image
            gsap.from(q(".animate-image img"), {
                scale: 1.1,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".animate-image"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 Form
            gsap.from(q(".animate-form"), {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".animate-form"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 Related posts
            gsap.from(q(".animate-related > div"), {
                y: 60,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".animate-related"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

        }, blogdetailRef);

        return () => ctx.revert();
    }, []);

    return (
        <>

            <div ref={blogdetailRef} className="w-full h-full">
                <div
                    className="section-banner animate-banner bg-center bg-cover bg-no-repeat min-h-150 flex justify-center items-center relative z-1"
                    style={{ backgroundImage: `url(${blog.image})` }}
                >
                    <div className="overly bg-primary absolute top-0 left-0 w-full h-full opacity-30"></div>
                </div>

                <div className="bg-light-yellow">
                    <div className="container mx-auto px-4 -translate-y-50 z-2 relative">
                        <div className="blog-info animate-header bg-white shadow-sm rounded-sm text-center mb-10 py-20 px-8">
                            <span className="bg-primary text-white px-3 py-1 rounded-sm">{blog.category}</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl mt-12 font-bold leading-tight mb-5 max-w-2xl mx-auto">{blog.title}</h2>
                            <ul className="centered-row mx-auto justify-center text-muted">
                                <li className="centered-row gap-2 me-5">
                                    <img src={author} alt="author-image" className="w-10 h-10 mx-auto rounded-full" />
                                    <span className="text-black">Peter Bowman</span>
                                    •
                                </li>
                                <li className="me-5 text-muted">
                                    {blog.date} •
                                </li>
                                <li className="text-muted">
                                    {blog.comments}
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:max-w-4xl mx-auto animate-text">

                            <p className="text-paragraph mt-4 leading-relaxed text-lg">
                                <span className="float-left text-6xl font-bold text-heading mr-4 leading-none">
                                    Q
                                </span>
                                uality interior design begins with an intimate dialogue between structural geometry and human rhythm. When conceptualizing modern living environments, the interplay between natural daylight, authentic material textures, and unencumbered volume forms the bedrock of every successful spatial narrative.
                            </p>

                            <p className="text-paragraph mt-6 leading-relaxed">
                                Rather than viewing furniture as decorative fill, contemporary architects treat pieces as sculptural anchors. A low-slung linen sectional or a brushed bronze luminaire doesn't simply occupy square footage; it defines sightlines, organizes circulation, and establishes a deliberate emotional tempo throughout the home.
                            </p>

                            <h3 className="mt-10 text-2xl font-semibold text-heading">
                                Material Honesty and Sensory Longevity
                            </h3>

                            <p className="text-paragraph mt-4 leading-relaxed">
                                True luxury is rooted in material honesty. Unlacquered brass that matures with age, open-pore European oak, and honed travertine stone carry tactile depth that synthetic finishes simply cannot replicate. These elements foster spaces that feel grounded, tactile, and deeply timeless.
                            </p>

                        </div>

                        <div className="animate-gallery lg:max-w-6xl centered-row flex-wrap lg:flex-nowrap justify-center mx-auto gap-3 my-10">
                            <img src={gallery1} alt="Bespoke architectural details" className="h-80 xl:h-100 bg-cover rounded-sm shadow-md" />
                            <img src={gallery2} alt="Modern living room styling" className="h-80 xl:h-100 bg-cover rounded-sm shadow-md" />
                        </div>

                        <div className="w-full lg:max-w-4xl mx-auto animate-text">

                            <p className="text-paragraph mt-4 leading-relaxed">
                                When curating private residences, acoustic control is just as essential as visual composition. Integrating natural wool drapery, fluted acoustic wall paneling, and strategic ceiling baffles ensures that expansive open-plan spaces maintain intimate, soothing soundscapes.
                            </p>

                            <p className="text-paragraph mt-6 leading-relaxed">
                                The transition between interior volumes should feel organic and intuitive. By using continuous flooring materials and aligning ceiling datums across adjacent rooms, our studio achieves visual continuity that visually expands physical boundaries.
                            </p>

                            <div className="bg-white p-10 mt-10 rounded-sm relative overflow-hidden animate-quote shadow-sm">
                                <Quote size={40} className="text-coffee mb-5" />
                                <p className="max-w-3xl text-lg leading-relaxed italic text-heading font-light">
                                    "Architecture is not about creating monuments for admiration; it is about crafting intimate vessels for human experience, quiet reflection, and enduring connection."
                                </p>

                                <div className="absolute left-0 top-0 w-1.5 h-full bg-coffee"></div>
                            </div>

                            <h3 className="mt-10 text-2xl font-semibold text-heading">
                                Sustainable Innovation in Luxury Interiors
                            </h3>

                            <p className="text-paragraph mt-4 leading-relaxed">
                                Modern design cannot exist in isolation from ecological responsibility. From low-VOC natural lime plasters to energy-efficient architectural lighting systems and circular material sourcing, sustainable innovation is woven into the DNA of every Aura Studio project.
                            </p>
                        </div>

                        <div className="lg:max-w-6xl centered-row justify-center mx-auto gap-3 my-10 animate-image">
                            <img src={post} alt="Completed interior architectural design" className="rounded-sm shadow-md" />
                        </div>

                        <div className="w-full lg:max-w-4xl mx-auto animate-text animate-text">
                            <p className="text-paragraph mt-6 leading-relaxed">
                                Ultimately, an extraordinary home is one that evolves with its inhabitants. By prioritizing versatile layouts, bespoke craftsmanship, and timeless materiality, we create spaces that remain effortlessly relevant across generations.
                            </p>
                        </div>

                        <div className="w-full lg:max-w-4xl mx-auto my-10 animate-form">

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12 text-heading">
                                Leave a comment
                            </h2>

                            <form className="space-y-10">

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name *"
                                            className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-3"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your E-mail *"
                                            className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-3"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        rows="4"
                                        placeholder="Your comment *"
                                        className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-3 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span>
                                        I agree that my submitted data is being collected and stored.
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-teal-600 text-white px-10 py-4 font-semibold hover:bg-teal-700 transition"
                                >
                                    Leave a comment
                                </button>

                            </form>
                        </div>

                        <div className="w-full lg:max-w-4xl mx-auto animate-related">
                            <h3 className="mt-10 text-2xl font-semibold text-heading mb-5">
                                You May Also Like
                            </h3>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {blogData.slice(0, 2).map((blog) => (
                                    <div key={blog.id}>
                                        <BlogCard
                                            id={blog.id}
                                            image={blog.image}
                                            title={blog.title}
                                            date={blog.date}
                                            category={blog.category}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails