import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { actions, comedy, documentaries, horror, originals, trending } from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={trending} title='Trending Movies' isSmall  />
      <RowPost url={actions} title='Action Movies' isSmall  />
      <RowPost url={comedy} title='Comedy Movies' isSmall  />
      <RowPost url={horror} title='Horror Movies' isSmall  />
      <RowPost url={documentaries} title='Documentaries' isSmall  />
    </div>
  );
}

export default App;