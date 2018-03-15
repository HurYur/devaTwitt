import React from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';

import TextInput from '../shared/TextInput';

class PostActions extends React.Component{
    constructor(props){
        super(props);
        this.state = {showComments: false}
    }
    likePost(like){
        console.log(like.push('hello'));
    }
    sendComment = (newComment) => {
        console.log(newComment);
    };
    render(){
        let {showComments} = this.state;
        let {post} = this.props;

        return (
             <Panel.Footer>
                 <div className="likes pointer" onClick={() => this.likePost(post.likes)}>
                     <Glyphicon glyph="heart" />
                     <span className="quantity">{post.likes.length}</span>
                 </div>
                 <div className="comments pointer" onClick={()=> this.setState({showComments: !showComments})}>
                     <Glyphicon glyph="comment" />
                     <span className="quantity">{post.comments.length}</span>
                 </div>
                 {
                     showComments && <div className="comments-section">
                         <TextInput messageCharactersLimit={200}
                                    onSend={(newComment)=> this.sendComment(newComment)}/>
                         <div className="comments-container">
                             {post.comments.map((comment, i)=>{
                                 return <div className="comment" key={i}>{comment.author}{comment.text}</div>
                             })}
                         </div>
                     </div>
                 }
             </Panel.Footer>
        )}
}

export default PostActions;