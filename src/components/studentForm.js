import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import { addStudent, updateStudent } from '../helpers/data/studentData';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

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

  const classes = useStyles();

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
        <FormGroup className={classes.root} onSubmit={handleSubmit} autoComplete='off'>
          <h2>{formTitle}</h2>
          <TextField name='name' type='text' label='Name' value={student.name} onChange={handleInputChange} required />
          <TextField name='teacher' type='text' label='Teacher' value={student.teacher} onChange={handleInputChange} required />
          <TextField name='grade' type='number' label='Grade' value={student.grade} onChange={handleInputChange} required />
          <br />
          <Button type='submit'>Submit</Button>
        </FormGroup>
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
