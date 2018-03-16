import React from 'react';
import {Row, Col} from 'react-bootstrap'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    componentDidMount() {
    }
    render(){
        return (
            <Row>
                <Col sm={8} smOffset={2}>
                    <h2>Home</h2>
                </Col>
            </Row>
        )}
}

export default Home;