import { useState, useEffect } from "react";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const apiEndPoint = `https://api.nasa.gov/planetary/apod?count=25&api_key=wmnjZhcttUv5tC9H3cXKGM6y2vUApSgZUaXXJFww`;
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
          <div className="card">
            <div className="card-image">
              <img
                src="https://apod.nasa.gov/apod/image/0703/3772-84mcnaught_druckmuller720.jpg"
                alt="Three Galaxies and a Comet"
              />
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
