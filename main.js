var video1 = document.querySelector(".video1");
var video2 = document.querySelector(".video2");
var video3 = document.querySelector(".video3");
var video4 = document.querySelector(".video4");

var count = 0;

var views = {
    january: 404,
    february: 350,
    march: 300,
    april: 12,
    may: 6,
    june: 673,
    july: 40,
    august: 200,
    september: 350,
    october: 450,
    november: 700,
    december: 1200,
}

var views2 = {
    january: 300,
    february: 500,
    march: 100,
    april: 150,
    may: 700,
    june: 900,
    july: 300,
    august: 200,
    september: 600,
    october: 300,
    november: 900,
    december: 1800,
}

var views3 = {
    january: 200,
    february: 300,
    march: 450,
    april: 200,
    may: 600,
    june: 800,
    july: 600,
    august: 400,
    september: 800,
    october: 500,
    november: 975,
    december: 700,
}

var views4 = {
    january: 650,
    february: 500,
    march: 200,
    april: 100,
    may: 630,
    june: 900,
    july: 850,
    august: 500,
    september: 630,
    october: 850,
    november: 500,
    december: 300,
}

$("video.video1").one("play", function () {
    // event.target

    count++
    console.log(count);
    if (localStorage["store"]) {
        localStorage.setItem("store", JSON.stringify())
    }

});

$("video.video2").one("play", function () {
    // event.target

    count++
    console.log(count);
    if (localStorage["store"]) {
        localStorage.setItem("store", JSON.stringify())
    }

});

$("video.video3").one("play", function () {
    // event.target

    count++
    console.log(count);
    if (localStorage["store"]) {
        localStorage.setItem("store", JSON.stringify())
    }

});

$("video.video4").one("play", function () {
    // event.target

    count++
    console.log(count);
    if (localStorage["store"]) {
        localStorage.setItem("store", JSON.stringify())
    }

});