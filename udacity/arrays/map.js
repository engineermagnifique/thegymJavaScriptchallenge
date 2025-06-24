var donuts=["jelly donut","john","lee",'amigos'];
var improvedDonuts=donuts.map(function(donut){
    donut+=" Hole";
    donut=donut.toUpperCase();
    return donut;
})
console.log(improvedDonuts);