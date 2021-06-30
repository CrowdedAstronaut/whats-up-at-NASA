import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactPlayer } from "react-player";

export default function Photos() {
  const NASA_SEARCH = {
    key: process.env.REACT_APP_NASA_API_KEY,
    url: "https://api.nasa.gov/planetary/apod",
    count: "?count=24",
    api: "&api_key=",
  };
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const apiEndPoint = `${NASA_SEARCH.url}${NASA_SEARCH.count}${NASA_SEARCH.api}${NASA_SEARCH.key}`;

    try {
      const response = await fetch(apiEndPoint);
      const data = await response.json(); // Wait for the response and convert it to json
      setPhotos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line
  }, []);
  return photos.length > 0 ? (
    <section className="container">
      {photos.length &&
        photos.map((photo) => {
          return (
            <Link to={`/details/${photo.date}`} key={photo.date}>
              <div className="card">
                <div className="card-image">
                  {photo.media_type === "image" ? (
                    <img src={photo.url} alt={photo.title} />
                  ) : (
                    <ReactPlayer url={photo.url} />
                  )}
                </div>
                <div className="card-title">
                  <h3>{photo.title}</h3>
                  <p></p>
                </div>
              </div>
            </Link>
          );
        })}
    </section>
  ) : (
    <h1>loading...</h1>
  );
}

{
  /* <img src="https://apod.nasa.gov/apod/image/1210/Helix_BiColour_Finalpugh1022c.jpg" alt=This is the Helix Nebula /> */
}
