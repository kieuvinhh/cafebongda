const cafeStore = {};

var prices = 0;

const Price = {
    Cafe: 18000,
    CafeMilk: 25000,
    tea: 15000,
    lipton: 18000,
    lemon: 15000,
    rauma: 20000,
    raumasua: 25000,
    raumadua: 25000,
    Dua: 25000,
    Duatay: 30000,
    orange: 20000,
    orangemilk: 25000,
    dame: 20000,
    nuocngot: 20000,
    nuocsuoi: 12000,
    taythem: 5000,
    mytrung: 20000,
    oplacamoi: 35000,
    hero: 22000,
    baso: 35000,
    conmeo: 25000,
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