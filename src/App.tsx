import React from 'react';
import './App.css';
import Header from "./comp/Header";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

function App() {
  return (
    <div className="App">
			<Header />
    </div>
  );
}

export default App;
