import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import collectionImage1 from "/images/Index/Collection/collection-image-01.jpg";
import collectionImage2 from "/images/Index/Collection/collection-image-02.jpg";
import useGsapScrollAnim from "../../hooks/useGsapScrollAnim";
import VideoModal from "../ui/Model/VideoModal";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
    const collectionRef = useRef();
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useGsapScrollAnim(collectionRef, () => {
        gsap.from(".collection-img-main", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: collectionRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".collection-content", {
            x: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: collectionRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".collection-play-btn", {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: collectionRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });
    });

    return (
        <>
            <div ref={collectionRef} className="collection container py-[8%] mx-auto px-4 section-container gap-10 lg:gap-14">
                <div className="collection-img-main w-full lg:w-1/2 overflow-hidden group rounded-sm max-w-full lg:max-w-150 relative mx-auto shadow-xl">
                    <img src={collectionImage1} alt="Bespoke furniture collection" className="section-image group-hover:scale-105 transition-all duration-700 ease-out" />
                </div>
                <div className="collection-content w-full lg:w-1/2">
                    <span className="title-span">Curated Collection</span>
                    <h2 className="heading-1 mb-5">
                        Sculptural forms
                        <span className="text-coffee"> crafted for </span>
                        modern living
                    </h2>
                    <p className="pera-text mb-12 sm:mb-20 lg:mb-28 leading-relaxed">
                        Every piece is meticulously constructed using sustainable Italian upholstery, rich walnut timbers, and brushed brass details, engineered to deliver enduring comfort and architectural elegance.
                    </p>
                    <div className="relative flex justify-center items-center rounded-sm overflow-hidden mx-0! group shadow-lg">
                        <img src={collectionImage2} alt="Studio craftsmanship preview" className="w-full object-cover group-hover:scale-105 transition-all duration-700" />
                        <div className="collection-play-btn absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/20 group-hover:bg-black/40 transition duration-300">
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="bg-white hover:bg-coffee hover:text-white text-heading w-16 h-16 flex justify-center items-center rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
                                aria-label="Play interior design showcase film"
                            >
                                <Play size={22} className="ml-1 fill-current" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Showcase Modal */}
            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoSrc="https://www.youtube-nocookie.com/embed/gT2q7o_6n7g?autoplay=1"
            />
        </>
    );
};

export default Collection;
