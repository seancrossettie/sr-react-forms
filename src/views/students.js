import firebase from 'firebase';
import React from 'react';
import PropTypes from 'prop-types';
import StudentCard from '../components/StudentCard';
import firebaseConfig from '../helpers/data/apiKeys';

firebase.initializeApp(firebaseConfig);

function Students({ students, setStudents }) {
  return (
    <div className='App'>
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

Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default Students;
