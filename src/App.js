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
import { firebase } from 'firebase/app';
import { v4 } from "uuid";
import Nuevaseccion from "./components/nuevasecccion";
import Gallery from "./components/Gallery";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll} from 'firebase/storage';



function App() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [_imageUrl,setImageUrl] = useState(null)
  const imageListRef = ref(storage, "images/publications.jpg")

  const uploadImage = async () => {
    if (!imageUpload) return;

    try {
      console.log("Publicación lista")
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
  const [newUrl, setNewUrl] = useState("");
  const [location, setLocation] = useState("")

  const [publications, setPublications] = useState([]);
  const publicationsRef = collection(db, "publications");
  const [videos, setVideos] = useState([])
  const videosRef = collection(db, "videos");
  const [imagenes, setImagenes] = useState([])
  const imagenesRef = collection(db, "imagenes")


  const createPublication = async () => {
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload);
    const downloadURL = await getDownloadURL(imageRef);
    await addDoc(publicationsRef, {
      title: newTitle,
      image: downloadURL,
      description: newDescription,
      maintext: newMainText,
      timestamp: serverTimestamp() // Use serverTimestamp() here
    });
    alert("Publicación lista");
  }

  const subirVideo = async () => {
    await addDoc(videosRef, {
      url: newUrl,
      timestamp: serverTimestamp()
    });
    alert("Video listo");
  }

  const subirImagen = async () => {
    await addDoc(imagenesRef, {
      url: location,
      timestamp: serverTimestamp()
    });
    alert("Imagen lista")
  }


  useEffect(() => {
      const getPublications = async () =>{
        const data = await getDocs(publicationsRef);
        setPublications(data?.docs?.map((doc) => ({...doc.data(), id: doc.id })));
          console.log(publications);
          console.log("Listo")
      }

    const getVideos = async () => {
      const data = await getDocs(videosRef);
      setVideos(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(videos);
      console.log("Listo")
    }

    const getImages = async () => {
      const data = await getDocs(imagenesRef);
      setImagenes(data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(imagenes);
      console.log("Listo")
    }

      getPublications();
      getVideos()
      getImages()
      console.log(publications);
  }, [])

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home publications={publications} />} />
    <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin subirImagen={subirImagen} location={location} setLocation={setLocation} subirVideo={subirVideo} setNewUrl={setNewUrl} newUrl={newUrl} setImageUpload={setImageUpload} uploadImage={uploadImage} createPublication={createPublication} newMainText={newMainText} setNewImage={setNewImage} setNewTitle={setNewTitle} setNewDescription={setNewDescription} setMainText={setMainText}  />} />
    <Route path="/history" element={<History/>} />
    <Route path="/authorities" element={<Authorities/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/publication" element={<Publication/>} />
    <Route path="/publication/:id" element={<PublicationDetail publications={publications} />} />
        <Route path="/videos" element={<Nuevaseccion imagenes={imagenes} videos={videos} />} />
    <Route path="/gallery" element={<Gallery imagenes={imagenes} />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
