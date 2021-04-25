import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import StudentForm from '../components/studentForm';
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
      <StudentForm formTitle='Add a Student'/>
      <hr />
      {students.map((studentInfo) => (
        <Card body key={studentInfo.firebaseKey}>
        <CardTitle tag="h5">Name: {studentInfo.name}</CardTitle>
        <CardText>Teacher: {studentInfo.teacher}</CardText>
        <CardText>Grade: {studentInfo.grade}</CardText>
        <Button onClick={() => console.warn(`${studentInfo.name}'s teacher is ${studentInfo.teacher}`)}> Print Student </Button>
    </Card>
      ))}
  </div>
  );
}

export default App;
