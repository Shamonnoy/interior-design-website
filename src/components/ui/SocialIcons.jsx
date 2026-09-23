import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Dribbble, Instagram } from "lucide-react";

const SocialIcons = () => {
    const socials = [
        { icon: <Facebook size={18} strokeWidth={1.5} />, link: "https://www.facebook.com/", name: "Facebook" },
        { icon: <Twitter size={18} strokeWidth={1.5} />, link: "https://x.com/", name: "Twitter" },
        { icon: <Instagram size={18} strokeWidth={1.5} />, link: "https://www.instagram.com/", name: "Instagram" },
        { icon: <Dribbble size={18} strokeWidth={1.5} />, link: "https://dribbble.com/", name: "Dribbble" },
    ];

    return (
        <ul className="flex items-center space-x-3 relative">
            {socials.map((item, idx) => (
                <li key={idx}>
                    <Link
                        to={item.link}
                        aria-label={item.name}
                        className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-gray-300 flex justify-center items-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        {item.icon}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;