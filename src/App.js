import { Container, Form } from 'react-bootstrap';

import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomeComponent from './pages/Home';
import LatestComponent from './pages/Latest';
import TitleTypeComponent from './pages/TitleTypeComponent';
import ViewDetails from './pages/ViewDetails';
import NavBar from './component/NavBar';
import AddMovie from './pages/AddMovie';
import AddedByUser from './pages/AddedByUser';
import { useEffect, useState } from 'react';
import MovieComponent from './component/MovieComponent'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [myStyle, setMystyle] = useState({
    color: 'red',
    backgroundColor: 'white',

  })



  return (
    <div className="App">



      <NavBar button={
        <Form.Check style={{
          color: 'white', marginTop: "10px",
          marginLeft: '20px'
        }}
          type="switch"
          onChange={(e) => {
            console.log("check", e.target.checked);
            setDarkMode(e.target.checked)
          }}
          label="Night mode"
          checked={darkMode}
        />} />


      {/* button={<Button onClick={() => { setDarkMode(!darkMode) }} class='btn btn-warning'>Night mode {darkMode ? 'OFF' : 'ON'}</Button>} /> */}

      <Container fluid className={darkMode ? 'dark' : 'light'}>
        <Routes>
          <Route path="/" element={<HomeComponent theme={darkMode} />} />
          <Route path="latest" element={<LatestComponent />} />
          <Route path="titleType/:type" element={<TitleTypeComponent />} />
          <Route path="viewDetails/:tid" element={<ViewDetails />} />
          <Route path="addedByUser" element={<AddedByUser />} />
          <Route path="addMovie" element={<AddMovie />} />



        </Routes>

      </Container >

    </div >


  );
}

export default App;
