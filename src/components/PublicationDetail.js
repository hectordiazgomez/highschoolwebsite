import React from "react";
import { useParams } from "react-router-dom";

const PublicationDetail = (props) => {
    const { id } = useParams();
    const publications = props.publications;
    const publication = publications?.find(pub => pub.id === id);

    if (!publication) {
        return <div>Publication not found!</div>;
    }


        return(
            <>
            <div className="flex justify-center">
                    <div className="w-3/4">
                        <p className="text-2xl font-medium text-blue-600 pt-8 pb-6">{publication.title}</p>
                    </div>
            </div>
            <div className="flex justify-center">
                    <div className="w-3/4">
                        <img className="h-64 w-auto" src={publication.image} alt="" />
                    </div>
            </div>
            <div className="flex justify-center">
                    <div className="w-3/4">
                        <p className="text-gray-700 pt-6 pb-6 font-medium italic">{publication.description}</p>
                    </div>
            </div>
            <div className="flex justify-center">
                    <div className="w-3/4">
                        <p className="text-gray-600 text-lg pb-12">{publication.maintext}</p>
                    </div>
            </div>
        </>
    )
}

export default PublicationDetail;