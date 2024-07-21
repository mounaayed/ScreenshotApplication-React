import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Screenshots({ userId }) {
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/screenshots/${userId}`)
      .then(response => {
        setScreenshots(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId]);

  return (
    <div>
      <h1>Screenshots</h1>
      {screenshots.map(screenshot => (
        <img key={screenshot._id} src={`data:image/png;base64,${screenshot.image}`} alt="screenshot" />
      ))}
    </div>
  );
}

export default Screenshots;
