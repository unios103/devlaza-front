import React from 'react';
import './App.css';
import Header from "./comp/Header";

import ProjectListView from "./comp/ProjectListView"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

function App() {
  return (
    <div className="App">
			<Header />
			<ProjectListView
				name="うーんちうーんちカスカスカス"
				tag_id={["1","2","3","4","5","6","7"]}
				summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			/>
    </div>
  );
}

export default App;
