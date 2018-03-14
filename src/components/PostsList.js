import React from 'react';

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []};
    }
    loadPosts(){
        fetch("../api/posts.json", {'method': 'get'})
            .then((response) => {
                return response.json();
            })
            .then((result) =>{
                this.setState({posts: result});
            })
    }
    componentDidMount() {
        this.loadPosts();
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