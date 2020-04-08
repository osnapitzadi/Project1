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


// current time function
function time(){
    var d = new Date();
    var n = d.toLocaleTimeString();
    console.log(n);
    var divTime = document.getElementById("time");
    divTime.innerHTML = n;
}

function init() {
    time();
}

