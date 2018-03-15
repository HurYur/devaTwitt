import React from 'react';
import {Panel, Glyphicon} from 'react-bootstrap'

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {showComments: false}
    }
    render(){
        let {showComments} = this.state;
        let {post} = this.props;

        return (
              <Panel className="post">
                  <Panel.Heading>{post.author} {post.date}</Panel.Heading>
                  <Panel.Body>{post.publication}</Panel.Body>
                  <Panel.Footer>
                      <div className="likes">
                          <Glyphicon glyph="heart" />
                          <span className="quantity">{post.likes.length}</span>
                      </div>
                      <div className="comments" onClick={()=> this.setState({showComments: !showComments})}>
                          <Glyphicon glyph="comment" />
                          <span className="quantity">{post.comments.length}</span>
                      </div>
                      {
                          showComments && <div className="comments-container">
                              <div><textarea defaultValue="Put the comment here" /></div>
                              {post.comments.map((comment, i)=>{
                                return <div key={i}>{comment.text}</div>
                              })}
                          </div>
                      }
                  </Panel.Footer>
              </Panel>
        )}
}

export default Post;