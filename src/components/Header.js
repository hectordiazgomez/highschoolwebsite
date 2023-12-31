import React, {useState} from "react";
import {Link} from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu


    return(
        <>
            <div className="hidden sm:flex w-full h-8 bg-blue-700">
        </div>
        <div className="bg-blue-900 border-b-2 border-blue-800 px-8 flex">
        <div className="w-1/3 sm:w-1/4 py-8 flex justify-center sm:justify-end">
        <Link to="/"><img className="sm:w-40 w-32 h-32 sm:h-40" src="https://luya.blob.core.windows.net/test/logo_colegio_iesm.svg" alt="svgimage" /></Link>
        </div>
        <div className="w-1/3 flex items-center sm:pr-24">
        <p className="sm:text-xl text-lg italic text-white">Estudio, Disciplina y Superación</p>
        </div>
        <div className="w-1/12 sm:flex hidden">
        </div>
        <div className="w-1/3 sm:flex justify-center hidden">
            <img src="https://luya.blob.core.windows.net/hermes/Estudiantes.png" alt="" className="w-1/2 h-auto py-6"/>
        </div>
                <div className="sm:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                    </button>
                </div>
        </div>
            {isMenuOpen && (
                <div className="px-5 bg-blue-900 flex flex-col sm:hidden">
                    {/* Repeat your Link components here */}
                    <Link to="/" className="text-white py-2">Publicaciones</Link>
                    <Link to="/videos" className="text-white py-2">Galería</Link>
                    <Link to="/history" className="text-white py-2">Historia</Link>
                    <Link to="/authorities" className="text-white py-2">Autoridades</Link>
                    <Link to="/login" className="text-white py-2">Administrador</Link>
                </div>
            )}

        <div className="px-5 bg-blue-900 flex sm:flex hidden">
        <div className="w-2/5 hidden sm:flex justify-center">
        <Link to="/"><p className="text-white cursor-pointer hover:text-gray-200 py-3 text-lg font-semibold">Publicaciones</p></Link>
        </div>
        <div className="w-full sm:w-3/5 items-center grid grid-cols-4">
        <Link to="/videos"><div className="flex cursor-pointer  justify-center text-white hover:bg-white hover:text-blue-800 py-6 sm:py-3">
        <p className="sm:text-lg font-semibold">Galería</p>
        </div></Link>
        <Link to="/history"><div className="flex cursor-pointer  justify-center text-white hover:bg-white hover:text-blue-800 py-6 sm:py-3">
        <p className="sm:text-lg font-semibold">Historia</p>
        </div></Link>
        <Link to="/authorities"><div className="flex cursor-pointer  justify-center text-white hover:bg-white hover:text-blue-800 py-6 sm:py-3">
        <p className="sm:text-lg font-semibold">Autoridades</p>
        </div></Link>
        <Link to="/login"><div className="flex cursor-pointer  justify-center text-white hover:bg-white hover:text-blue-800 py-6 sm:py-3">
        <p className="sm:text-lg font-semibold">Administrador</p>
        </div></Link>
        </div>
        </div>
        </>
    )
}

export default Header;