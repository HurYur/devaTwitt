import React from 'react';
import {Row, Col, Alert} from 'react-bootstrap';

import Post from './posts/Post';
import {followedPosts} from "../helpers/requstHelper";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    loadPosts = () => {
        this.setState({posts: followedPosts()});
    };
    componentDidMount() {
        this.loadPosts();
    }
    render(){

        return (
            <Row>
                <Col sm={8} smOffset={2}>
                    <h2>Home</h2>
                    {
                        this.state.posts.length < 1 && <Alert bsStyle="warning">
                            You don't follow any user<br/> or <br/>Users you are following haven't publications
                        </Alert>
                    }
                    <div>
                        {
                            this.state.posts.sort((a,b)=> new Date(b.date) - new Date(a.date)).map((post, i)=>{
                                return (
                                    <Post key={i} post={post} reloadPost={() => this.loadPosts()} />
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
        )}
}

export default Home;