import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import Home from './pages/Home';
import Education from './pages/Education';
import Dev from './pages/Dev';
import Maps from './pages/Maps';
// import Leadership from './pages/Leadership';
// import Articles from './pages/Articles';
// import Projects from './pages/Projects';
import Error from './components/Error';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <div className="App">
          {/* List Possible Page Routes Here */}
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="/maps" element={<Maps />} />
            {/*
            <Route path="/projects" element={< Projects />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/articles" element={<Articles />} />
            */}
            <Route path="*" element={< Error />} />
          </Routes>
        </div>
      </>
    )
  }
}

export default App;