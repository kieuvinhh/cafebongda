
const cafeStore = {};

var prices = 0;

const Price = {
  Cafe: 17000,
  CafeMilk: 22000,
  tea: 12000,
  lipton: 17000,
  lemon: 12000,
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
