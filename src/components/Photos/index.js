import { useState } from "react";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  return (
    <div>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
      </ul>
    </div>
  );
}
