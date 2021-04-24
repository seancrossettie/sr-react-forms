import React from 'react';
import firebase from 'firebase';
import StudentForm from '../studentForm';
import firebaseConfig from '../helpers/data/apiKeys';
import './App.scss';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <StudentForm />
    </div>
  );
}

export default App;
