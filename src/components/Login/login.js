import React from 'react';
import {Row, Col, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userOnline } from '../../actions/usersActions';
import {validateEmail, validatePassword} from '../../helpers/validationHelper';
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
        let {email, password, name, users: data} = this.state;//users renamed to data
        console.log(data);
        let userData = [];
        data.forEach(function (data) {
            userData.push({
                email: data.email,
                password: data.password,
                name: data.name
            });
        });

        let match = false;

        userData.forEach(function (data) {
            if (data.email === email && data.name === name && data.password === password) {
                match = true;
            }
        });
        if(match){
            alert('Successful');
            let user ={
                email: email,
                isActive: true
            };
            this.props.userOnline(user);
            this.props.history.push("/users");
        } else{
            alert('Try again');
        }
    };

    onInputChange(value, field){
        this.setState({[field]: value});
    }
    render(){
        const {email, password} = this.state;
        return  (<Row>
                <Col className="user-register-container" sm={6} smOffset={3}>
                    <h2>Pls log in!</h2>
                    <Form horizontal>
                        {this.renderFieldGroup("name","text","Name")}
                        {this.renderFieldGroup("email","email","Email",validateEmail(email))}
                        {this.renderFieldGroup("password","password","Password",validatePassword(password))}
                        <FormGroup>
                            <Button type="submit"  bsStyle="info" onClick={this.signin}>Login</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        )}
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ userOnline }, dispatch)
    }
}
export default connect(mapDispatchToProps, {userOnline})(login);