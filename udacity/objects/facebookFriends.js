const facebookProfile={
   name:"Magnifique",
   friends:30,
   messages:[
    "The older I get, the more I discover that there is no benefits of being silence",
    "No matter how situation is, Be kind to others, Help them and be a friend of them",
    "It's better to die with highest expectation of getting eternal life",
   ],
   postMessage:function(message){
    this.messages.push(message);
   },
   deleteMessage: function(index){
    this.messages.splice(index,1);
   },
   addFriend:function(){
    this.friends+=1;
   },
   removeFriend:function(){
    if(this.friends>0)
    this.friend-=1;
   }
}

facebookProfile.postMessage("No matter how situation is, Try to laugh");
console.log(facebookProfile.messages);