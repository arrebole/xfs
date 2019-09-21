import React from 'react';
import "normalize.css"
import "./styles/themes.scss"

import Home from "./views/home"

const App: React.FC = () => {
  return (
    <div className="app">
      <Home/>
    </div>
  );
}

export default App;
