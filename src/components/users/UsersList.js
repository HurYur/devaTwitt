import React from 'react';
import { Row, Button } from 'react-bootstrap';

import {getAllUsres} from '../../helpers/requstHelper';
import User from './User';

class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: [], showActive: false};
    }
    componentDidMount() {
        this.setState({users: getAllUsres()});
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
            <div>
                <h2>Users</h2>
                <Button bsStyle="info" onClick={()=> this.setState({showActive: !showActive})}>
                    {showActive ? "Show all users" : "Show active users"}
                </Button>
                <Row>
                    {
                        users.map((user, i)=>{
                            return <User key={i} user={user} />
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default UsersList;