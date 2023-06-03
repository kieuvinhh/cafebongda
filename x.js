const cafeStore = {};

var prices = 0;

const Price = {
    Cafe: 13000,
    CafeMilk: 20000,
    tea: 10000,
    lipton: 13000,
    lemon: 10000,
    rauma: 15000,
    raumasua: 20000,
    raumadua: 20000,
    Dua: 20000,
    Duatay: 25000,
    orange: 15000,
    orangemilk: 20000,
    dame: 15000,
    nuocngot: 15000,
    nuocsuoi: 7000,
    taythem: 5000,
    mytrung: 20000,
    oplacamoi: 35000,
    hero: 22000,
    baso: 37000,
    conmeo: 27000,
    hotquet: 5000
};

function getInfo() {
    const inputArray = document.querySelectorAll("input");
    for (const item of inputArray) {
        var temp = 0;
        cafeStore[item.name] = item.value;
        if (Price[item.name] != 0) {
            temp = parseInt(item.value) * parseInt(Price[item.name]);
            prices = prices + temp;
        }
    }
    document.getElementById("Total").innerHTML = prices.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    prices = 0;
}

function minus(name) {
    let x = document.getElementById(name).value;
    x = parseInt(x) - 1;
    if (x < 0) x = 0;
    document.getElementById(name).value = x;
}

function add(name, amount) {
    let x = document.getElementById(name).value;
    x = parseInt(x) + parseInt(amount);
    document.getElementById(name).value = x;
}

//Pad given value to the left with "0"
function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

window.onload = function() {
    var now = new Date();
    var strDateTime = [AddZero(now.getDate()),AddZero(now.getMonth() + 1),now.getFullYear()].join("/")
    var Time = [AddZero(now.getHours()),AddZero(now.getMinutes())].join(":");
    document.getElementById("Console").innerHTML = "Hôm nay: " + strDateTime;   
    document.getElementById("Console1").innerHTML = "Giờ: " + Time;

};
