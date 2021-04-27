import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/students.json`)
    .then((response) => resolve((Object.values(response.data || {}))))
    .catch((error) => reject(error));
});

const addStudent = (student) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/students.json`, student)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/students/${response.data.name}.json`, body)
        .then(() => {
          getStudents().then((studentsArray) => resolve(studentsArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteStudent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/students/${firebaseKey}.json`)
    .then(() => getStudents()
      .then((array) => resolve(array)))
    .catch((error) => reject(error));
});

const updateStudent = (student) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/students/${student.firebaseKey}.json`, student)
    .then(() => getStudents().then(resolve))
    .catch((error) => reject(error));
});
export {
  addStudent, getStudents, deleteStudent, updateStudent
};
