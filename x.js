const cafeStore = {};

var prices = 0;

const Price = {
  Cafe: 12000,
  CafeMilk: 18000,
  dame: 15000,
  Dua: 15000,
  Duatay: 25000,
  lemon: 10000,
  lipton: 12000,
  orange: 15000,
  orangemilk: 20000,
  rauma: 10000,
  raumadua: 15000,
  raumasua: 15000,
  tea: 10000,
};

function getInfo() {
  const inputArray = document.querySelectorAll('input');
      for (const item of inputArray) {
        var temp = 0;
        cafeStore[item.name] = item.value;
        if(Price[item.name] != 0){
        temp = parseInt(item.value) * parseInt(Price[item.name]);
        prices = prices + temp;
        }
      }
  console.log(prices);
  document.getElementById("Total").innerHTML = prices;
  prices = 0;
}

