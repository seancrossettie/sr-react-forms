import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/studentData';
import StudentForm from './StudentForm';

const StudentCard = ({
  firebaseKey,
  name,
  teacher,
  grade,
  setStudents
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(firebaseKey)
          .then((studentArray) => setStudents(studentArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing Selected');
    }
  };

  return (
    <Card body>
        <CardTitle tag="h5">Name: {name}</CardTitle>
        <CardText>Teacher: {teacher}</CardText>
        <CardText>Grade: {grade}</CardText>
        <Button color='danger' onClick={() => handleClick('delete')}>Delete Student</Button>
        <Button color='primary' onClick={() => handleClick('edit')}>{editing ? 'Close Form' : 'Edit Student'}</Button>
        {editing && <StudentForm
        formTitle='Edit Student'
        setStudents={setStudents}
        firebaseKey={firebaseKey}
        name={name}
        teacher={teacher}
        grade={grade}
        />}
    </Card>
  );
};

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
