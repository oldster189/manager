import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponet = () => {
  return (
      <Router>
        <Stack key="root" > 
                <Scene key="login" component={LoginForm} title="Please Login" />
            
                <Scene 
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees" 
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                <Scene 
                  key="employeeEdit" 
                  component={EmployeeEdit}  
                  onExit={() => {}}
                  title="Edit Employee" 
                /> 
        </Stack>
      </Router> 
  );
};

export default RouterComponet;
