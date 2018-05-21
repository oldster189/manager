import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  EMPLOYEE_UPDATE, 
  EMPLOYEE_CREATE, 
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }; 
};

export const employeeCreate = ({ name, phone, shift }) => { 
  const { currentUser } = firebase.auth();

  // schema format /users/userId/employees
  const employees = firebase.database().ref(`/users/${currentUser.uid}/employees`);
  
  return (dispatch) => {
    employees.push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.main();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  const employees = firebase.database().ref(`/users/${currentUser.uid}/employees`);
 
  return (dispatch) => {
    employees.on('value', snapshot => {
      dispatch({
        type: EMPLOYEES_FETCH_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
};
