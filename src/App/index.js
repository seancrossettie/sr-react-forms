import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/studentData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents()
      .then((resp) => setStudents(resp));
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes students={students} setStudents={setStudents} />
      </Router>
    </>
  );
}

export default App;
