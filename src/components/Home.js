import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap'

import Post from './posts/Post';
import {followedPosts} from "../helpers/requstHelper";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    componentDidMount() {
        this.setState({posts: followedPosts()});
    }
    render(){

        return (
            <Row>
                <Col sm={8} smOffset={2}>
                    <h2>Home</h2>
                    <div>
                        {
                            this.state.posts.sort((a,b)=> new Date(b.date) - new Date(a.date)).map((post, i)=>{
                                return (
                                    <Post key={i} post={post} />
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
        )}
}

export default Home;