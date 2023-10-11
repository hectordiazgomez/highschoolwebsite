import React, {useState, useEffect} from "react";

const Admin = ({ createPublication, setImageUpload, setNewImage, uploadImage, setNewTitle, setNewDescription, newMainText, setMainText }) => {
    return(
        <div>
            <div className="flex justify-center pt-8">
                <p className="text-blue-600 text-2xl font-semibold">Panel de administrador</p>
            </div>
            <div className="py-8 flex justify-center">
            <div className="w-2/3">
            <div>
                <p className="text-blue-500 italic mb-3 text-lg font-semibold">Nueva publicación</p>
            </div>
            <div>
                <p className="text-gray-500 italic text-lg font-semibold">Título</p>
            </div>
            <div>
                <input onChange={(event) => {setNewTitle(event.target.value)}} className="border-2 shadow-lg w-full sm:w-2/3 my-2 font-medium border-blue-300 text-gray-600 rounded outline-none px-2 py-1" />
            </div>
            <div>
                <p className="text-gray-500 italic text-lg font-semibold">Subtítulo</p>
            </div>
            <div>
                <input onChange={(event) => {setNewDescription(event.target.value)}} className="border-2 shadow-lg w-full sm:w-2/3 my-2 font-medium border-blue-300 text-gray-600 rounded outline-none px-2 py-1" />
            </div>
            <div>
                <p className="text-gray-500 italic text-lg font-semibold">Imágen</p>
            </div>
            <div>
            <input  className="mb-2 " onChange={(event) => {setImageUpload(event.target.files[0])}} type="file" />
            </div>
            <div>
                <p className="text-gray-500 italic text-lg font-semibold">Descripción</p>
            </div>
            <div>
      <textarea 
        value={newMainText}
        onChange={event => setMainText(event.target.value)}
        rows={12} 
        className="border-2 w-11/12 sm:w-2/3 my-2 border-blue-300 font-medium text-gray-600 rounded outline-none px-2 py-1"
        style={{ whiteSpace: 'pre-wrap' }}
      />
    </div>
            <div className="flex justify-center py-16">
                <button onClick={() => {uploadImage(); createPublication()}} className="px-8 py-3 text-lg rounded-xl bg-blue-700 hover:bg-blue-500 text-white font-semibold">Publicar</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Admin;