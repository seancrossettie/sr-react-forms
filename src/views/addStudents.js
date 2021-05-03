import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../components/StudentForm';
import '../styles/index.scss';

function AddStudents({ setStudents }) {
  return (
    <>
      <StudentForm
      formTitle='Add a Student'
      setStudents={setStudents}
      />
    </>
  );
}

AddStudents.propTypes = {
  setStudents: PropTypes.func.isRequired
};

export default AddStudents;
