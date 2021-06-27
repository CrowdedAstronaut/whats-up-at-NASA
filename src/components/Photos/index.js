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
    <div>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
      </ul>
    </div>
  );
}
