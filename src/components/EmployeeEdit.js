import _ from 'lodash';
import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';  

import { Card, CardSection, Button, Confirm } from './common';
import { 
    employeeUpdate, 
    employeeSave, 
    employeeClear,
    employeeDelete
} from '../actions';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() { 
        console.log(this.props.employee);
        /*
        วนลูป ดึงค่าจาก employee ที่ละตัวไปให้ action_create employee_update
        Example: 
            employee: {
                name: "aot", 
                phone: "0922422901", 
                shift: "Sunday", 
                uid: "-LD2cd6BWcGaFs3HLYvb"
            }
        action: {"type":"employee_update","payload":{"prop":"name","value":"aot"}}
        action: {"type":"employee_update","payload":{"prop":"phone","value":"0922422901"}}
        */
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        }); 
    }
 
    componentWillUnmount() {
        // clear state employee after exit scene
        this.props.employeeClear();
    }
 
    onTextPress() {
        const { phone, shift } = this.props;

        text(phone, `Your upcoming shify is on ${shift}`);
    }

    onButtonPress() {
        Keyboard.dismiss();

        const { name, phone, shift } = this.props;
        
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }   

    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });

        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
        <Card>
            <EmployeeForm />
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Save Changes
                </Button>
            </CardSection>
            
            <CardSection>
                <Button onPress={this.onTextPress.bind(this)}>
                    Text Schedule
                </Button>
            </CardSection>

            <CardSection>
                <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                    Fire Employee
                </Button>
            </CardSection>

            <Confirm
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
            >
                Are you sure you want to Delete this?
            </Confirm>
        </Card>
        );
    }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};
  
export default connect(mapStateToProps, { 
        employeeUpdate, 
        employeeSave, 
        employeeClear,
        employeeDelete
    }
)(EmployeeEdit);
