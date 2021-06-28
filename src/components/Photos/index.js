import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Photos() {
  const NASA_SEARCH = {
    key: process.env.REACT_APP_NASA_API_KEY,
    url: "https://api.nasa.gov/planetary/apod",
    count: "?count=75",
    api: "&api_key=",
  };
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const apiEndPoint = `${NASA_SEARCH.url}${NASA_SEARCH.count}${NASA_SEARCH.api}${NASA_SEARCH.key}`;
    console.log(apiEndPoint);
    // const apiKey = `?api_key=wmnjZhcttUv5tC9H3cXKGM6y2vUApSgZUaXXJFww`;
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
  }, []);
  return (
    <section className="container">
      {photos.map((photo) => {
        return (
          <Link to={`/details/${photo.title}`} key={photo.title}>
            <div className="card">
              <div className="card-image">
                <img src={photo.url} alt="Placeholder Text" />
              </div>
              <div className="card-title">
                <h3>{photo.title}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
