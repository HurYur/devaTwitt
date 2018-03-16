import React from 'react';
import { Row, Button } from 'react-bootstrap';

import {getAllUsres} from '../../helpers/requstHelper';
import User from './User';

class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: [], showActive: false};
    }
    updateUsers = ()=>{
        this.setState({users: getAllUsres()});
    };
    componentDidMount() {
        this.updateUsers();
    }
    render(){
        let {showActive} = this.state;
        let users = [];
        if(showActive){
            users = this.state.users.filter((user)=> user.isActive);
        }else{
            users = this.state.users;
        }

        return (
            <div className="users">
                <h2>{showActive ? "Active Users" : "All Users"}</h2>
                <Button bsStyle="info" onClick={()=> this.setState({showActive: !showActive})}>
                    {showActive ? "Show all users" : "Show active users"}
                </Button>
                <Row>
                    {
                        users.map((user, i)=>{
                            return <User key={i} user={user} onFollow={()=> this.updateUsers()} />
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default UsersList;