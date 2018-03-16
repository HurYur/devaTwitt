import React from 'react';
import { Col, Panel, Image, Glyphicon } from 'react-bootstrap';


import {getCurrentUser} from "../../helpers/storageHelper";
import {followUser} from "../../helpers/requstHelper";

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: [], showActive: false};
    }
    follow(){
        followUser(this.props.user.id);
        this.props.onFollow();
    }
    render(){
        let {user} = this.props;
        let loggedUser = getCurrentUser();
        let isFollowing = loggedUser.followers.indexOf(user.id) >= 0;

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
                        { user.id  !== loggedUser.id && <div className={isFollowing ? "following " : "follow pointer"}
                                                             onClick={() => this.follow()}>
                            <Glyphicon glyph="bookmark" />
                            { isFollowing ? "Followed" : "Follow" }
                        </div>}
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