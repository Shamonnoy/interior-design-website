import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageBanner from '../components/ui/PageBanner'
import { Info, Mail, MapPin, Pencil, Phone, Send, User } from 'lucide-react'
import MainBtn from '../components/ui/Buttons/MainBtn'
import toast from 'react-hot-toast'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Thank you, ${formData.name || 'valued client'}! Your message has been received. Our lead architect will contact you within 24 hours.`);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (!contactRef.current) return;

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(contactRef);
            gsap.from(q(".contact-item"), {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".contact-left"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 List items (icons)
            gsap.from(q(".contact-list"), {
                x: -40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".contact-left"),
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });


            gsap.from(q(".contact-right"), {
                x: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".contact-right"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            gsap.from(q(".contact-form > *"), {
                y: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".contact-form"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <>

            <PageBanner
                title="Contact Studio"
                currentPage="Contact Us"
            />

            <div ref={contactRef} className="container mx-auto px-4 py-[8%] section-container gap-10 lg:gap-14">
                <div className="lg:w-1/2 contact-left">
                    <span className="title-span contact-item">Start a Project</span>
                    <h2 className="heading-1 mb-5 contact-item">
                        <span className="text-coffee">Let’s sculpt your </span> <br />
                        next architectural vision
                    </h2>
                    <p className="pera-text contact-item">
                        Whether commissioning a private residence renovation, bespoke furniture pieces, or commercial styling, our partners are ready to collaborate.
                    </p>
                    <ul className="space-y-5">

                        <li className="flex items-center gap-4 group contact-list">
                            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-light-yellow border border-stone-300 text-heading transition duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                <MapPin size={18} strokeWidth={1.5} />
                            </div>
                            <p className="text-gray-700 font-normal">Sector V, Salt Lake City, Kolkata, West Bengal 700091, India</p>
                        </li>

                        <li className="flex items-center gap-4 group contact-list">
                            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-light-yellow border border-stone-300 text-heading transition duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                <Phone size={18} strokeWidth={1.5} />
                            </div>
                            <span className="text-gray-700 font-normal">+91 33 2357 8000</span>
                        </li>

                        <li className="flex items-center gap-4 group contact-list">
                            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-light-yellow border border-stone-300 text-heading transition duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                <Mail size={18} strokeWidth={1.5} />
                            </div>
                            <span className="text-gray-700 font-normal">contact@aurastudio.design</span>
                        </li>

                    </ul>
                </div>
                <div className="w-full lg:w-1/2 contact-right">
                    <form className="w-full space-y-10 contact-form" onSubmit={handleSubmit}>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="flex items-center border-b border-gray-400 pb-3 gap-3">
                                <User className="w-5 h-5 text-gray-700" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="bg-transparent w-full outline-none"
                                    required
                                />
                            </div>

                            <div className="flex items-center border-b border-gray-400 pb-3 gap-3">
                                <Mail className="w-5 h-5 text-gray-700" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="bg-transparent w-full outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="flex items-center border-b border-gray-400 pb-3 gap-3">
                                <Phone className="w-5 h-5 text-gray-700" />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="bg-transparent w-full outline-none"
                                />
                            </div>

                            <div className="flex items-center border-b border-gray-400 pb-3 gap-3">
                                <Info className="w-5 h-5 text-gray-700" />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Scope (e.g., Residential Renovation)"
                                    className="bg-transparent w-full outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-start border-b border-gray-400 pb-3 gap-3">
                            <Pencil className="w-5 h-5 text-gray-700 mt-1" />
                            <textarea
                                rows="3"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your space, timeline, and design aspirations..."
                                className="bg-transparent w-full outline-none resize-none"
                                required
                            ></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <MainBtn type='submit' text={"Get in Touch"} className='bg-black! text-white!' />

                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <input type="checkbox" className="w-4 h-4" />
                                I agree to the <span className="underline">Privacy Policy</span>.
                            </label>

                        </div>

                    </form>
                </div>
            </div>

            <div className="w-full h-100 sm:h-150 lg:h-180">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35246797245!2d88.26495147450754!3d22.535564875323863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1711280000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Contact