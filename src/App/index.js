import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import StudentCard from '../components/StudentCard';
import StudentForm from '../components/StudentForm';
import firebaseConfig from '../helpers/data/apiKeys';
import { getStudents } from '../helpers/data/studentData';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents()
      .then((resp) => setStudents(resp));
  }, []);

  return (
    <div className='App'>
      <StudentForm
      formTitle='Add a Student'
      setStudents={setStudents}
      />
      <hr />
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          firebaseKey={studentInfo.firebaseKey}
          name={studentInfo.name}
          teacher={studentInfo.teacher}
          grade={Number(studentInfo.grade)}
          setStudents={setStudents}
        />
      ))}
  </div>
  );
}

export default App;
