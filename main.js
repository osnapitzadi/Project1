// global variables
let aStore = [];
let aCart = [];

// store items constructor 
function items (id, name, price, qty, maxPerCustomer, category, shippingPrice, reviews, description, image) {

    this.id = id,
    this.name = name,
    this.price = price,
    this.qty = qty,
    this.maxPerCustomer = maxPerCustomer,
    this.category = category,
    this.shippingPrice = shippingPrice,
    this.reviews = reviews,
    this.description = description,
    this.image = image

}

// cart item constructor 
function cartItems (id, price, qty, shippingPrice){
    this.id = id,
    this.price = price,
    this.qty = qty,
    this.shippingPrice = shippingPrice
};

var immage = false;
// Constructor Calls
aStore.push(new items (1, "Nike Pro", 119.99, 1, 1, "Shoos", 4,99, [], "", immage));
aStore.push(new items (2, "Adidas Origin", 199.99, 10, 5, "Shoos", 4,99, [], "", immage));
aStore.push(new items (3, "New Balance", 159.99, 20, 5, "Shoos", 4.99, [], "", immage));
aStore.push(new items (4, "Polo T-Shirt", 19.99, 25, 5, "T-Shirt", 4.99, [], "", immage));
aStore.push(new items (5, "T-Shirt", 21.99, 25, 5, "T-Shirt", 4.99, [], "", immage));
aStore.push(new items (6, "Amazon T-Shirt", 9.99, 25, 5, "T-Shirt", 4.99, [], "", immage));
aStore.push(new items (7, "Levi's Jeans", 59.99, 25, 5, "Jeans", 4.99, [], "", immage));
aStore.push(new items (8, "Jack & Jones Jeans", 99.99, 25, 5, "Jeans", 4.99, [], "", immage));
aStore.push(new items (9, "Amazon Jeans", 12.99, 25, 5, "Jeans", 4.99, [], "", immage));
aStore.push(new items (10, "Champion's Hoodie", 34.99, 100, 10, "Hoodie", 4.99, [], "", immage));
aStore.push(new items (11, "Naruto Hoodie", 69.99, 100, 10, "Hoodie", 4.99, [], "", immage));
aStore.push(new items (12, "Just White Hoodie", 15.99, 100, 10, "Hoodie", 4.99, [], "", immage));
aStore.push(new items (13, "White Socks", 19.99, 100, 20, "Socks", 4.99, [], "", immage));
aStore.push(new items (14, "Black Socks", 19.99, 100, 20, "Socks", 4.99, [], "", immage));
aStore.push(new items (15, "Amazon Socks", 9.99, 100, 20, "Socks", 4.99, [], "", immage));
console.log(aStore);

// current time function
function time(){
    var n = new Date().toLocaleString();
    var divTime = document.getElementById("time");
    divTime.innerHTML = n;
}

function init() {
    time();
}


function modeChange(){
    if(document.getElementById("customSwitch1").checked == true){
    document.getElementById("storeName").style.color="#FFF";
    document.body.style.background = "#363636";
    document.getElementById("mainNavbar").className = "navbar navbar-expand-lg navbar-dark bg-dark";
    document.getElementById("time").style.color = "#FFF";
    document.getElementById("modeLabel").style.color = "#FFF";
    document.getElementById("modeLabel").innerHTML = "Light mode";
    } else {
        document.getElementById("storeName").style.color="black";
        document.body.style.background = "#FFF";
        document.getElementById("mainNavbar").className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById("time").style.color = "#000";
        document.getElementById("modeLabel").style.color = "#000";
        document.getElementById("modeLabel").innerHTML = "Dark mode";
    }
}

