function getParsedData(apiUrl){
    return JSON.parse(localStorage.getItem(apiUrl))
}
function setData(apiUrl, data){
   localStorage.setItem(apiUrl, JSON.stringify(data));
}

export function requestGet(url, data){
    if (url.includes('posts/followed')){
        // return Followed Posts
        let posts = getParsedData('devaTwitt.posts');
        let users = getParsedData('devaTwitt.users');
        let userIndex = users.findIndex( user => user.id === data);

        return posts.filter( post => users[userIndex].followers.indexOf(post.author.id) > -1 );

    }else if(url === 'devaTwitt/posts'){
        // return all Posts
        return getParsedData('devaTwitt.posts');
    }else if(url === 'devaTwitt/users'){
        return getParsedData('devaTwitt.users');
    }
}

export function requestPost(url, data){
    if (url.includes('comments')){
        // add new comment
        let commentedPostId = parseInt(url.match(/\d+/)[0], 10);
        let posts = getParsedData('devaTwitt.posts');
        let postPosition = posts.findIndex( post => post.id === commentedPostId);
        posts[postPosition]['comments'].push(data);

       setData('devaTwitt.posts', posts);
    }else if(url.includes('likes')){
        //add like to Post
        let likedPostId = parseInt(url.match(/\d+/)[0], 10);
        let posts = getParsedData('devaTwitt.posts');
        let postPosition = posts.findIndex( post => post.id === likedPostId);
        posts[postPosition]['likes'].push(data);

       setData('devaTwitt.posts', posts);
    }else if(url === 'devaTwitt/posts'){
        // add new Post
        let posts = getParsedData('devaTwitt.posts');
        data.id = posts.length + 1;
        data.likes = [];
        data.comments = [];
        posts.push(data);

       setData('devaTwitt.posts', posts);
    }else if(url === 'devaTwitt/users'){
        // add new User

        let users = getParsedData('devaTwitt.users');
        data.id = users.length + 1;
        data.photo = "https://via.placeholder.com/50x50";
        data.about = 'User didn`t tell about himself';
        data.followers = [];
        users.push(data);

       setData('devaTwitt.users', users);
    }else if(url.includes('follow')){
        // Follow or Unfollow user;
        let followUserId = parseInt(url.match(/\d+/)[0], 10);
        let users = getParsedData('devaTwitt.users');
        let loggedUserPosition = users.findIndex( user => user.id === data);
        let userFollowers = users[loggedUserPosition]['followers'];
        let isFollowed = userFollowers.findIndex( followerId => followerId === followUserId );

        if(isFollowed < 0){
            //follow
            userFollowers.push(followUserId);
        }else {
            //unfollow
            userFollowers.splice(isFollowed,1)
        }
        setData('devaTwitt.currentUser', users[loggedUserPosition]);
        setData('devaTwitt.users', users);
    }



}