import React, {useState, useEffect} from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {Link} from "react-router-dom"


const Footer = () => {
    return(
        <div className="bg-blue-800 px-32 py-16 grid grid-cols-1 sm:grid-cols-3">
        <div className="flex justify-center">
        <img className="w-40 cursor-pointer h-auto" src="https://luya.blob.core.windows.net/test/logo_colegio_iesm.svg" alt="svgimage" />
        </div>
        <div className="">
        <div className="sm:flex hidden justify-start sm:justify-center">
        <ul>
            <Link to="/history"><li className="my-4 cursor-pointer text-white font-semibold">Acerca de</li></Link>
            <li className="my-4 cursor-pointer text-white font-semibold">Términos de uso</li>
        </ul>
        </div>
        </div>
        <div className="py-4">
        <div className="flex justify-center">
        <p className="text-white font-semibold text-lg mt-7 sm:mt-0 mb-5">Redes sociales</p>
        </div>
        <div className="flex justify-evenly">
                <a href="https://www.facebook.com/profile.php?id=61550197531414&mibextid=ZbWKwL" target="_blank" ><FaFacebook className="w-5 cursor-pointer h-auto text-white hover:text-gray-200" /></a>
                <FaInstagram href="" target="_blank" className="w-5 cursor-pointer h-auto text-white hover:text-gray-200" />
            </div>
        </div>
        </div>
    )
}

export default Footer;