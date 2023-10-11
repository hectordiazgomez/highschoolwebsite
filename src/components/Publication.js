import React from "react";

const Publication = () => {
    return(
        <>
            <div className="py-16 flex justify-center">
                <div className="w-11/12 sm:w-3/4">
                    <div className="flex justify-center">
                    <img src="https://ecotrendies.com/wp-content/uploads/2018/11/curiosidades-de-taiga.jpg" alt="" className="sm:w-3/5 w-5/6 h-auto rounded"/>
                    </div>
                    <div className="pb-8 pt-12 px-2 sm:px-6">
                        <p id="title" className="text-blue-700 text-2xl font-semibold">
                        Delegación de la Tsinghua University de Pekín visitó la PUCP
                        </p>
                    </div>
                    <div className="pb-8 px-2 sm:px-6">
                        <p id="title" className="text-gray-700 text-lg">
                        Una delegación de Tsinghua University, considerada una de las mejores del mundo, llegó a la PUCP con la finalidad de fortalecer el vínculo entre ambas
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Publication;