import { useState, useEffect } from "react";

export default function PhotoDetails(props) {
  const [photo, setPhotoDetails] = useState({});

  const getPhotoDetails = async () => {
    const apiEndPoint = `https://api.nasa.gov/planetary/apod/${props.match.params.id}`;
    try {
      // fetch
      const response = await fetch(apiEndPoint);
      const data = await response.json();
      setPhotoDetails(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPhotoDetails();
  }, []);

  return (
    <div className="details-container">
      <img src={photo.url} alt="" />
      <div className="details">
        <h2>{photo.title}</h2>
        <h4>{photo.explanation}</h4>
        <a href={photo.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}
