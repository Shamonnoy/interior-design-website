import React, { useRef } from "react";
import BlogCard from "../ui/Cards/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Gift, Percent, ShoppingBag, WalletMinimal } from "lucide-react";
import blogData from "../../assets/Data/Blogs.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapScrollAnim from "../../hooks/useGsapScrollAnim";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
    const headingRef = useRef();
    const blogRef = useRef();
    const featureRef = useRef();
    const wrapperRef = useRef();

    useGsapScrollAnim(wrapperRef, () => {
        gsap.from(headingRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });

        // Blog cards – use a small delay so Swiper finishes init
        gsap.from(blogRef.current.querySelectorAll(".swiper-slide"), {
            y: 50,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: blogRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(featureRef.current.querySelectorAll(".item"), {
            y: 50,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: featureRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });
    });

    return (
        <div ref={wrapperRef} className="bg-light-yellow">
            <div className="container pt-[8%] mx-auto px-4">
                <div ref={headingRef} className="text-center w-full mb-16">
                    <span className="title-span">Our Blog</span>
                    <h2 className="heading-1 mb-5">
                        Latest <span className="text-coffee"> news </span>
                    </h2>
                </div>

                <div ref={blogRef}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mb-40"
                    >
                        {blogData.map((blog) => (
                            <SwiperSlide key={blog.id}>
                                <BlogCard
                                    id={blog.id}
                                    image={blog.image}
                                    title={blog.title}
                                    date={blog.date}
                                    category={blog.category}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="border-t border-[#DDDAC9]">
                    <div
                        ref={featureRef}
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-14 py-16"
                    >
                        <div className="item centered-row gap-4 lg:px-4">
                            <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-center shrink-0 text-coffee">
                                <Gift size={24} strokeWidth={1.25} />
                            </div>
                            <div className="content">
                                <h4 className="text-base font-semibold text-heading">Bespoke Concierge</h4>
                                <span className="text-gray-500 text-xs">Personalized styling support</span>
                            </div>
                        </div>
                        <div className="item centered-row gap-4 lg:px-4">
                            <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-center shrink-0 text-coffee">
                                <Percent size={24} strokeWidth={1.25} />
                            </div>
                            <div className="content">
                                <h4 className="text-base font-semibold text-heading">Trade Partnerships</h4>
                                <span className="text-gray-500 text-xs">Exclusive architect privileges</span>
                            </div>
                        </div>
                        <div className="item centered-row gap-4 lg:px-4">
                            <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-center shrink-0 text-coffee">
                                <ShoppingBag size={24} strokeWidth={1.25} />
                            </div>
                            <div className="content">
                                <h4 className="text-base font-semibold text-heading">White-Glove Delivery</h4>
                                <span className="text-gray-500 text-xs">Insured freight & setup</span>
                            </div>
                        </div>
                        <div className="item centered-row gap-4 lg:px-4">
                            <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-center shrink-0 text-coffee">
                                <WalletMinimal size={24} strokeWidth={1.25} />
                            </div>
                            <div className="content">
                                <h4 className="text-base font-semibold text-heading">Lifetime Integrity</h4>
                                <span className="text-gray-500 text-xs">Guaranteed artisanal build</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
