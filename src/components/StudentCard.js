import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/studentData';
import StudentForm from './StudentForm';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const StudentCard = ({
  firebaseKey,
  name,
  teacher,
  grade,
  setStudents
}) => {
  const [editing, setEditing] = useState(false);
  const classes = useStyles();

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
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Name: {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Teacher: {teacher}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Grade: {grade}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGroup aria-label="outlined primary button group">
          <Button variant="contained" color="secondary" onClick={() => handleClick('delete')}>Delete Student</Button>
          <Button variant="contained" color="primary" onClick={() => handleClick('edit')}>{editing ? 'Close Form' : 'Edit Student'}</Button>
        </ButtonGroup>
      </CardActions>
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
