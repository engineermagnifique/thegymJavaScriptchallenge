var favoriteCourse=function myFavoriteCourse(course){
    console.log("My favorite course is "+course);
}

function setCourse(callbackFunction,course){
    callbackFunction(course);
}
setCourse(favoriteCourse,"Python");