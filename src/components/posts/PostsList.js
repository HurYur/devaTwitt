import React from 'react';
import {Col, Panel, Button, Image} from 'react-bootstrap'

import Post from './Post';
import loadData from "../../api/fetchData";

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    componentDidMount() {
        loadData("../api/posts.json", {'method': 'get'})
            .then((posts)=>{
                this.setState({posts: posts})
            });
    }
    render(){
        return (
            <Col xs={12}>
                <Panel>
                    <Panel.Heading>
                        <Image src="https://robohash.org/CSS.png?set=set1&size=50x50" circle />
                    </Panel.Heading>
                    <Panel.Body><textarea defaultValue="share the world something new" /></Panel.Body>
                    <Panel.Footer>
                        <Button bsStyle="info">Send</Button>
                    </Panel.Footer>
                </Panel>
                {
                    this.state.posts.map((post, i)=>{
                        return (
                            <Post key={i} post={post} />
                        )
                    })
                }
            </Col>
        )}
}

export default PostList;