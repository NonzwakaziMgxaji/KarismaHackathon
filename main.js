var video1 = document.querySelector(".video1");
var video2 = document.querySelector(".video2");
var video3 = document.querySelector(".video3");
var video4 = document.querySelector(".video4");


const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var count = 0;

var views = JSON.parse(localStorage.getItem("views"))["HTML & CSS"];
var flagVid1 = false;

var views2 = JSON.parse(localStorage.getItem("views"))["JavaScript"];
var flagVid2 = false;

var views3 = JSON.parse(localStorage.getItem("views"))["NodeJS"];
var flagVid3 = false;

var views4 = JSON.parse(localStorage.getItem("views"))["ExpressJS"];
var flagVid4 = false;

video1.addEventListener("play", function () {
    // event.target

    if (!flagVid1) {
        var date = new Date();

        views[monthArr[date.getMonth()].toLowerCase()]++

        if (localStorage["views"]) {
            localStorage.setItem("views", JSON.stringify({ "HTML & CSS": views, JavaScript: views2, NodeJS: views3, ExpressJS: views4 }));
        }

        flagVid1 = true;
    }

});

video1.addEventListener("ended", () => {
    flagVid1 = false;
})

video2.addEventListener("play", function () {
    // event.target

    if (!flagVid2) {
        var date = new Date();

        views2[monthArr[date.getMonth()].toLowerCase()]++

        if (localStorage["views"]) {
            localStorage.setItem("views", JSON.stringify({ "HTML & CSS": views, JavaScript: views2, NodeJS: views3, ExpressJS: views4 }));
        }

        flagVid2 = true;
    }

});

video2.addEventListener("ended", () => {
    flagVid2 = false;
})

video3.addEventListener("play", function () {
    // event.target

    if (!flagVid3) {
        var date = new Date();

        views3[monthArr[date.getMonth()].toLowerCase()]++

        if (localStorage["views"]) {
            localStorage.setItem("views", JSON.stringify({ "HTML & CSS": views, JavaScript: views2, NodeJS: views3, ExpressJS: views4 }));
        }

        flagVid3 = true;
    }

});

video3.addEventListener("ended", () => {
    flagVid3 = false;
})

video4.addEventListener("play", function () {
    // event.target

    if (!flagVid4) {
        var date = new Date();

        views4[monthArr[date.getMonth()].toLowerCase()]++

        if (localStorage["views"]) {
            localStorage.setItem("views", JSON.stringify({ "HTML & CSS": views, JavaScript: views2, NodeJS: views3, ExpressJS: views4 }));
        }

        flagVid4 = true;
    }

});

video4.addEventListener("ended", () => {
    flagVid4 = false;
})
 