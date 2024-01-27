import "./App.css";

import React, {useState} from "react"
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"



const App = ()=> {
  const [progress, setProgress] = useState(0)
    return (
      <>
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />

      <Navbar/>
      <Routes>
        <Route exact path="/" element={<News key='general' setProgress={setProgress} category="general"/>}></Route>
        <Route exact path="/entertainment" element={<News key='entertainment' setProgress={setProgress} category="entertainment"/>}></Route>
        <Route exact path="/business" element={<News key='business' setProgress={setProgress} category="business"/>}></Route>
        <Route exact path="/health" element={<News key='health' setProgress={setProgress} category="health"/>}></Route>
        <Route exact path="/science" element={<News key='science' setProgress={setProgress} category="science"/>}></Route>
        <Route exact path="/sports" element={<News key='sports' setProgress={setProgress} category="sports"/>}></Route>
        <Route exact path="/technology" element={<News key='technology' setProgress={setProgress} category="technology"/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
}

export default App