import React from 'react';

class NewUser extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: '', email: '', password: ''}
    }
    signup = (e) => {
        e.preventDefault();
        let isValid = true;
        if(isValid){
            this.sendToServer();
        }
    };
    sendToServer(){
        let {name, email, password } = this.state;
        let data ={
            name: name,
            email: email,
            password: password
        };
        fetch("../api/users.json", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data)
        }).then(() => {
           console.log("success");
        }).catch((err)=>{
            console.log(err);
        });
    };
    onInputChange(value, field){
        this.setState({[field]: value});
    }
    render(){
        return <form>
            <input type="text"
                   value={this.state.name}
                   placeholder="name"
                   onChange={(e) => this.onInputChange(e.target.value, "name")} />
            <input type="email"
                   value={this.state.email}
                   placeholder="email"
                   onChange={(e) => this.onInputChange(e.target.value, "email")} />
            <input type="password"
                   value={this.state.password}
                   placeholder="password"
                   onChange={(e) => this.onInputChange(e.target.value, "password")} />

            <input type="submit"
                   onClick={this.signup}/>
        </form>
    }
}

export default NewUser;