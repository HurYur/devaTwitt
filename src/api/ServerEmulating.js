export function requestGet(url, data){
    if (url.includes('posts/followed')){
        // return Followed Posts
        let posts = JSON.parse(localStorage.getItem('devaTwitt.posts'));
        let users = JSON.parse(localStorage.getItem('devaTwitt.users'));
        let userIndex = users.findIndex( user => user.id === data);
        return posts.filter( post => users[userIndex].followers.indexOf(post.author.id) > -1 );

    }else if(url === 'devaTwitt/posts'){
        // return all Posts
        return JSON.parse(localStorage.getItem('devaTwitt.posts'));
    }else if(url === 'devaTwitt/users'){
        return JSON.parse(localStorage.getItem('devaTwitt.users'));
    }
}

export function requestPost(url, data){
    if (url.includes('comments')){
        // add new comment
        let commentedPostId = parseInt(url.match(/\d+/)[0]);
        let posts = JSON.parse(localStorage.getItem('devaTwitt.posts'));
        let postPosition = posts.findIndex( post => post.id === commentedPostId);
        posts[postPosition]['comments'].push(data);

        localStorage.setItem('devaTwitt.posts', JSON.stringify(posts));
    }else if(url.includes('likes')){
        //add like to Post
        let likedPostId = parseInt(url.match(/\d+/)[0]);
        let posts = JSON.parse(localStorage.getItem('devaTwitt.posts'));
        let postPosition = posts.findIndex( post => post.id === likedPostId);
        posts[postPosition]['likes'].push(data);

        localStorage.setItem('devaTwitt.posts', JSON.stringify(posts));
    }else if(url === 'devaTwitt/posts'){
        // add new Post
        let posts = JSON.parse(localStorage.getItem('devaTwitt.posts'));
        data.id = posts.length + 1;
        data.likes = [];
        posts.push(data);

        localStorage.setItem('devaTwitt.posts', JSON.stringify(posts));
    }else if(url === 'devaTwitt/users'){
        // add new User
        let users = JSON.parse(localStorage.getItem('devaTwitt.users'));
        data.id = users.length + 1;
        data.photo = "https://via.placeholder.com/50x50";
        data.followers = [];
        users.push(data);

        localStorage.setItem('devaTwitt.users', JSON.stringify(users));
    }else if(url.includes('follow')){
        // Follow or Unfollow user;
        let followUserId = parseInt(url.match(/\d+/)[0]);
        let users = JSON.parse(localStorage.getItem('devaTwitt.users'));
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
        console.log(users[1].followers);
        localStorage.setItem('devaTwitt.currentUser', JSON.stringify(users[loggedUserPosition]));
        localStorage.setItem('devaTwitt.users', JSON.stringify(users));
    }



}