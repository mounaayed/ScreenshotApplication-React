
import './App.css';
import React from 'react';
import Screenshots from './Screenshots';
import ScreenshotControl from './components/ScreenshotControl';
function App() {
  return (
    <div className="App">
      <ScreenshotControl />
      <Screenshots userId="user1" />

    </div>
  );
}

export default App;
