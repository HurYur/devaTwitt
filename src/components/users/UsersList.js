import React from 'react';
import { Row, Button } from 'react-bootstrap';

import loadData from '../../api/fetchData';
import User from './User';

class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: [], showActive: false};
    }
    componentDidMount() {
        loadData("../api/users.json", {'method': 'get'})
            .then((users)=>{
                this.setState({users: users})
            });
    }
    render(){
        let {users, showActive} = this.state;

        return (
            <div>
                <h2>Users</h2>
                <Button bsStyle="info" onClick={()=> this.setState({showActive: !showActive})}>
                    {showActive ? "Show all users" : "Show active users"}
                </Button>
                <Row>
                    {
                        //@todo make refactoring
                        showActive
                            ? users.filter((user)=> user.isActive).map((user, i) =>{
                                return <User key={i} user={user} />
                            })
                            : users.map((user, i)=>{
                                return <User key={i} user={user} />
                            })
                    }
                </Row>
            </div>
        )
    }
}

export default UsersList;