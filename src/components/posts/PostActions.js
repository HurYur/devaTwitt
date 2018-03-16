import React from 'react';
import {Panel, Glyphicon, Image} from 'react-bootstrap';

import TextInput from '../shared/TextInput';
import {requestPost} from "../../helpers/requstHelper";
import {getCurrentUser} from "../../helpers/storageHelper";

class PostActions extends React.Component{
    constructor(props){
        super(props);
        this.state = {showComments: false}
    }
    likePost(){
        const {post} = this.props;
        let user = getCurrentUser();

        //ignore request if user liked post already
        if(post.likes.indexOf(user.id) < 0){
            let updatedPost = post.likes.push(user.id);
            requestPost('devaTwitt.posts.' + post.id, updatedPost);
        }
    }
    sendComment = (newCommentText) => {
        const {post} = this.props;
        let user = getCurrentUser();

        let newComment = {
            text: newCommentText,
            author: user.id,
            date: new Date()
        };
        let updatedPost = post.comments.push(newComment);
        requestPost('devaTwitt.posts.' + post.id, updatedPost);
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
                                    btnText="Send Comment"
                                    onSend={(newComment)=> this.sendComment(newComment)}/>
                         <div className="comments-container">
                             {comments.map((comment, i)=>{
                                 return <div className="comment" key={i}>
                                     <div className="author">
                                         <Image src={comment.author.photo} circle />
                                         <span className="author">{comment.author.name}</span>
                                     </div>
                                     <div className="text">{comment.text}</div>
                                 </div>
                             })}
                         </div>
                     </div>
                 }
             </Panel.Footer>
        )}
}

export default PostActions;