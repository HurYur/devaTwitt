import React from 'react';

class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: []};
    }
    loadUsers(){
        fetch("../api/users.json", {'method': 'get'})
            .then((response) => {
                return response.json();
            })
            .then((result) =>{
                this.setState({users: result});
            })
    }
    componentDidMount() {
        this.loadUsers();
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