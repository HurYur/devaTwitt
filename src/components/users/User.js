import React from 'react';
import { Col, Panel, Image, Glyphicon } from 'react-bootstrap';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: [], showActive: false};
    }
    follow(user){
        console.log(user);
    }
    render(){
        let {user} = this.props;

        return (
            <Col sm={4}>
                <Panel className="user">
                    <Panel.Heading>
                        <Image src={user.picture} className="user-img" circle />
                        {user.name.first} {user.name.last}
                    </Panel.Heading>
                    <Panel.Body>
                        {user.email}
                        {user.about}
                    </Panel.Body>
                    <Panel.Footer>
                        <div className="follow pointer" onClick={() => this.follow(user.name)}>
                            <Glyphicon glyph="bookmark" />
                            Follow
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