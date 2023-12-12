import React from "react";

const Nuevaseccion = ({ videos, imagenes }) => {

    const sortedPublications = [...(videos ?? [])].sort((a, b) => b.timestamp - a.timestamp);
    const sortedImages = [...(imagenes ?? [])].sort((a, b) => b.timestamp - a.timestamp);

    return(
        <>
        <div className="flex justify-center">
            <div className=" w-4/5">
                <div className="pt-32 flex justify-center pb-20">
                    <p className="text-2xl font-semibold text-blue-600 font-semibold">EXPLORA NUESTRA GALERÍA</p>
                </div>
                <div className="grid pb-12 grid-cols-3">
                        {(sortedPublications ?? []).map((publication, index) => {
                            return (
                                <div className="flex py-6 justify-center">
                                    <iframe className="w-4/5 h-64 rounded" src={`https://www.youtube.com/embed/${publication.url}`} ></iframe>
                                </div>
                            );
                        })}
                        {(sortedImages ?? []).map((publication, index) => {
                            return (
                                <div className="flex py-6 justify-center">
                                    <img className="w-4/5 h-64 rounded" src={publication.url} ></img>
                                </div>
                            );
                        })}
                </div>
         </div>
        </div>
        </>
    )
}

export default Nuevaseccion;