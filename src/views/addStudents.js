import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../components/StudentForm';

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
