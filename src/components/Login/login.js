import React from 'react';
import {Row, Col, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import {validateEmail} from '../../helpers/validationHelper';
import { getAllUsres } from "../../helpers/requstHelper";

class login extends React.Component{
    constructor(props){
        super(props);
        this.state = {users: []};
    }
    loadUsers = () => {
        this.setState({users: getAllUsres()});
    };
    componentDidMount() {
        this.loadUsers();
    }
    renderFieldGroup = (fieldName, type, label, validationResult) =>{
        return (
            <FormGroup controlId={fieldName}
                       validationState={validationResult ? 'error' : 'success'} >
                <ControlLabel>{label}</ControlLabel>
                <FormControl type={type}
                             placeholder={label}
                             value={this.state[fieldName]}
                             onChange={(e) => this.onInputChange(e.target.value, fieldName)} />
                <div className="error">{validationResult}</div>
            </FormGroup>
        )
    };
    signin = (e) => {
        e.preventDefault();
        let {email, name, users: data} = this.state;//users renamed to data

        let userData = [];
        data.forEach(function (data) {
            userData.push({
                email: data.email,
                name: data.name
            });
        });

        let match = false;

        userData.forEach(function (data) {
            if (data.email === email && data.name === name) {
                match = true;
            }
        });
        if(match){
            this.props.history.push("/users");
        }
    };

    onInputChange(value, field){
        this.setState({[field]: value});
    }
    render(){

        const {email} = this.state;
        return  (<Row>
                <Col className="user-register-container" sm={6} smOffset={3}>
                    <Form horizontal>
                        {this.renderFieldGroup("name","text","Name")}
                        {this.renderFieldGroup("email","email","Email",validateEmail(email))}
                        <FormGroup>
                            <Button type="submit"  bsStyle="info" onClick={this.signin}>Sign in</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        )}
}

export default login;