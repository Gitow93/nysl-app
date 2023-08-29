import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Template from "./Template";
import "./../assets/css/gamePicture.css";
import { storage } from "./../service/firebase";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "./../service/firebase";
import { ref, set, onValue } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const GamePictures = () => {
  const { id } = useParams();
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    readFromDatabase();
  }, [id]);

  const uploadPicture = (event) => {
    setError(null); 
    const file = event.target.files[0];
    const pictureId = uuidv4();
    const pictureRef = storageRef(
      storage,
      `/pictures/game-${id}/picture-${pictureId}`
    );

    const uploadTask = uploadBytesResumable(pictureRef, file);
    uploadTask.on("state_changed", null, (error) => {
      setError("Error uploading picture: " + error.message);
    }, () => {
      debugger;
      getDownloadURL(uploadTask.snapshot.ref)
        .then((url) => {
          savePictureUrl(url, pictureId);
        })
        .catch((error) => {
          setError("Error getting download URL: " + error.message);
        });
    });
  };

  const savePictureUrl = (url, pictureId) => {
    setError(null);
    set(ref(db, `/pictures/game-${id}/picture-${pictureId}`), url)
      .then(() => {
        readFromDatabase();
      })
      .catch((error) => {
        setError("Error saving picture URL: " + error.message);
      });
  };

  const readFromDatabase = () => {
    setError(null);
    const query = ref(db, `pictures/game-${id}`);
    onValue(query, (snapshot) => {
      const data = snapshot.val();
      const formattedPictures = formatPictures(data);
      setPictures(formattedPictures); 
      debugger;
    }, (error) => {
      setError("Error reading from database: " + error.message);
    });
  };;

  const formatPictures = (pictures) => {
    const picturesKeys = pictures ? Object.keys(pictures) : [];
    const formattedPictures = picturesKeys.map((pictureKey) => pictures[pictureKey]);
    return formattedPictures;
  };

  const handleGoBack = () => {
    navigate(-1);
  }  

  return (
    <>
      <Template title="Game Pictures">
        <div>
          <form>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={uploadPicture}
            />
          </form>
          {error && <p>Error: {error}</p>}
        </div>
        <div>
          {pictures.map((picture, index) => (
            <img className="game__picture" key={index} src={picture} alt="" />
          ))}
        </div>

        <div className="links__container">
          <button className="link__button" onClick={handleGoBack}>Go Back</button>
          <button className="link__button"><Link to="/games">Games</Link></button>
          <button className="link__button"><Link to={`/messages/${id}`}>Messages</Link></button>
        </div>

      </Template>
    </>
  );
};

export default GamePictures;
