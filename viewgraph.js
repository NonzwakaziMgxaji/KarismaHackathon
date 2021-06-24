var selctx = document.getElementById("selectChart");
var allctx = document.getElementById("allChart");
const viewSelect = document.getElementById("chartDrop");
const chartAdd = document.getElementById("chartAdd");
const chartRemove = document.getElementById("chartRemove");

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
