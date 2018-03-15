import React from 'react';
import { Button } from 'react-bootstrap';

import loadData from '../../api/fetchData';

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
            <ul>
                <Button bsStyle="info" onClick={()=> this.setState({showActive: !showActive})}>
                    {showActive ? "Show all users" : "Show active users"}
                </Button>
                {
                    //@todo make refactoring
                    showActive
                        ? users.filter((user)=> user.isActive).map((user, i) =>{
                            return <li key={i}>{user.email}</li>
                        })
                        : users.map((user, i)=>{
                            return <li key={i}>{user.email}</li>
                        })
                }
            </ul>
        )
    }
}

export default UsersList;