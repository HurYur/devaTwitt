import React from 'react';
import {Panel, Glyphicon, Image} from 'react-bootstrap';

import TextInput from '../shared/TextInput';
import { postComment, postLike } from '../../helpers/requstHelper';
import { getCurrentUser } from '../../helpers/storageHelper';
import parseDate from '../../helpers/date'

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
            postLike(post.id, user.id);
            this.props.reloadPost();
        }
    }
    sendComment (newCommentText) {
        if(newCommentText.length){
            postComment(this.props.post.id, newCommentText);
            this.props.reloadPost();
        }
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
                             {comments.sort((a,b)=> new Date(b.date) - new Date(a.date)).map((comment, i)=>{
                                 return <div className="comment" key={i}>
                                     <div className="head">
                                         <div className="author">
                                             <Image src={comment.author.photo} circle />
                                             <span className="author">{comment.author.name}</span>
                                         </div>
                                         <div className="date">{parseDate(comment.date)}</div>
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