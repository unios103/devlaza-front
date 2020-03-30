import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from "./comp/Header";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import * as Pages from "./comp/pages"

library.add(fas, far)

function App() {
  return (
    <div className="App">
			<Header />
			<div className="app-content-wrapper">
				<Router>
					<Route exact path="/" component={Pages.MainPage} />
				</Router>
			</div>
    </div>
  );
}

export default App;
