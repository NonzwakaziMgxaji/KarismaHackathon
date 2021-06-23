//single vid
var video1 = document.querySelector(".video1");
//big div
var videos = document.querySelector(".videos");
var count = 0;


$("video.video1").one("play", function(){
// event.target

count++
console.log(count);

});

// video1.addEventListener("playing", function(event){
//     event.target

//   count--  
//   console.log(count);  
// });