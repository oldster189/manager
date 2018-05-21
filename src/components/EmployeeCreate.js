import React, { Component } from 'react';  
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions'; 
import { Card, CardSection, Button } from './common'; 
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        Keyboard.dismiss();
        
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift });
    }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
                Create
            </Button>
        </CardSection>
      </Card>
    );
  }
} 

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
