import { useState, useEffect } from "react";

export default function Photos() {
  const NASA_SEARCH = {
    // process.env.NASA_API_KEY
    key: "wmnjZhcttUv5tC9H3cXKGM6y2vUApSgZUaXXJFww",
    url: "https://api.nasa.gov/planetary/apod",
    count: "?count=25",
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
          <div key={photo.title} className="card">
            <div className="card-image">
              <img src={photo.url} alt="Placeholder Text" />
            </div>
            <div className="card-title">
              <h3>Three Galaxies and a Comet</h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}
