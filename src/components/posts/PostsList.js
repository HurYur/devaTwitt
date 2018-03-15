import React from 'react';
import {Row, Col, Panel, Button, Image} from 'react-bootstrap'

import Post from './Post';
import loadData from "../../api/fetchData";

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: [], newPostText: '', postCharactersLimit: 200};
    }
    newPostType = (postText) => {
        if(postText.length <= this.state.postCharactersLimit){
            this.setState({newPostText: postText});
        }
    };
    sendPost = () => {
        console.log(this.state.newPostText);
    };
    componentDidMount() {
        loadData("../api/posts.json", {'method': 'get'})
            .then((posts)=>{
                this.setState({posts: posts})
            });
    }
    render(){
        const {newPostText, postCharactersLimit} = this.state;
        return (
            <Row>
                <Col sm={8} smOffset={2}>
                    <Panel className="post">
                        <Panel.Heading>
                            <Image src="https://robohash.org/CSS.png?set=set1&size=50x50" circle />
                        </Panel.Heading>
                        <Panel.Body>
                            <textarea value={newPostText}
                                      onChange={(e) => this.newPostType(e.target.value)} />
                            <div className="symbol-count">{postCharactersLimit - newPostText.length} symbols left</div>
                        </Panel.Body>
                        <Panel.Footer>
                            <Button bsStyle="info" onClick={this.sendPost}>Send</Button>
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
            </Row>
        )}
}

export default PostList;