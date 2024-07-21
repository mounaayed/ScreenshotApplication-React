// src/components/ScreenshotControl.js
import React, { useEffect, useState } from 'react';

const ScreenshotControl = () => {
  const [ipcRendererAvailable, setIpcRendererAvailable] = useState(false);

  useEffect(() => {
    if (window.ipcRenderer) {
      setIpcRendererAvailable(true);
    } else {
      setIpcRendererAvailable(false);
      console.error('ipcRenderer is not available');
    }
  }, []);

  const handleStart = () => {
    if (ipcRendererAvailable) {
      window.ipcRenderer.send('start-capture');
    } else {
      console.error('ipcRenderer is not available');
    }
  };

  const handleStop = () => {
    if (ipcRendererAvailable) {
      window.ipcRenderer.send('stop-capture');
    } else {
      console.error('ipcRenderer is not available');
    }
  };

  return (
    <div>
      <h1>Screenshot Control</h1>
      <button onClick={handleStart}>Start Capture</button>
      <button onClick={handleStop}>Stop Capture</button>
    </div>
  );
};

export default ScreenshotControl;
