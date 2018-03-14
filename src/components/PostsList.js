import React from 'react';

import loadData from "../api/fetchData";

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
            <ul>
                {
                    this.state.posts.map((post, i)=>{
                        return <li key={i}>{post.publication}</li>
                    })
                }
            </ul>
        )}
}

export default PostList;