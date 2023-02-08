import { Container, Form } from 'react-bootstrap';

import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeComponent from './pages/Home';
import LatestComponent from './pages/Latest';
import TitleTypeComponent from './pages/TitleTypeComponent';
import ViewDetails from './pages/ViewDetails';
import NavBar from './component/NavBar';
import AddMovie from './pages/AddMovie';
import AddedByUser from './pages/AddedByUser';
import { useState } from 'react';



function App() {
  const [darkMode, setDarkMode] = useState(false)



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
          <Route path="latest" element={<LatestComponent theme={darkMode} />} />
          <Route path="titleType/:type" element={<TitleTypeComponent theme={darkMode} />} />
          <Route path="viewDetails/:tid" element={<ViewDetails theme={darkMode} />} />
          <Route path="addedByUser" element={<AddedByUser theme={darkMode} />} />
          <Route path="addMovie" element={<AddMovie theme={darkMode} />} />



        </Routes>

      </Container >

    </div >


  );
}

export default App;
