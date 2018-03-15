import React from 'react';
import {Panel} from 'react-bootstrap';

import PostActions from './PostActions';
import parseDate from '../../helpers/date';

class Post extends React.Component{
    render(){
        let {post} = this.props;

        return (
              <Panel className="post">
                  <Panel.Heading>
                      <div>{post.author}</div>
                      <div className="post-date">
                          {parseDate(post.date)}
                      </div>
                  </Panel.Heading>
                  <Panel.Body>{post.publication}</Panel.Body>
                  <PostActions post={post} />
              </Panel>
        )}
}

export default Post;