import React from 'react';
import {Row, Col, Panel, Image} from 'react-bootstrap'

import Post from './Post';
import TextInput from '../shared/TextInput'
import loadData from "../../api/fetchData";

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    sendPost = (newPostText) => {
        console.log(newPostText);
    };
    componentDidMount() {
        loadData("../api/posts.json", {'method': 'get'})
            .then((posts)=>{
                this.setState({posts: posts})
            });
    }
    render(){
        return (
            <Row>
                <Col sm={8} smOffset={2}>
                    <Panel className="post">
                        <Panel.Heading>
                            <Image src="https://robohash.org/CSS.png?set=set1&size=50x50" circle />
                        </Panel.Heading>
                        <Panel.Body>
                            <TextInput messageCharactersLimit={200}
                                       onSend={(newPostText)=> this.sendPost(newPostText)}/>
                        </Panel.Body>
                    </Panel>
                    {
                        this.state.posts.map((post, i)=>{
                            return (
                                <Post key={i} post={post} />
                            )
                        })
                    }
                </Col>
            </Row>
        )}
}

export default PostList;