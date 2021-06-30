import { useState, useEffect } from "react";

export default function PhotoDetails(props) {
  const [photo, setPhotoDetails] = useState([]);

  const getPhotoDetails = async () => {
    const DETAILS_SEARCH = {
      key: process.env.REACT_APP_NASA_API_KEY,
      url: "https://api.nasa.gov/planetary/apod/", //currently url is directed at local JSON data
      api: "&api_key=",
    };

    const detailsEndPoint = `${DETAILS_SEARCH.url}?date=${props.match.params.date}${DETAILS_SEARCH.api}${DETAILS_SEARCH.key}`;

    try {
      // fetch
      const response = await fetch(detailsEndPoint);
      const data = await response.json();

      setPhotoDetails(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPhotoDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="details-container">
      <img src={photo.url} alt={photo.title} />
      <div className="details">
        <h2>{photo.title}</h2>
        <h3>{photo.copyright}</h3>
        <h4>{photo.date}</h4>
        <p>{photo.explanation}</p>
        <a href={photo.hdurl} target="_blank" rel="noopener noreferrer">
          Click to see the HD photo...
        </a>
      </div>
    </div>
  );
}
