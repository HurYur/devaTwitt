export function requestPost(url, data){
    if (url.includes('comments')){
        // add new comment
        console.log(url);
        let posts = JSON.parse(localStorage.getItem('devaTwitt.posts'));
        let postPosition = posts.findIndex( post => post.id == 0);
        posts[postPosition]['comments'].push(data);

        localStorage.setItem('devaTwitt.posts', JSON.stringify(posts));
    }else if(url.includes('likes')){
        //add like to Post
        console.log(url);
        let posts = JSON.parse(localStorage.getItem('devaTwitt.posts'));
        let postPosition = posts.findIndex( post => post.id == 5);
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
        // add new Post
        let users = JSON.parse(localStorage.getItem('devaTwitt.users'));
        data.id = users.length + 1;
        data.photo = "https://via.placeholder.com/50x50";
        data.followers = [];
        users.push(data);

        localStorage.setItem('devaTwitt.users', JSON.stringify(users));
    }



}