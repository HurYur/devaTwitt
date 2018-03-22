import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getAllUsres } from '../../helpers/requstHelper';
import { fetchUsers } from '../../actions/usersActions';
import User from './User';

class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: [], showActive: false};
    }
    updateUsers = ()=>{
        this.setState({users: getAllUsres()});
    };
    componentWillMount() {
        this.props.fetchUsers();
    }
    render(){
        let {showActive} = this.state;

        let users = [];
        if(showActive){
            users = this.props.users.filter((user)=> user.isActive);
        }else{
            users = this.props.users;
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

function mapStateToProps(state){
    return {users: state.items.users}
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);