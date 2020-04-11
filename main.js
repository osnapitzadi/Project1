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
    var n = new Date().toLocaleString();
    var divTime = document.getElementById("time");
    divTime.innerHTML = n;
}

function init() {
    // Constructor Calls
    aStore.push(new items (1, "Nike Pro", 119.99, 1, 1, "Shoes", 4.99, getRandowReviews(), "The radiance lives on in the Nike Pro, the b-ball OG that puts a fresh spin on what you know best: crisp leather in an all-white colourway for a statement look on and off the court.", "src/1.png"));
    aStore.push(new items (2, "Adidas Original", 199.99, 10, 5, "Shoes", 4.99, getRandowReviews(), "Low-top buffed leather sneakers in white. Round rubber shell toe in off-white. Tonal lace-up closure. Logo embossed in black and white at padded tongue. Padded collar.", "src/2.png"));
    aStore.push(new items (3, "New Balance", 159.99, 20, 5, "Shoes", 4.99,  getRandowReviews(), "The legacy continues with the perfect blend of cushioning and style in the Made in USA 990v5. Proof that quality still exists, this men’s sneaker looks — and feels — as good on your morning run as it does on the runway.",  "src/3.png"));
    aStore.push(new items (4, "Polo T-Shirt", 19.99, 25, 5, "T-Shirt", 4.99,  getRandowReviews(), "Curabitur ex felis, luctus vel odio id, cursus feugiat nibh. Praesent at dui quis justo pharetra mattis id non leo.",  "src/4.png"));
    aStore.push(new items (5, "Nike T-Shirt", 21.99, 25, 5, "T-Shirt", 4.99,  getRandowReviews(), "Nulla blandit odio in pharetra lacinia. Aenean suscipit eget lectus a suscipit. Cras et ante eget nisl iaculis pulvinar.",  "src/5.png"));
    aStore.push(new items (6, "Amazon T-Shirt", 9.99, 25, 5, "T-Shirt", 4.99,  getRandowReviews(), "Duis aliquet aliquet ipsum, nec mollis sapien dictum ac. Aenean sed ante lacus. Sed elementum quam in magna tempor fermentum. ",  "src/6.png"));
    aStore.push(new items (7, "Levi's Jeans", 59.99, 25, 5, "Jeans", 4.99,  getRandowReviews(), "Vestibulum iaculis vestibulum auctor. Aenean non rhoncus augue.",  "src/7.png"));
    aStore.push(new items (8, "Jack & Jones Jeans", 99.99, 25, 5, "Jeans", 4.99,  getRandowReviews(), "Sed at quam ut sapien malesuada consequat. Ut egestas venenatis libero et elementum. Mauris tincidunt finibus dictum.",  "src/8.png"));
    aStore.push(new items (9, "Amazon Jeans", 12.99, 25, 5, "Jeans", 4.99,  getRandowReviews(), "Duis aliquet mauris vitae dui efficitur, quis volutpat tellus tempor. Phasellus eu posuere ipsum.",  "src/9.png"));
    aStore.push(new items (10, "Champion's Hoodie", 34.99, 100, 10, "Hoodie", 4.99,  getRandowReviews(), "Duis sit amet varius magna, nec gravida tortor. Duis pharetra felis nec purus fermentum, finibus gravida ante laoreet.",  "src/10.png"));
    aStore.push(new items (11, "Naruto Hoodie", 69.99, 100, 10, "Hoodie", 4.99,  getRandowReviews(), "Nulla sodales fringilla lorem sed ultrices. Aenean egestas et erat ut tempus. ",  "src/11.png"));
    aStore.push(new items (12, "Supreme Hoodie", 15.99, 100, 10, "Hoodie", 4.99,  getRandowReviews(), "Morbi molestie accumsan leo, at rutrum velit posuere at.",  "src/12.png"));
    aStore.push(new items (13, "White Socks", 19.99, 100, 20, "Socks", 4.99,  getRandowReviews(), "Duis consectetur nisi ac pharetra convallis. Aenean ultrices sem eu dui ultrices, vitae bibendum sapien ultricies.",  "src/13.png"));
    aStore.push(new items (14, "Black Socks", 19.99, 100, 20, "Socks", 4.99,  getRandowReviews(), "Phasellus leo velit, tincidunt et mollis vel, dapibus ut mi.",  "src/14.png"));
    aStore.push(new items (15, "Amazon Socks", 9.99, 100, 20, "Socks", 4.99,  getRandowReviews(), " Donec vitae nunc vitae ante pretium pulvinar vitae et lacus. Fusce laoreet tristique mi, pretium auctor risus aliquam sed. ",  "src/15.png"));

    time();
    displayStoreItems(0);
    displayCartItems();
}

function displayStoreItems(categoryID) {
    var divOutput = document.getElementById("storeItems");
    divOutput.innerHTML = "";
    
    for (let index = 0; index < aStore.length; index++) {
        const tempItem = aStore[index];
        if (categoryID == 0) {
            //main div
            var tempCard = document.createElement("div");
            tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
            //tempCard.className = "card text-black bg-light col-lg-auto"; // the reason why I give class name is bootstrap library;
            tempCard.style = "width: 18rem;";
            tempCard.setAttribute("id", "card");

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
            cardBody2.className = "card-body container";

            var detailsButton = document.createElement("button");
            detailsButton.className = "card-btn btn-info";
            detailsButton.setAttribute("type","button");
            detailsButton.setAttribute("data-toggle","button");
            detailsButton.setAttribute("data-target","#exampleModalLong"+index);
            detailsButton.innerHTML = "More Info"

            var addToCard = document.createElement("button");
            addToCard.className = "card-btn btn-primary";
            addToCard.innerText = "Add to card"

            

            //child parent stucture
            divOutput.appendChild(tempCard);
            tempCard.appendChild(cardImg);
            tempCard.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            tempCard.appendChild(listPS);
            listPS.appendChild(price);
            listPS.appendChild(stoke);
            cardBody2.appendChild(addToCard);
            cardBody2.appendChild(detailsButton);
            tempCard.appendChild(cardBody2);


        } else if (categoryID == 1 && tempItem.category === "Shoes") {
            //main div
            var tempCard = document.createElement("div");
            tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
            //tempCard.className = "card text-black bg-light col-lg-auto"; // the reason why I give class name is bootstrap library;
            tempCard.style = "width: 18rem;";
            tempCard.setAttribute("id", "card");

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

            var addToCard = document.createElement("button");
            addToCard.className = "card-btn btn-primary";
            addToCard.innerText = "Add to card"

            

            //child parent stucture
            divOutput.appendChild(tempCard);
            tempCard.appendChild(cardImg);
            tempCard.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            tempCard.appendChild(listPS);
            listPS.appendChild(price);
            listPS.appendChild(stoke);
            cardBody2.appendChild(addToCard);
            tempCard.appendChild(cardBody2);


        } else if (categoryID == 2 && tempItem.category === "T-Shirt") {
            //main div
            var tempCard = document.createElement("div");
            tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
            //tempCard.className = "card text-black bg-light col-lg-auto"; // the reason why I give class name is bootstrap library;
            tempCard.style = "width: 18rem;";
            tempCard.setAttribute("id", "card");

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

            var addToCard = document.createElement("button");
            addToCard.className = "card-btn btn-primary";
            addToCard.innerText = "Add to card"

            

            //child parent stucture
            divOutput.appendChild(tempCard);
            tempCard.appendChild(cardImg);
            tempCard.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            tempCard.appendChild(listPS);
            listPS.appendChild(price);
            listPS.appendChild(stoke);
            cardBody2.appendChild(addToCard);
            tempCard.appendChild(cardBody2);

        } else if (categoryID == 3 && tempItem.category === "Jeans") {
            //main div
            var tempCard = document.createElement("div");
            tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
            //tempCard.className = "card text-black bg-light col-lg-auto"; // the reason why I give class name is bootstrap library;
            tempCard.style = "width: 18rem;";
            tempCard.setAttribute("id", "card");

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

            var addToCard = document.createElement("button");
            addToCard.className = "card-btn btn-primary";
            addToCard.innerText = "Add to card"

            

            //child parent stucture
            divOutput.appendChild(tempCard);
            tempCard.appendChild(cardImg);
            tempCard.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            tempCard.appendChild(listPS);
            listPS.appendChild(price);
            listPS.appendChild(stoke);
            cardBody2.appendChild(addToCard);
            tempCard.appendChild(cardBody2);

        } else if (categoryID == 4 && tempItem.category === "Hoodie") {
            //main div
            var tempCard = document.createElement("div");
            tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
            //tempCard.className = "card text-black bg-light col-lg-auto"; // the reason why I give class name is bootstrap library;
            tempCard.style = "width: 18rem;";
            tempCard.setAttribute("id", "card");

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

            var addToCard = document.createElement("button");
            addToCard.className = "card-btn btn-primary";
            addToCard.innerText = "Add to card"

            

            //child parent stucture
            divOutput.appendChild(tempCard);
            tempCard.appendChild(cardImg);
            tempCard.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            tempCard.appendChild(listPS);
            listPS.appendChild(price);
            listPS.appendChild(stoke);
            cardBody2.appendChild(addToCard);
            tempCard.appendChild(cardBody2);

        } else if (categoryID == 5 && tempItem.category === "Socks") {
            //main div
            var tempCard = document.createElement("div");
            tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
            //tempCard.className = "card text-black bg-light col-lg-auto"; // the reason why I give class name is bootstrap library;
            tempCard.style = "width: 18rem;";
            tempCard.setAttribute("id", "card");

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

            var addToCard = document.createElement("button");
            addToCard.className = "card-btn btn-primary";
            addToCard.innerText = "Add to card"

            

            //child parent stucture
            divOutput.appendChild(tempCard);
            tempCard.appendChild(cardImg);
            tempCard.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            tempCard.appendChild(listPS);
            listPS.appendChild(price);
            listPS.appendChild(stoke);
            cardBody2.appendChild(addToCard);
            tempCard.appendChild(cardBody2);

        }

    }
}

function displayStoreItemsDetails () {
    for (let index = 0; index < aStore.length; index++) {
        const storeItem = aStore[index];

        var mainModalDiv = document.createElement("div");
        mainModalDiv.className = "modal fade";
        mainModalDiv.setAttribute("id", "exampleModalLong"+index);
        mainModalDiv.setAttribute("tabindex", "-1");
        mainModalDiv.setAttribute("role", "dialog");
        mainModalDiv.setAttribute("aria-labelledby", "exampleModalLongTitle");
        mainModalDiv.setAttribute("aria-hidden", "true");

        var main2ModalDiv = document.createElement("div");
        main2ModalDiv.className = "modal-dialog"; 
        main2ModalDiv.setAttribute("role", "document");

        var contentDiv = document.createElement('div');
        contentDiv.className = 'modal-content';

        var headerDiv = document.createElement('div');
        
        
    }
}

// dark mode function
function modeChange(){
    if(document.getElementById("customSwitch1").checked == true){
    document.getElementById("storeName").style.color="#FFF";
    document.body.style.background = "#363636";
    document.getElementById("mainNavbar").className = "navbar navbar-expand-lg navbar-dark bg-dark";
    document.getElementById("time").style.color = "#FFF";
    document.getElementById("modeLabel").style.color = "#FFF";
    document.getElementById("modeLabel").innerHTML = "Light mode";
    //document.getElementsByClassName("card col-lg-auto").className = "card text-white bg-dark col-lg-auto"
    var cards = document.getElementsByClassName("card col-lg-auto");
        for(var i = 0; i<cards.length; i++){
            cards[i].style.background = "#404040";
        }

        var cardTitles = document.getElementsByClassName("card-title");
        for(var i = 0; i<cardTitles.length; i++){
            cardTitles[i].style.color = "#FFF";
        }

        var cardTitles = document.getElementsByClassName("list-group-item");
        for(var i = 0; i<cardTitles.length; i++){
            cardTitles[i].style.color = "#FFF";
            cardTitles[i].style.background = "#404040";
        }

    } else {
        document.getElementById("storeName").style.color="black";
        document.body.style.background = "#FFF";
        document.getElementById("mainNavbar").className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById("time").style.color = "#000";
        document.getElementById("modeLabel").style.color = "#000";
        document.getElementById("modeLabel").innerHTML = "Dark mode";
        //document.getElementsByClassName("card text-white bg-dark col-lg-auto").className = "card col-lg-auto"
        var cards = document.getElementsByClassName("card col-lg-auto");
        for(var i = 0; i<cards.length; i++){
            cards[i].style.background = "#FFF";
        }

        var cardTitles = document.getElementsByClassName("card-title");
        for(var i = 0; i<cardTitles.length; i++){
            cardTitles[i].style.color = "black";
        }

        var cardTitles = document.getElementsByClassName("list-group-item");
        for(var i = 0; i<cardTitles.length; i++){
            cardTitles[i].style.color = "black";
            cardTitles[i].style.background = "#FFF";
        }

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


function randomNumber(max){
    return Math.round(Math.random() * (max - 0) + 0);
}


function getRandowReviews() {
    var names = ["A****", "B****", "C****", "D****", "F****", "T****", "E****", "S****", "G****", "R****", "H****", "J****", "L****"]
    var reviews = ["very good", "satisfied", "I don't like it", "Shipping was very long", "excellent quality", "I'll buy more!!!!!!", "nah", "****", "5 stars"];
    var reviewObject = [[names[randomNumber(names.length)],reviews[randomNumber(reviews.length - 1)]],[names[randomNumber(names.length)],reviews[randomNumber(reviews.length - 1)]],[names[randomNumber(names.length)],reviews[randomNumber(reviews.length)]]];
    return reviewObject;
}



function displayCartItems() {
    var divCart = document.getElementById("cartItems");

    for (let index = 0; index < aCart.length; index++) {
        const element = aCart[index];
    }
}
