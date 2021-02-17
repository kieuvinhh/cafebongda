const cafeStore = {};

var prices = 0;

const Price = {
    Cafe: 13000,
    CafeMilk: 18000,
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
    nuocsuoi: 10000,
    taythem: 5000,
    mytrung: 20000,
    oplacamoi: 35000,
    baso: 35000,
    conmeo: 25000
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
    document.getElementById("Total").innerHTML = prices;
    prices = 0;
}

function minus(name) {
    let x = document.getElementById(name).value;
    x = parseInt(x) - 1;
    if (x < 0) x = 0;
    document.getElementById(name).value = x;
}

function add(name) {
    let x = document.getElementById(name).value;
    x = parseInt(x) + 1;
    document.getElementById(name).value = x;
}