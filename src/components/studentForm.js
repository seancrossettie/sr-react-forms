import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addStudent, updateStudent } from '../helpers/data/studentData';

const StudentForm = ({
  formTitle,
  setStudents,
  name,
  teacher,
  grade,
  firebaseKey
}) => {
  const [student, setStudent] = useState({
    name: name || '',
    teacher: teacher || '',
    grade: grade || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.firebaseKey) {
      updateStudent(student)
        .then((array) => setStudents(array));
    } else {
      addStudent(student)
        .then((array) => setStudents(array));
    }
  };

  return (
      <div className='student-form'>
        <form
        onSubmit={handleSubmit}
        id='add-student-form'
        autoComplete='off'
        >
        <h2>{formTitle}</h2>
        <label>Name: </label>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={student.name}
          onChange={handleInputChange}
          required
        ></input>
        <label>Teacher: </label>
        <input
          name='teacher'
          type='text'
          placeholder='Teacher'
          value={student.teacher}
          onChange={handleInputChange}
          required
          ></input>
        <label>Grade: </label>
        <input
          name='grade'
          type='number'
          placeholder='Grade'
          value={student.grade}
          onChange={handleInputChange}
          required
        ></input>
        <button type='submit'>Submit</button>
        </form>
      </div>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func.isRequired,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number,
  firebaseKey: PropTypes.string
};

export default StudentForm;
