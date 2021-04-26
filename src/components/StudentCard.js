import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/studentData';

const StudentCard = ({
  firebaseKey,
  name,
  teacher,
  grade,
  setStudents
}) => {
  const handleClick = () => {
    deleteStudent(firebaseKey)
      .then((studentArray) => setStudents(studentArray));
  };

  return (
    <Card body>
        <CardTitle tag="h5">Name: {name}</CardTitle>
        <CardText>Teacher: {teacher}</CardText>
        <CardText>Grade: {grade}</CardText>
        <Button color='danger' onClick={handleClick}>Delete Student</Button>
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
