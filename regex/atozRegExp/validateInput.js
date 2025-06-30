let regex=/[^a-zA-Z0-9]/;
let username="User_1234";
if(regex.test(username))
{
    console.log("Invalid username");
} else {
    console.log("Valid username");
}
let phoneNumberregex=/^[0-9]/g;
let phone="0790879871";
console.log(phoneNumberregex.test(phone));
if(phoneNumberregex.test(regex))
{
    console.log("Invalid phone number");
} else {
    console.log("phone number");
}