document.body.onload = () => {
    console.log("test");
    if (!localStorage["views"]) {
        localStorage.setItem("views", JSON.stringify({ "HTML & CSS": { "january": 404, "february": 350, "march": 300, "april": 12, "may": 6, "june": 674, "july": 40, "august": 200, "september": 350, "october": 450, "november": 700, "december": 1200 }, "JavaScript": { "january": 300, "february": 500, "march": 100, "april": 150, "may": 700, "june": 900, "july": 300, "august": 200, "september": 600, "october": 300, "november": 900, "december": 1800 }, "NodeJS": { "january": 130, "february": 99, "march": 160, "april": 100, "may": 60, "june": 99, "july": 150, "august": 180, "september": 200, "october": 120, "november": 100, "december": 96 }, "ExpressJS": { "january": 650, "february": 500, "march": 200, "april": 100, "may": 630, "june": 900, "july": 850, "august": 500, "september": 630, "october": 850, "november": 500, "december": 300 } }))
    }
}

var selctx = document.getElementById("selectChart");
var allctx = document.getElementById("allChart");
const viewSelect = document.getElementById("chartDrop");
const chartAdd = document.getElementById("chartAdd");

viewSelect.innerHTML = "";

const selectLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var selectString = ["HTML & CSS"];

var allData = [];
var allLabels = [];

var selectData = [];
var keySelectData1 = [];

var viewObj = JSON.parse(localStorage["views"]);
var objLength = Object.keys(viewObj);

var subKeys = Object.keys(viewObj["HTML & CSS"]);
for (var i = 0; i < subKeys.length; i++) {
    var currMonth = subKeys[i];
    var selectedView = viewObj["HTML & CSS"];
    keySelectData1.push(selectedView[currMonth]);
};

selectData = [{
    label: "HTML & CSS",
    data: keySelectData1,
    backgroundColor:
        randomBackgroud(),
    borderColor:
        randomBackgroud(),
    borderWidth: 1
}];

for (var i = 0; i < objLength.length; i++) {
    viewSelect.innerHTML += "<option>" + objLength[i] + "</option>";

    var keyData = [];
    var subKeys = Object.keys(viewObj[objLength[i]]);
    allLabels = subKeys;

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

var selectChart = new Chart(
    document.getElementById("selectChart"), {
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

chartAdd.addEventListener("click", () => {
    var keySelectData2 = [];

    selectString = viewSelect.value;
    selectData = [];

    var selectedView = viewObj[selectString];
    var subKeys = Object.keys(selectedView);
    for (var j = 0; j < subKeys.length; j++) {
        var currMonth = subKeys[j];
        keySelectData2[j] = (selectedView[currMonth]);
    }

    selectData = [{
        label: selectString,
        data: keySelectData2,
        backgroundColor:
            randomBackgroud(),
        borderColor:
            randomBackgroud(),
        borderWidth: 1
    }]

    selectChart.destroy();

    selectChart = new Chart(selctx, {
        type: "line",
        data: {
            labels: selectLabels,
            datasets: selectData
        }
    })
})
