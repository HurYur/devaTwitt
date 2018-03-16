import React from 'react';
import {Row, Col, Panel, Image} from 'react-bootstrap'

import Post from './Post';
import TextInput from '../shared/TextInput'
import {requestGet, requestPost} from "../../helpers/requstHelper";
import {getCurrentUser} from "../../helpers/storageHelper";

let currentUser = getCurrentUser();

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    sendPost = (newPostText) => {
        let publication = {
            author: {
                id: currentUser.id,
                name: currentUser.name,
                photo: currentUser.photo
            },
            publication: newPostText,
            date: new Date()
        };
        requestPost('devaTwitt.posts', publication)
    };
    componentDidMount() {
        this.setState({posts: requestGet('devaTwitt.posts')});
    }
    render(){
        return (
            <Row>
                <Col sm={8} smOffset={2}>
                    <h2>Posts</h2>
                    <Panel className="post">
                        <Panel.Heading>
                            <Image src={currentUser.photo} circle />
                            <span className="author-name">{currentUser.name}</span>
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