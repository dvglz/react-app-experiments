import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Default state is 'true' for green background
  const [isGreen, setIsGreen] = useState(true);

  useEffect(() => {
    function updateMetaTag(color) {
      const metaTag = document.getElementById('theme-color-meta');
      if (metaTag) {
        metaTag.setAttribute('content', color);
        console.log(`Meta tag updated to ${color}`);
      } else {
        console.log('Meta tag not found');
      }
    }

    function updateBackgroundColor(className) {
      const appElement = document.getElementsByClassName('App')[0];
      if (appElement) {
        appElement.className = `App ${className}`;
        console.log(`Background class changed to ${className}`);
      } else {
        console.log('App element not found');
      }
    }

    const color = isGreen ? '#086440' : '#373737'; // Green: #086440, Black: #373737
    const className = isGreen ? 'green-background' : 'black-background';

    updateMetaTag(color);
    updateBackgroundColor(className);
  }, [isGreen]);

  return (
    <div className="App">
      <h1>React Safari Top Bar Color Example</h1>
      <button onClick={() => setIsGreen(!isGreen)}>
        Switch to {isGreen ? 'Black' : 'Green'} Background
      </button>
    </div>
  );
}

export default App;