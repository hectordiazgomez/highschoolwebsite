import React, {useState, useEffect} from "react";

const Admin = ({ subirVideo, imagenes, left, subirImagen, location, setLocation, setNewUrl, newUrl, createPublication, setImageUpload, setNewImage, uploadImage, setNewTitle, setNewDescription, newMainText, setMainText }) => {

    const [posts, setPosts] = useState(true);
    const [videos, setVideos] = useState(false);
    const [images, setImages] = useState(false);

    const showPosts = () => {
        setPosts(true)
        setVideos(false)
        setImages(false)
    }

    const showVideos = () => {
        setPosts(false)
        setVideos(true)
        setImages(false)
    }

    const showImages = () => {
        setPosts(false)
        setVideos(false)
        setImages(true)
    }

    const deleteUser = async (id) => {

}


    const sortedPublications = [...(left ?? [])].sort((a, b) => b.timestamp - a.timestamp);
    const sortedImages = [...(imagenes ?? [])].sort((a, b) => b.timestamp - a.timestamp);

    return(
        <div>
        <div className="flex justify-center">
            <div className="w-2/5 grid grid-cols-3">
                    <div onClick={showPosts} className={`${posts ? "bg-green-600 text-white border-green-600" : "bg-white text-green-600 border-green-600"} border mb-4 mt-12 font-semibold text-lg py-4 flex justify-center cursor-pointer`}>
                    <p>Publicaciones</p>
                </div>
                    <div onClick={showVideos} className={`${videos ? "bg-green-600 text-white border-green-600" : "bg-white text-green-600 border-green-600"} border mb-4 mt-12 font-semibold text-lg py-4 flex justify-center cursor-pointer`}>
                        <p>Videos</p>
                    </div>
                    <div onClick={showImages} className={`${images ? "bg-green-600 text-white border-green-600" : "bg-white text-green-600 border-green-600"} border mb-4 mt-12 font-semibold text-lg py-4 flex justify-center cursor-pointer`}>
                        <p>Imágenes</p>
                    </div>
            </div>
        </div>
        {posts && 
                <div id="posts">
                    <div className="py-8 flex justify-center">
                        <div className="w-2/3">
                            <div>
                                <p className="text-blue-500 italic mb-3 text-lg font-semibold">Nueva publicación</p>
                            </div>
                            <div>
                                <p className="text-gray-500 italic text-lg font-semibold">Título</p>
                            </div>
                            <div>
                                <input placeholder="Ingrese el título" onChange={(event) => { setNewTitle(event.target.value) }} className="border-2 shadow-lg w-full sm:w-2/3 my-2 font-medium border-blue-300 text-gray-600 rounded outline-none px-2 py-1" />
                            </div>
                            <div>
                                <p className="text-gray-500 italic text-lg font-semibold">Subtítulo</p>
                            </div>
                            <div>
                                <input placeholder="Ingrese el subtítulo" onChange={(event) => { setNewDescription(event.target.value) }} className="border-2 shadow-lg w-full sm:w-2/3 my-2 font-medium border-blue-300 text-gray-600 rounded outline-none px-2 py-1" />
                            </div>
                            <div>
                                <p className="text-gray-500 italic text-lg font-semibold">Imágen</p>
                            </div>
                            <div>
                                <input className="mb-2 " onChange={(event) => { setImageUpload(event.target.files[0]) }} type="file" />
                            </div>
                            <div>
                                <p className="text-gray-500 italic text-lg font-semibold">Descripción</p>
                            </div>
                            <div>
                                <textarea
                                    value={newMainText}
                                    onChange={event => setMainText(event.target.value)}
                                    rows={12}
                                    placeholder="Ingrese su texto acá"
                                    className="border-2 w-11/12 sm:w-2/3 my-2 border-blue-300 font-medium text-gray-600 rounded outline-none px-2 py-1"
                                    style={{ whiteSpace: 'pre-wrap' }}
                                />
                            </div>
                            <div className="flex justify-center py-16">
                                <button onClick={() => { uploadImage(); createPublication() }} className="px-8 py-3 text-lg rounded-xl bg-blue-700 hover:bg-blue-500 text-white font-semibold">Publicar</button>
                            </div>
                        </div>
                        <div className="flex justify-center py-8">
                            <hr className="border-2 border-gray-300 w-2/3"></hr>
                        </div>
                    </div>
                </div>
        }
        {videos && 
                <div id="videos">
                    <div className="flex justify-center">
                        <div className="w-2/3 py-12">
                            <p className="text-xl text-blue-600 font-semibold">Agregar videos</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-2/3">
                            <div className="pb-12">
                                <input
                                    value={newUrl}
                                    onChange={(event) => setNewUrl(event.target.value)}
                                    placeholder="Ingrese el link" className="border-2 shadow-lg w-full sm:w-2/3 my-2 font-medium border-blue-300 text-gray-600 rounded outline-none px-2 py-1" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pb-24">
                        <button onClick={() => subirVideo()} className="px-8 py-3 text-lg rounded-xl bg-blue-700 hover:bg-blue-500 text-white font-semibold">Publicar video</button>
                    </div>
                </div>
        }
        {images &&
                <div id="images">
                    <div className="flex justify-center">
                        <div className="w-2/3 py-12">
                            <p className="text-xl text-blue-600 font-semibold">Agregar imágenes</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-2/3">
                            <div className="pb-12">
                                <input
                                    value={location}
                                    onChange={(event) => setLocation(event.target.value)}
                                    placeholder="Ingrese el link" className="border-2 shadow-lg w-full sm:w-2/3 my-2 font-medium border-blue-300 text-gray-600 rounded outline-none px-2 py-1" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pb-24">
                        <button onClick={() => subirImagen()} className="px-8 py-3 text-lg rounded-xl bg-blue-700 hover:bg-blue-500 text-white font-semibold">Publicar imágen</button>
                    </div>
                </div>
        }
        </div>
    )
}

export default Admin;