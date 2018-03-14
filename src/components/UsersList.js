import React from 'react';

import loadData from '../api/fetchData';

class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: []};
    }
    componentDidMount() {
        loadData("../api/users.json", {'method': 'get'})
            .then((users)=>{
                this.setState({users: users})
            });
    }
    render(){

        return (
            <ul>
                {
                    this.state.users.map((user, i)=>{
                        return <li key={i}>{user.email}</li>
                    })
                }
            </ul>
        )
    }
}

export default UsersList;