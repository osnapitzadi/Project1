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

aStore.push(new items (1, "Nike Pro", 119.99, 1, 1, "Shoos", 4.99, [],"dsfegrdjh", "src/1.png"));
aStore.push(new items (2, "Adidas Origin", 199.99, 10, 5, "Shoos", 4.99, [],"qsdfgdf", "src/2.jpg"));
aStore.push(new items (3, "New Balance", 159.99, 20, 5, "Shoos", 4.99, [], "lorem ipsum description", "src/3.jpg"));
aStore.push(new items (4, "Polo T-Shirt", 19.99, 25, 5, "T-Shirt", 4.99, [], "lorem ipsum description", "src/4.png"));
aStore.push(new items (5, "T-Shirt", 21.99, 25, 5, "T-Shirt", 4.99, [], "lorem ipsum description", "src/5.jpg"));
aStore.push(new items (6, "Amazon T-Shirt", 9.99, 25, 5, "T-Shirt", 4.99, [], "lorem ipsum description", "src/6.png"));
aStore.push(new items (7, "Levi's Jeans", 59.99, 25, 5, "Jeans", 4.99, [], "lorem ipsum description", "src/7.jpg"));
aStore.push(new items (8, "Jack & Jones Jeans", 99.99, 25, 5, "Jeans", 4.99, [], "lorem ipsum description", "src/8.jpg"));
aStore.push(new items (9, "Amazon Jeans", 12.99, 25, 5, "Jeans", 4.99, [], "lorem ipsum description", "src/9.jpg"));
aStore.push(new items (10, "Champion's Hoodie", 34.99, 100, 10, "Hoodie", 4.99, [], "lorem ipsum description", "src/10.jpg"));
aStore.push(new items (11, "Naruto Hoodie", 69.99, 100, 10, "Hoodie", 4.99, [], "lorem ipsum description", "src/11.png"));
aStore.push(new items (12, "Just White Hoodie", 15.99, 100, 10, "Hoodie", 4.99, [], "lorem ipsum description", "src/12.png"));
aStore.push(new items (13, "White Socks", 19.99, 100, 20, "Socks", 4.99, [], "lorem ipsum description", "src/13.png"));
aStore.push(new items (14, "Black Socks", 19.99, 100, 20, "Socks", 4.99, [], "lorem ipsum description", "src/14.png"));
aStore.push(new items (15, "Amazon Socks", 9.99, 100, 20, "Socks", 4.99, [], "lorem ipsum description", "src/15.png"));

console.log(aStore);

// current time function
function time(){
    var n = new Date().toLocaleString();
    var divTime = document.getElementById("time");
    divTime.innerHTML = n;
}

function init() {
    time();
    displayStoreItems();
}

function displayStoreItems() {
    var divOutput = document.getElementById("storeItems");
    divOutput.innerHTML = "";
    
    for (let index = 0; index < aStore.length; index++) {
        const tempItem = aStore[index];

        //main div
        var tempCard = document.createElement("div");
        tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
        tempCard.style = "width: 18rem;";

        // card 
        var cardImg = document.createElement("IMG");
        cardImg.className = "card-img-top";
        cardImg.setAttribute('src', tempItem.image);

        // body div
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = tempItem.name;

        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = tempItem.description;
        var listPS = document.createElement("ul");

        listPS.className = "list-group " + "list-group-flush";
        var price = document.createElement("li");

        price.className = "list-group-item";
        price.innerText = "Price: $" + tempItem.price;
        var stoke = document.createElement("li");

        stoke.className = "list-group-item";
        stoke.innerText = "On Stoke: " + tempItem.qty;
        var cardBody2 = document.createElement("div");
        cardBody2.className = "card-body";

        var addToCard = document.createElement("a");
        addToCard.className = "card-link";
        addToCard.innerText = "Add to card"

        //child parent stucture
        divOutput.appendChild(tempCard);
        tempCard.appendChild(cardImg);
        tempCard.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(listPS);
        listPS.appendChild(price);
        listPS.appendChild(stoke);
        cardBody2.appendChild(addToCard);
        tempCard.appendChild(cardBody2);
    }
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


var words = ['Buy with us!', 'Buy a lot!', 'Buy with friends!', 'Buy now!'];
var currentWord = -1;

setInterval(function(){
    currentWord++;
    if(currentWord >= words.length)
    {
        currentWord = 0;
    }
    document.getElementById("storeName").innerHTML = words[currentWord];
}, 3000);