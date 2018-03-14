import React from 'react';

class UsersList extends React.Component {
    // loadUsers(){
    //     let xmlhttp = new XMLHttpRequest();
    //     xmlhttp.onreadystatechange = function() {
    //         if (this.readyState === 4 && this.status === 200) {
    //             console.log(this);
    //             let myObj = JSON.parse(this.responseText);
    //         }
    //     };
    //     xmlhttp.open("GET", "../api/generated.json", true);
    //     xmlhttp.send();
    // }
    render(){
        let users = [
            {
                "_id": "5aa7e68f125b2a9344b14e49",
                "index": 0,
                "guid": "80f4f6bd-6e16-49a0-ae7b-874885cb035b",
                "isActive": true,
                "picture": "http://placehold.it/32x32",
                "age": 36,
                "name": {
                    "first": "Schmidt",
                    "last": "Malone"
                },
                "company": "CONFRENZY",
                "email": "schmidt.malone@confrenzy.net",
                "phone": "+1 (823) 413-3079",
                "about": "Exercitation sit Lorem labore tempor commodo elit duis elit sit non proident excepteur. Fugiat excepteur ipsum nisi consectetur. Labore non dolore qui exercitation excepteur elit Lorem velit minim duis aliqua reprehenderit eu officia. Nulla enim culpa commodo ea aliquip laboris nisi. Laborum laborum culpa laborum tempor Lorem eiusmod tempor velit. Ullamco aute pariatur consequat reprehenderit occaecat ut in ex esse velit anim ut deserunt.",
                "registered": "Thursday, April 30, 2015 1:39 AM"
            },
            {
                "_id": "5aa7e68f6ed9c65ca61411c2",
                "index": 1,
                "guid": "251382aa-80ba-4dab-93d6-77786a7fdeda",
                "isActive": false,
                "picture": "http://placehold.it/32x32",
                "age": 29,
                "name": {
                    "first": "Marylou",
                    "last": "Larsen"
                },
                "company": "BESTO",
                "email": "marylou.larsen@besto.co.uk",
                "phone": "+1 (896) 415-3683",
                "about": "Lorem consectetur exercitation nulla officia ullamco sint esse proident cupidatat. Sint do est nulla proident fugiat commodo Lorem cupidatat eiusmod. Pariatur pariatur irure ullamco in laborum pariatur in reprehenderit amet duis amet. Cupidatat esse ea nostrud duis veniam qui laborum culpa laboris tempor aliquip.",
                "registered": "Sunday, May 17, 2015 7:42 AM"
            },
            {
                "_id": "5aa7e68fe04162f458a1dd3a",
                "index": 2,
                "guid": "03242a21-1e81-4d1d-8629-8198ebc32e60",
                "isActive": false,
                "picture": "http://placehold.it/32x32",
                "age": 33,
                "name": {
                    "first": "Harrington",
                    "last": "Stevenson"
                },
                "company": "GONKLE",
                "email": "harrington.stevenson@gonkle.ca",
                "phone": "+1 (843) 561-3115",
                "about": "In qui consectetur id quis reprehenderit magna eiusmod enim laboris id eu elit dolore. Duis ad ea reprehenderit enim quis ut quis tempor do in. Amet eu mollit ad esse tempor sunt. Id elit eu sunt cillum mollit mollit enim adipisicing incididunt. Duis id ullamco dolor elit et qui magna enim qui nisi. Nulla id nisi non irure incididunt anim deserunt enim ut Lorem Lorem. Velit aliqua exercitation veniam amet.",
                "registered": "Tuesday, April 1, 2014 2:29 AM"
            },
            {
                "_id": "5aa7e68f01ae642b57f8292f",
                "index": 3,
                "guid": "4cf9d8e3-5486-4036-9591-65f216e37b06",
                "isActive": false,
                "picture": "http://placehold.it/32x32",
                "age": 25,
                "name": {
                    "first": "Dawson",
                    "last": "Espinoza"
                },
                "company": "NETUR",
                "email": "dawson.espinoza@netur.tv",
                "phone": "+1 (818) 488-2902",
                "about": "Ad adipisicing officia aliquip aliquip. Sint in amet enim occaecat proident ex amet. Veniam minim nostrud nulla duis culpa culpa veniam sunt non excepteur elit quis anim aliqua. Aliquip adipisicing magna ex officia Lorem adipisicing ullamco pariatur. Veniam ut sit dolore aliquip enim ea.",
                "registered": "Thursday, October 12, 2017 4:43 PM"
            },
            {
                "_id": "5aa7e68f99ec6a71291586e3",
                "index": 4,
                "guid": "6102f4b5-3ed2-4d03-8b9e-0d165e97b9f5",
                "isActive": true,
                "picture": "http://placehold.it/32x32",
                "age": 34,
                "name": {
                    "first": "Kristina",
                    "last": "Barnett"
                },
                "company": "CEMENTION",
                "email": "kristina.barnett@cemention.name",
                "phone": "+1 (990) 482-3639",
                "about": "Dolor velit id aute in velit aute ut. Aute cillum amet laboris est sunt nostrud culpa officia in labore fugiat. Irure voluptate deserunt in incididunt adipisicing esse minim. Minim nostrud dolor deserunt exercitation. Dolore sit fugiat ea magna nulla eu ut ea. Eu cupidatat consectetur cupidatat exercitation Lorem minim quis cillum consectetur velit.",
                "registered": "Thursday, December 24, 2015 8:09 AM"
            },
            {
                "_id": "5aa7e68f4d42379b42be9ce5",
                "index": 5,
                "guid": "b8e97179-411d-4c49-81de-cf4ce9aa6029",
                "isActive": true,
                "picture": "http://placehold.it/32x32",
                "age": 33,
                "name": {
                    "first": "Paula",
                    "last": "Cross"
                },
                "company": "DEVILTOE",
                "email": "paula.cross@deviltoe.me",
                "phone": "+1 (897) 431-3485",
                "about": "Ex anim mollit anim qui ipsum duis non minim proident ipsum ad. Mollit esse pariatur ullamco incididunt Lorem dolore do fugiat veniam quis do sunt. Ut amet et ad dolor pariatur esse excepteur nostrud veniam laborum amet voluptate anim reprehenderit. Cupidatat in laborum ut deserunt amet. Aute id dolore ullamco duis ullamco voluptate excepteur excepteur ex laboris ipsum ex ea magna. Id irure sint non proident mollit deserunt magna amet id minim eiusmod ullamco aliquip.",
                "registered": "Monday, August 1, 2016 2:59 AM"
            }
        ];
        return (
            <ul>
                {
                    users.map((user, i) => {
                        return <li key={i}>{user.name.first + ' ' + user.name.last}</li>
                    })
                };
            </ul>
        )
    }
}

export default UsersList;