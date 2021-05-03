import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getStudentData } from '../helpers/data/studentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getStudentData(firebaseKey)
      .then(setStudent);
  }, []);

  return (
    <div>
        <h1>Single Student</h1>
        <h3>{student.name}</h3>
        <h3>{student.teacher}</h3>
        <h3>{student.grade}</h3>
    </div>
  );
}
