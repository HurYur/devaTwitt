import React from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';

import TextInput from '../shared/TextInput';
import {requestPost} from "../../helpers/requstHelper";

class PostActions extends React.Component{
    constructor(props){
        super(props);
        this.state = {showComments: false}
    }
    likePost(){
        //@todo change ID to logged user
        let userId = 5;
        let id = this.props.post.id;
        //ignore request if user liked post already
        if(this.props.post.likes.indexOf(userId) < 0){
            let updatedPost = this.props.post.likes.push(userId);
            requestPost('devaTwitt.posts.' + id, updatedPost);
        }
    }
    sendComment = (newCommentText) => {
        //@todo change ID to logged user
        let userId = 5;
        let id = this.props.post.id;

        let newComment = {
            text: newCommentText,
            author: userId,
            date: new Date()
        };
        let updatedPost = this.props.post.comments.push(newComment);
        requestPost('devaTwitt.posts.' + id, updatedPost);
    };
    render(){
        let {showComments} = this.state;
        let {post: {likes = [], comments = []}} = this.props;

        return (
             <Panel.Footer>
                 <div className="likes pointer" onClick={() => this.likePost()}>
                     <Glyphicon glyph="heart" />
                     <span className="quantity">{likes.length}</span>
                 </div>
                 <div className="comments pointer" onClick={()=> this.setState({showComments: !showComments})}>
                     <Glyphicon glyph="comment" />
                     <span className="quantity">{comments.length}</span>
                 </div>
                 {
                     showComments && <div className="comments-section">
                         <TextInput messageCharactersLimit={200}
                                    onSend={(newComment)=> this.sendComment(newComment)}/>
                         <div className="comments-container">
                             {comments.map((comment, i)=>{
                                 return <div className="comment" key={i}>{comment.author}{comment.text}</div>
                             })}
                         </div>
                     </div>
                 }
             </Panel.Footer>
        )}
}

export default PostActions;