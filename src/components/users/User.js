import React from 'react';
import { Col, Panel, Image, Glyphicon } from 'react-bootstrap';
import {getCurrentUser} from "../../helpers/storageHelper";


let loggedUser = getCurrentUser();
class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: [], showActive: false};
    }
    follow(){
        const {user} = this.props;
        // unfollow
        if (user.followers.indexOf(loggedUser.id) >= 0){
            user.followers.splice(user.followers.indexOf(loggedUser.id), 1);
        }
        //follow
        else {
            user.followers.push(loggedUser.id);
        }

    }
    render(){
        let {user} = this.props;

        return (
            <Col sm={6}>
                <Panel className="user">
                    <Panel.Heading>
                        <Image src={user.photo} className="user-img" circle />
                        {user.name}
                    </Panel.Heading>
                    <Panel.Body>
                        {user.about}
                    </Panel.Body>
                    <Panel.Footer>
                        <div className="follow pointer" onClick={() => this.follow()}>
                            <Glyphicon glyph="bookmark" />
                            {user.followers.indexOf(loggedUser.id) >= 0 ? "Followed" : "Follow" }
                        </div>
                        <div className="email">
                            <a href={"mailto:" + user.email}>{user.email}</a>
                        </div>
                        <div className="activity">
                            {user.isActive && <Glyphicon glyph="signal" />}
                        </div>
                    </Panel.Footer>
                </Panel>
            </Col>
        )
    }
}

export default User;