import { useState, useEffect } from "react";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const apiEndPoint = `https://audubon-api.herokuapp.com/api/birds`;
    try {
      const response = await fetch(apiEndPoint); //<-- the url as a string
      const data = await response.json(); // Wait for the response and convert it to json
      setPhotos(data);
    } catch (err) {
      // Catch and log any errors to the console
      console.error(err);
    }
  };

  // call that function in your useEffect
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
