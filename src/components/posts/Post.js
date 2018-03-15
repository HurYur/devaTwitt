import React from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';

import TextInput from '../shared/TextInput';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {showComments: false}
    }
    parseDate(date){
        let parsedDate = new Date(Date.parse(date)),
            day = parsedDate.getDate(),
            minutes = parsedDate.getMinutes(),
            hours = parsedDate.getHours(),
            month = parsedDate.getMonth() + 1,
            year = parsedDate.getFullYear();

        if( hours < 10 ){
            hours = '0' + hours
        }
        if( minutes < 10 ){
            minutes = '0' + minutes
        }
        return `${hours}:${minutes} - ${day}/${month}/${year}`
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
              <Panel className="post">
                  <Panel.Heading>
                      <div>{post.author}</div>
                      <div className="psot-date">
                          {this.parseDate(post.date)}
                      </div>
                  </Panel.Heading>
                  <Panel.Body>{post.publication}</Panel.Body>
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
              </Panel>
        )}
}

export default Post;