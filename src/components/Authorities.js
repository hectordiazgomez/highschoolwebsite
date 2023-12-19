import React from "react";

const Authorities = () => {
    return(
        <div className="flex justify-center py-16">
    <div className="w-2/3 ">
        <div>
            <p className="text-blue-600 my-8 text-xl">Autoridades locales</p>
            <p className="my-4 italic text-gray-500 text-lg"><a className="font-semibold">Alcaldesa:</a> Leyla Condorachay Soto</p>
            <p  className="my-4 italic text-gray-500 text-lg"><a className="font-semibold">Juez de Paz:</a> Pascual Condorachay Vásquez</p>
            <p  className="my-4 italic text-gray-500 text-lg"><a className="font-semibold">Jefe del Par Progreso:</a> Paulino Santillán Calongos</p>
        </div>
        <div className="mt-16">
        <TutorCard grade='1° "A"' name='Maria Edith García Dávila' />
        <TutorCard grade='1° "B"' name='Bethsy Mori Barrientos' />
        <TutorCard grade='2° "A"' name='Blakmer Luis Sifuentes Sánchez' />
        <TutorCard grade='2° "B"' name='Deysi Lozano Torres' />
        <TutorCard grade='3° "A"' name='Rosa Elizabeth Vásquez Mundaca' />
        <TutorCard grade='3° "B"' name='Cesi Magaly Suárez Sánchez' />
        <TutorCard grade='4°' name='Benjamín Vásquez Huamán' />
        <TutorCard grade='5°' name='Arni José Bernardo Valencia Mori' />
        </div>
        <div className="my-16 flex justify-center">
            <img className="w-full sm:w-1/2 h-auto rounded-t-lg" src="https://luya.blob.core.windows.net/test/alumnos1.jpeg" alt="" />
        </div>
    </div>
        </div>
    )
}

const TutorCard = ({ grade, name }) => (
    <div className="border border-gray-200 px-6 py-4 rounded">
        <p className="text-gray-600 font-medium">Tutor de {grade}: {name}</p>
    </div>
);

export default Authorities;