import React from 'react';
import {Panel, Image} from 'react-bootstrap';

import PostActions from './PostActions';
import parseDate from '../../helpers/date';

class Post extends React.Component{
    render(){
        let {post} = this.props;

        return (
              <Panel className="post">
                  <Panel.Heading>
                      <div className="author">
                          <Image className="photo" src={post.author.photo} circle />
                          <span className="name">{post.author.name}</span>
                      </div>
                      <div className="post-date">
                          {parseDate(post.date)}
                      </div>
                  </Panel.Heading>
                  <Panel.Body>
                      {post.publication}
                  </Panel.Body>
                  <PostActions post={post} reloadPost={()=>this.props.reloadPost()} />
              </Panel>
        )}
}

export default Post;