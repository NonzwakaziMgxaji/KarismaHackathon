var selctx = document.getElementById("selectChart");
var allctx = document.getElementById("allChart");

// localStorage.setItem("views", JSON.stringify({ view1: views, view2: views2, view3 : views3, view4 : views4}));

const selectLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var selectData = [{
    label: "video 1",
    data: [11, 23, 13, 7, 10, 16, 57, 28, 19, 3, 11, 8],
    backgroundColor:
        randomBackgroud(),
    borderColor:
        randomBackgroud(),
    borderWidth: 1
}, {
    label: "video 2",
    data: [2, 12, 14, 19, 8, 27, 16, 5, 24, 13, 12, 21],
    backgroundColor:
        randomBackgroud(),
    borderColor:
        randomBackgroud(),
    borderWidth: 1
}];

var allData = [];
var allLabels = [];

var viewObj = JSON.parse(localStorage["views"]);
var objLength = Object.keys(viewObj);

for (var i = 0; i < objLength.length; i++) {

    var keyData = [];
    var subKeys = Object.keys(viewObj[objLength[i]]);
    allLabels = subKeys

    for (var j = 0; j < subKeys.length; j++) {
        var currView = objLength[i];
        var currMonth = subKeys[j];
        var selectedView = viewObj[currView];
        keyData.push(selectedView[currMonth]);
    }

    allData.push({
        label: objLength[i],
        data: keyData,
        backgroundColor:
            randomBackgroud(),
        borderColor:
            randomBackgroud(),
        borderWidth: 1
    });
}


var selectChart = new Chart(selctx, {
    type: "line",
    data: {
        labels: selectLabels,
        datasets: selectData
    }
})

var allChart = new Chart(allctx, {
    type: "line",
    data: {
        labels: allLabels,
        datasets: allData
    }
})

function randomBackgroud() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);

    return "#" + n.slice(0, 6);
}