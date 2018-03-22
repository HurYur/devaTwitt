import React from 'react';
import {Row, Col, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNewUser } from '../../actions/usersActions';
import {validateName, validateEmail, validatePassword} from '../../helpers/validationHelper';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: '', email: '', password: ''}
    }
    renderFieldGroup = (fieldName, type, label, validationResult) =>{
        return (
            <FormGroup controlId={fieldName}
                       validationState={validationResult ? 'error' : 'success'}
        >
            <ControlLabel>{label}</ControlLabel>
            <FormControl type={type}
                         placeholder={label}
                         value={this.state[fieldName]}
                         onChange={(e) => this.onInputChange(e.target.value, fieldName)} />
            <div className="error">{validationResult}</div>
        </FormGroup>
        )
    };
    signup = (e) => {
        e.preventDefault();
        let {name, email, password } = this.state;
        let hasError = validateName(name) + validateEmail(email) + validatePassword(password);

        if(!hasError){
            let user ={
                name: name,
                email: email,
                password: password
            };
            this.props.addNewUser(user);
            this.props.history.push("/login");
        }

    };

    onInputChange(value, field){
        this.setState({[field]: value});
    }
    render(){
        const {name, email, password} = this.state;
        return  (<Row><Col className="user-register-container" sm={6} smOffset={3}>
            <Form horizontal>
                {this.renderFieldGroup("name","text","Name",validateName(name))}
                {this.renderFieldGroup("email","email","Email",validateEmail(email))}
                {this.renderFieldGroup("password","password","Password",validatePassword(password))}
                <FormGroup>
                    <Button type="submit"  bsStyle="info" onClick={this.signup}>Sign up</Button>
                </FormGroup>
            </Form>
        </Col></Row>
    )}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ addNewUser }, dispatch)
    }
}

export default connect(mapDispatchToProps, {addNewUser})(SignUp);