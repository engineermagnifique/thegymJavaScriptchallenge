const facebookUsers = [
{
  id: 1,
  name: "Alice",
  email: "[alice@example.com](mailto:alice@example.com)",
  profilePicture: "https://picsum.photos/200?user=alice",
  displayProfile: true,
  age: 22,
  hoursSpentDaily: [1.5, 2.0, 3.1, 1.8, 2.2, 0.5, 3.0],
  status: "online",
  posts: [
  {
id: 101,
contentType: "text",
likes: 12,
comments: [
{ by: "Bob", message: "Nice!", length: 5 },
{ by: "Charlie", message: "Awesome writeup!", length: 17 },
],
shares: 1,
},
{
id: 102,
contentType: "image",
likes: 24,
comments: [],
shares: 3,
},
],
friends: [2, 3],
},
{
id: 2,
name: "Bob",
email: "[bob@example.com](mailto:bob@example.com)",
profilePicture: "https://picsum.photos/200?user=bob",
displayProfile: false,
age: 30,
hoursSpentDaily: [0.8, 1.2, 2.0, 1.5, 2.1, 2.5, 1.0],
status: "offline",
posts: [
{
id: 201,
contentType: "video",
likes: 35,
comments: [{ by: "Alice", message: "Super!", length: 6 }],
shares: 4,
},
{
id: 202,
contentType: "video",
likes: 75,
comments: [{ by: "Alice", message: "Super!", length: 6 }],
shares: 4,
},
],
friends: [1],
},
{
id: 3,
name: "Charlie",
email: "[charlie@example.com](mailto:charlie@example.com)",
profilePicture: "https://picsum.photos/200?user=charlie",
displayProfile: true,
age: 27,
hoursSpentDaily: [0, 0, 0, 0, 0, 0, 0],
status: "inactive",
posts: [],
friends: [],
},
];

//memoised function
function getUserTotalEngagement(func)
{
    var cache={};
    return function(userId)
    {
        if(cache[userId]) {
            return cache[userId];
        } else {
            let res=func(userId);
            cache[userId]=res;
            return res;
        }
    }
}
let allData=function(userId) {
    console.log("calculating.....");
    let totalLikes= facebookUsers.find((user) => user.id === userId).posts.map((post)=>post.likes).reduce((acc,val)=>acc+val,0);
    let totalShares=facebookUsers.find((user)=>user.id===userId).posts.map((post)=>post.shares).reduce((acc,val)=>acc+val,0);
    let totalComments=facebookUsers.find((user)=>user.id===userId).posts.map((post)=>post.comments.length).reduce((acc,val)=>acc+val,0);
    return totalLikes+totalShares+totalComments;
}
//get most active day
let getMostActiveDay=function(userId){
    let mostActiveDay=facebookUsers.find((user)=>user.id===userId).hoursSpentDaily.reduce((acc,val)=>{
        if(acc===null || acc>val)
        {
            return acc;
        }
        return val;
    });
    return facebookUsers.find((user)=>user.id===userId).hoursSpentDaily.indexOf(mostActiveDay)+1;
}

let momoizedHours=function(userId){
    return facebookUsers.find((user)=>user.id===userId).hoursSpentDaily.reduce((acc,val)=>acc+val,0).toFixed(2);
}

let res=getUserTotalEngagement(allData)(1);
console.log("Total Engagement ",res);
console.log("Total Engagement ",res);
let most=getUserTotalEngagement(getMostActiveDay)
console.log("The most used day",getUserTotalEngagement(getMostActiveDay)(1));
console.log("The total hours spend per week ",getUserTotalEngagement(momoizedHours)(1));

//second part
let getAverageTimeSpend=function(userId){
    let length=facebookUsers.find((user)=>user.id===userId).hoursSpentDaily.length;
    let name=facebookUsers.find((user)=>user.id===userId).name;
    let total= facebookUsers.find((user)=>user.id===userId).hoursSpentDaily.reduce((acc,val)=>acc+val,0).toFixed(2);
    let avg=total/length;
    return name+":"+avg.toFixed(3)+" hours/"+length+" day(s)";
}
let getEngagementPerPost=function(userId){
    let newArray=[];
    let totalLikes=0;
    let totalShares=0;
    let totalComments=0;
    facebookUsers.find((user)=>user.id===userId).posts.map((post)=>totalLikes+=post.likes)
    facebookUsers.find((user)=>user.id===userId).posts.map((post)=>totalShares+=post.shares)
    facebookUsers.find((user)=>user.id===userId).posts.map((post)=>totalComments+=post.comments.length)
    newArray.push(totalLikes);
    newArray.push(totalLikes);
    newArray.push(totalShares);
    return newArray;
}
let getCommentCountPerUser=function(){
    let acc={};
    facebookUsers.forEach((user)=>{
        acc[user.name]=user.posts.map((post)=>post.comments).length;
    })
    return acc;
}
let hasUserWithOnlyOneContentType=function(type){
    facebookUsers.forEach((user)=>{
        let isTrue=false;
        user.posts.map((post)=>{
            if(post.contentType===type)
            {
                console.log(isTrue);
            } else {
                console.log(!isTrue);
            }
        })
    })
}
console.log(getEngagementPerPost(1));
console.log("Average hours spent by",getUserTotalEngagement(getAverageTimeSpend)(1));
console.log("Engagement count per post:likes,shares,comments:",getUserTotalEngagement(getEngagementPerPost)(1));
console.log("Comment count per user ",getUserTotalEngagement(getCommentCountPerUser)(1));
hasUserWithOnlyOneContentType("audio");
