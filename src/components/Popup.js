import React from "react";

const Popup = ({mostrar, togglePopups}) => {
    return(
        <>
        {mostrar &&<div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex hidden justify-center">
                  <p className="text-xl font-medium text-blue-600 mx-5 py-3"> Misión</p>
                  </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center flex justify-center sm:mt-0 sm:ml-4 sm:text-left">
                  <p className="text-gray-600 text-lg">
                  Somos una Institución Educativa orientada a brindar una educación integral poniendo énfasis en la formación científica, humanística y técnica, cimentada en la práctica de valores de nuestros estudiantes de acuerdo a las exigencias actuales para el logro de un cambio socio-económico y cultural que redunda en beneficio de la comunidad local, regional y nacional; propiciando la adecuada utilización de los recursos de la zona para orientar y elevar la calidad educativa.
                  </p>
                    <div className="mt-2">
                      
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 mt-6 sm:mt-0 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={togglePopups}
            >
             Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>}
        </>
    )
}

export default Popup;