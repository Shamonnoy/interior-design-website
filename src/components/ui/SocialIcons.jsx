import React from "react";
import { Linkedin, Twitter, Globe } from "lucide-react";

const SocialIcons = () => {
    const socials = [
        {
            icon: <Linkedin size={18} strokeWidth={1.5} />,
            link: "https://www.linkedin.com/in/shamonnoy-halder/",
            name: "LinkedIn"
        },
        {
            icon: <Twitter size={18} strokeWidth={1.5} />,
            link: "https://x.com/ShamonnoyH",
            name: "X (Twitter)"
        },
        {
            icon: <Globe size={18} strokeWidth={1.5} />,
            link: "https://shamonnoy.vercel.app/",
            name: "Portfolio"
        },
    ];

    return (
        <ul className="flex items-center space-x-3 relative">
            {socials.map((item, idx) => (
                <li key={idx}>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-gray-300 flex justify-center items-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;