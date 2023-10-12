import React, { useState } from "react";
import {Link} from "react-router-dom";
import Popup from "./Popup";

const Home = ({publications}) => {
    const [shownCount, setShownCount] = useState(4);

    const handleShowMore = () => {
        setShownCount(shownCount + 3);
    }

    const [mostrar, setMostrar] = useState(false);

    const togglePopups = () => {
        setMostrar(!mostrar)
    }

    const sortedPublications = [...(publications ?? [])].sort((a, b) => b.timestamp - a.timestamp);

    return (
        <>
                    <div className="flex my-8 mx-4 sm:mx-24">
                    <div className="w-full sm:w-1/2">
                    {(sortedPublications ?? []).slice(0,1).map((publication, index) => {
                    return(
                        <Link to={`/publication/${publication.id}`}><div key={index} className="m-4 cursor-pointer border border-gray-200 shadow-lg rounded py-6 px-6">
                            <img className="w-full h-auto rounded-b transition-transform duration-300 transform hover:scale-110 pb-6" src={publication.image} alt="imagen"/>
                            <p className="text-blue-500 line-clamp-2 hover:underline hover:text-blue-700 text-xl mb-3">{publication.title}</p>
                            <p className="text-gray-900 text-lg line-clamp-3 font-medium hover:text-gray-700">{publication.description}</p>
                        </div></Link>
                    );
                })}
                    </div>
                    <Popup mostrar={mostrar} togglePopups={togglePopups} />
                    <div className="hidden w-1/2 sm:grid grid-cols-2">
                        <div onClick={togglePopups} className="p-6 h-72 rounded hover:bg-gray-50 hover:shadow-lg">
                        <p className="text-blue-600 cursor-pointer text-xl font-medium  py-3">Misión</p>
                        <p className="pb-3 line-clamp-6 cursor-pointer text-lg text-gray-700">Somos una Institución Educativa orientada a brindar una educación integral poniendo énfasis en la formación científica, humanística y técnica, cimentada en la práctica de valores de nuestros estudiantes de acuerdo a las exigencias actuales para el logro de un cambio socio-económico y cultural que redunda en beneficio de la comunidad local, regional y nacional; propiciando la adecuada utilización de los recursos de la zona para orientar y elevar la calidad educativa.</p>
                        </div>
                        <div onClick={togglePopups} className="p-6 h-72 rounded hover:bg-gray-50 hover:shadow-lg">
                        <p className="text-blue-600 cursor-pointer text-xl font-medium py-3">Visión</p>
                        <p className="pb-3 line-clamp-7 cursor-pointer text-lg text-gray-700">Al 2025 anhelamos ser una Institución que brinde una educación de calidad, que busque el desarrollo sostenible de su entorno y que vaya acorde con el avance científico y tecnológico que exige el mundo globalizado.</p>

                        </div>
                    </div>
            </div>
            <div className="grid my-8 mx-4 sm:mx-24 grid-cols-1 sm:grid-cols-3">
                {(sortedPublications ?? []).slice(1,shownCount).map((publication, index) => {
                    return(
                        <Link to={`/publication/${publication.id}`}><div key={index} className="m-4 cursor-pointer border border-gray-200 shadow-lg rounded py-6 px-6">
                            <img className="w-full h-56 rounded-b transition-transform duration-300 transform hover:scale-110 pb-6" src={publication.image} alt="imagen"/>
                            <p className="text-blue-500 line-clamp-2 hover:underline hover:text-blue-700 text-xl mb-3">{publication.title}</p>
                            <p className="text-gray-900 text-lg line-clamp-3 font-medium hover:text-gray-700">{publication.description}</p>
                        </div></Link>
                    );
                })}
            </div>
            <div className="flex justify-end mx-16">
                <button onClick={handleShowMore} className="text-white font-semibold bg-blue-700 rounded mb-16 mt-6 px-8 py-2 hover:bg-blue-500">Ver más</button>
            </div>
        </>
    )
}

export default Home;