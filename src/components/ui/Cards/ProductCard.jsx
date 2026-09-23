import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import { useWishlist } from "../../../hooks/useWishlist"

import { useCart } from "../../../hooks/useCart";


const ProductCard = ({ product }) => {
    const { liked, toggleWishlist } = useWishlist(product);
    const { addToCart } = useCart();


    return (
        <div className="product-item relative product-card">
            <div className="product-image relative rounded-sm overflow-hidden">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image1}
                        alt={product.title}
                        className="section-image"
                    />
                </Link>
                <ul className="absolute inset-0 flex justify-center items-center gap-2 product-icons z-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li
                        onClick={toggleWishlist}
                        aria-label="Wishlist"
                        className="cursor-pointer pointer-events-auto bg-white hover:bg-black hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-heading"
                    >
                        <Heart size={18} strokeWidth={1.5} className={liked ? "fill-red-500 text-red-500" : ""} />
                    </li>

                    <li 
                        onClick={() => addToCart(product)}
                        aria-label="Add to cart"
                        className="cursor-pointer pointer-events-auto bg-white hover:bg-black hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-heading"
                    >
                        <ShoppingCart size={18} strokeWidth={1.5} />
                    </li>

                    <li>
                        <Link 
                            to={`/product/${product.id}`}
                            aria-label="View details"
                            className="cursor-pointer pointer-events-auto bg-white hover:bg-black hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-heading"
                        >
                            <MoveRight size={18} strokeWidth={1.5} />
                        </Link>
                    </li>
                </ul>
            </div>
            <Link to={`/product/${product.id}`}>
                <div className="product-content p-4">
                    <h3 className="text-xl font-semibold tracking-wide pb-2">{product.title}</h3>
                    <p className="text-paragraph text-lg">
                        {product.oldprice > 0 && (
                            <span className="line-through text-muted pe-2">
                                ${product.oldprice.toFixed(2)}
                            </span>
                        )}
                        ${product.price?.toFixed(2) || "0.00"}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;