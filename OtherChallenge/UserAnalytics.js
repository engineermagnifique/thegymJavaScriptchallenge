let fullName;
let totalSpent;
let totalSessions=0;
let totalSessionTime;
let mostUsedLanguage=[];
let connectedSocials=[];

const userData={
    id:987654321,
    personal:{
        fullName:"Magnifique NIRAGIRE",
        email:"magnifiqueni01@gmail.com",
        contact:{
            phone:"+250790879872",
            emergence:null,
        },
    },
    preferences:{
        theme:"dark",
        notifications:{
            email:true,
            sms:false,
            push:true,
        },
        languages:["English","Kinyarwanda","French"],
    },
    socialAccounts:[
        {type:"facebook",username:"Maque"},
        {type:"twitter",username:"Niragire"},
    ],
     purchaseHistory: [
        { itemId: "A001", item: "Book", price: 30, date: "2023-12-20" },
        { itemId: "A002", item: "Pen", price: 10, date: "2024-01-15" }
    ],
    sessions: [
        { device: "mobile", start: "2024-04-01T10:00:00Z", duration: 50 },
        { device: "desktop", start: "2024-04-02T13:00:00Z", duration: 120 }
    ],
    validateUserData:function(email,purchase,sessions,socialAccounts){
        if(email.includes("@"))
        {
            if(purchase>=0.0)
            {
                if(sessions.start===new Date(sessions.start) && sessions.duration>0)
                {
                    if(socialAccounts.type!=null && socialAccounts.username!=null)
                    {
                         return true;
                    }
                    return false;
                }
                return false;
            }
            return false;
        }
    },
    isIDmuch:function(id){
        return id===this.id
    },
    getUserSummary:function(id){
        userData.filter(this.isIDmuch(id)).map((item)=>{
            fullName=item.personal.fullName;
            totalSessions=item.sessions.length;
            item.sessions.forEach(element => {
                totalSessionTime+=element.duration;
            });
            mostUsedLanguage=item.preferences.languages[0];
            connectedSocials=item.socialAccounts.filter(this.item.socialAccounts.connected==="true");
        })
    },
    normalizeSocialAccount:function()
    {
        var newObject={};
        item.socialAccounts.forEach((item,index)=>{
            newObject[index]=item;
        })
        return newObject;
    },
    updateUserPreference:function(obj,key,value){
        
    }
};

const newData=userData;
