var selctx = document.getElementById("selectChart");
var allctx = document.getElementById("allChart");

const selectLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const allLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var selectData = [{
    label: "data 1",
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    backgroundColor:
        randomBackgroud(),
    borderColor:
        randomBackgroud(),
    borderWidth: 1
}, {
    label: "data 2",
    data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    backgroundColor:
        randomBackgroud(),
    borderColor:
        randomBackgroud(),
    borderWidth: 1
}];

var allData = [{
    label: "data 1",
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    backgroundColor:
        randomBackgroud(),
    borderColor:
        randomBackgroud(),
    borderWidth: 1
}]

var selectChart = new Chart(selctx, {
    type: "line",
    data: {
        labels: selectLabels,
        datasets: selectData
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

var allChart = new Chart(allctx, {
    type: "line",
    data: {
        labels: allLabels,
        datasets: allData
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

function randomBackgroud() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);

    return "#" + n.slice(0, 6);
}
