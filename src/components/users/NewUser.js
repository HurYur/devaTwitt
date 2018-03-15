import React from 'react';
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

import {requestPut} from '../../helpers/requstHelper';
import {validateName, validateEmail, validatePassword} from '../../helpers/validationHelper';

class NewUser extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: '', email: '', password: '', isValid: false}
    }
    renderFieldGroup = (fieldName, type, label, validation) =>{
        return (
            <FormGroup controlId={fieldName}
                       validationState={validation ? 'success' : 'error'}
        >
            <ControlLabel>{label}</ControlLabel>
            <FormControl type={type}
                         placeholder={label}
                         value={this.state[fieldName]}
                         onChange={(e) => this.onInputChange(e.target.value, fieldName)} />
        </FormGroup>
        )
    };
    signup = (e) => {
        e.preventDefault();
        let {name, email, password, isValid } = this.state;
        //@remove setState
        this.setState({ isValid: validateName(name) && validateEmail(email) && validatePassword(password) });
        let data ={
            name: name,
            email: email,
            password: password,
            regisredDate: new Date()
        };
        if (isValid){
            requestPut('devaTwitt.users', data);
        }
    };

    onInputChange(value, field){
        this.setState({[field]: value});
    }
    render(){
        const {name, email, password} = this.state;
        return  (<Form horizontal>

            {this.renderFieldGroup("name","text","Name",validateName(name))}
            {this.renderFieldGroup("email","email","Email",validateEmail(email))}
            {this.renderFieldGroup("password","password","Password",validatePassword(password))}

            <FormGroup>
                <Button type="submit"  bsStyle="info" onClick={this.signup}>Sign up</Button>
            </FormGroup>
        </Form>
    )}
}

export default NewUser;