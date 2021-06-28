import { useState, useEffect } from "react";

export default function PhotoDetails(props) {
  const [photo, setPhotoDetails] = useState([]);

  const getPhotoDetails = async () => {
    const NASA_SEARCH = {
      key: process.env.REACT_APP_NASA_API_KEY,
      url: "../../data/data.json", //currently url is directed at local JSON data
      api: "&api_key=",
    };
    const detailsEndPoint = `${NASA_SEARCH.url}${props.match.params.title}`; //Trying to access params of local JSON data before making real API call
    try {
      // fetch
      const response = await fetch(detailsEndPoint);
      const data = await response.json();
      console.log(data);
      setPhotoDetails(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPhotoDetails();
  }, []);

  console.log(photo);
  return (
    <div className="details-container">
      <img src="https://apod.nasa.gov/apod/image/9805/ring_hst.jpg" alt="" />
      <div className="details">
        <h3> Title </h3>
        <p>
          "It looked like a ring on the sky. Hundreds of years ago astronomers
          noticed a nebula with a most unusual shape. Now known as M57 or NGC
          6720, the gas cloud became popularly known as the Ring Nebula. It is
          now know to be a planetary nebula, a gas cloud emitted at the end of a
          Sun-like star's existence. As one of the brightest planetary nebula on
          the sky, the Ring Nebula can be seen with a small telescope in the
          constellation of Lyra. The Ring Nebula lies about 4000 light years
          away, and is rough....."
        </p>
        <a
          href="https://apod.nasa.gov/apod/image/9805/ring_hst.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

/* <img src={photo.url} alt="" /> */

//   /* <div className="details">
// <h3>{photo.title}</h3>
// <p>{photo.explanation}</p>
// <a href={photo.url} target="_blank" rel="noopener noreferrer">
//   Read More
// </a> */
// }
