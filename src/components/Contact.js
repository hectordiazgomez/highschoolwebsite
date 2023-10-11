import React from "react";

const Contact = () => {
    return(
        <div className="flex justify-center">
            <div className="w-5/6 sm:w-3/4">
            <div className="py-16">
        <div className="w-full rounded-2xl bg-gray-50 border border-gray-200 shadow-lg">
        <div className="flex justify-center">
            <p className="text-blue-700 text-xl font-semibold mt-8">Formulario de contacto</p>
        </div>
        <div className="mb-10 mt-6">
        <div>
            <label className="text-gray-700 pb-1 mx-4 sm:mx-12 font-semibold">Nombre</label>
        </div>
        <div>
        <input className="outline-none text-gray-700 font-medium border my-1  mx-4 sm:mx-12 border-blue-300 rounded px-2 py-1 w-3/4 sm:w-1/2"/>
        </div>
        </div>
        <div className="my-10">
        <div>
            <label className="text-gray-700 mx-4 sm:mx-12 pb-1 font-semibold">Correo electrónico</label>
        </div>
        <div>
        <input className="outline-none text-gray-700 font-medium border my-1  mx-4 sm:mx-12 border-blue-300 rounded px-2 py-1 w-3/4 sm:w-1/2"/>
        </div>
        </div>
        <div className="my-10">
        <div>
        <label className="text-gray-700 mx-4 sm:mx-12 pb-1 font-semibold">Mensaje</label>
        </div>
        <div>
        <textarea className="outline-none w-3/4 text-gray-700 font-medium sm:w-1/2 px-2 py-1 mx-4 sm:mx-12 border rounded mt-1 border-blue-300" rows={8}></textarea>
        </div>
        </div>
        <div className="flex justify-center py-6 sm:py-12">
            <button className="text-white px-5 py-2 rounded-lg hover:bg-blue-500 bg-blue-700 font-semibold">Enviar</button>
        </div>
        </div>
        </div>
            </div>
        </div>
    )
}

export default Contact;