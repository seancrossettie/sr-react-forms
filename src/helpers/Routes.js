import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddStudents from '../views/AddStudents';
import Home from '../views/Home';
import Students from '../views/Students';

export default function Routes({ students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/students'
        component={() => <Students students={students} setStudents={setStudents} />}
        />
        <Route exact path='/add-students/' component={() => <AddStudents setStudents={setStudents} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};
