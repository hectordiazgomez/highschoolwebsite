import React, {useState, useEffect} from "react";
import Home from "./components/Home";
import History from "./components/History";
import Authorities from "./components/Authorities";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Publication from "./components/Publication";
import Login from "./components/admin/Login";
import Admin from "./components/admin/Admin";
import {Routes, Route, useNavigate} from 'react-router-dom';
import PublicationDetail from "./components/PublicationDetail";
import {db} from "./firebase-config";
import {storage} from "./firebase-config";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {collection, getDocs, addDoc } from "firebase/firestore";
import { v4 } from "uuid";
import Nuevaseccion from "./components/nuevasecccion";


function App() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [_imageUrl,setImageUrl] = useState(null)
  const imageListRef = ref(storage, "images/publications.jpg")
  // const uploadImage = () => {

  //   console.log(imageUpload,"imageUploadimageUpload")
  //    if (imageUpload == null) return;
  //    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //    uploadBytes(imageRef, imageUpload).then(() => {
  //     alert("Published")
  //    })
  // };

  const uploadImage = async () => {
    if (!imageUpload) return;

    try {
      console.log("Publicación lista")
      // Upload the image to Firebase Storage
      // const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      // await uploadBytes(imageRef, imageUpload);

      // Get the download URL of the uploaded image
      // const downloadURL = await getDownloadURL(imageRef);
      // setImageUrl(downloadURL)

      // Store the metadata (e.g., download URL) in Firestore
      // const docRef = await addDoc(collection(db, 'publications'), {
      //   imageUrl: downloadURL,
      //   timestamp: new Date(), 
      // });

      // console.log('Image uploaded and metadata stored in Firestore with ID: ', docRef.id);
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
      })
    })
  }, [])

  useEffect(() => {
    document.title = "JOSÉ DE SAN MARTÍN - Estudio, Disciplina y Superación"
  }, [])

  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newMainText, setMainText] = useState("");

  const [publications, setPublications] = useState([]);
  const publicationsRef = collection(db, "publications");
 
  const navigate = useNavigate();

  const createPublication = async () => {
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      await uploadBytes(imageRef, imageUpload);
      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(imageRef);
      await addDoc(publicationsRef, {title: newTitle, image: downloadURL, description: newDescription, maintext: newMainText,timestamp: new Date() })
      alert("Publicación lista")
    }

  useEffect(() => {
      const getPublications = async () =>{
        const data = await getDocs(publicationsRef);
        setPublications(data?.docs?.map((doc) => ({...doc.data(), id: doc.id })));
          console.log(publications);
          console.log("Listo")
      }
      getPublications();
  }, [])

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home publications={publications} />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/admin" element={<Admin setImageUpload={setImageUpload} uploadImage={uploadImage} createPublication={createPublication} newMainText={newMainText} setNewImage={setNewImage} setNewTitle={setNewTitle} setNewDescription={setNewDescription} setMainText={setMainText}  />} />
    <Route path="/history" element={<History/>} />
    <Route path="/authorities" element={<Authorities/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/publication" element={<Publication/>} />
    <Route path="/publication/:id" element={<PublicationDetail publications={publications} />} />
    <Route path="/nuevaseccion" element={<Nuevaseccion/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
