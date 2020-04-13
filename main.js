// global variables
let aStore = [];
let aCart = [];
var CADprice = [];
var USDprice = [];
var KZTprice = [];
var typeCategory = 0;

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

function currentTime() {
    var date = new Date(); // creating object of Date 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("time").innerText = month + "/" + day + "/" + year + "/" + " " + hour + " : " + min + " : " + sec; // adding time to the div
      var t = setTimeout(function(){ currentTime() }, 1000); // setting timer
  }
  // updating time function
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;// to avoid for example 11:3:1 and print 11:03:01 
    }
    else {
      return k;
    }
  }

function init() {
    // Constructor Calls
    aStore.push(new items (1, "Nike Pro", 119.99, 1, 1, 1, 4.99, getRandowReviews(), "The radiance lives on in the Nike Pro, the b-ball OG that puts a fresh spin on what you know best: crisp leather in an all-white colourway for a statement look on and off the court.", "src/1.png"));
    aStore.push(new items (2, "Adidas Original", 199.99, 10, 5, 1, 4.99, getRandowReviews(), "Low-top buffed leather sneakers in white. Round rubber shell toe in off-white. Tonal lace-up closure. Logo embossed in black and white at padded tongue. Padded collar.", "src/2.png"));
    aStore.push(new items (3, "New Balance", 159.99, 20, 5, 1, 4.99,  getRandowReviews(), "The legacy continues with the perfect blend of cushioning and style in the Made in USA 990v5. Proof that quality still exists, this men’s sneaker looks — and feels — as good on your morning run as it does on the runway.",  "src/3.png"));
    aStore.push(new items (4, "Polo T-Shirt", 19.99, 25, 5, 2, 4.99,  getRandowReviews(), "Curabitur ex felis, luctus vel odio id, cursus feugiat nibh. Praesent at dui quis justo pharetra mattis id non leo.",  "src/4.png"));
    aStore.push(new items (5, "Nike T-Shirt", 21.99, 25, 5, 2, 4.99,  getRandowReviews(), "Nulla blandit odio in pharetra lacinia. Aenean suscipit eget lectus a suscipit. Cras et ante eget nisl iaculis pulvinar.",  "src/5.png"));
    aStore.push(new items (6, "Amazon T-Shirt", 9.99, 25, 5, 2, 4.99,  getRandowReviews(), "Duis aliquet aliquet ipsum, nec mollis sapien dictum ac. Aenean sed ante lacus. Sed elementum quam in magna tempor fermentum. ",  "src/6.png"));
    aStore.push(new items (7, "Levi's Jeans", 59.99, 25, 5, 3, 4.99,  getRandowReviews(), "Vestibulum iaculis vestibulum auctor. Aenean non rhoncus augue.",  "src/7.png"));
    aStore.push(new items (8, "Jack & Jones Jeans", 99.99, 25, 5, 3, 4.99,  getRandowReviews(), "Sed at quam ut sapien malesuada consequat. Ut egestas venenatis libero et elementum. Mauris tincidunt finibus dictum.",  "src/8.png"));
    aStore.push(new items (9, "Amazon Jeans", 12.99, 25, 5, 3, 4.99,  getRandowReviews(), "Duis aliquet mauris vitae dui efficitur, quis volutpat tellus tempor. Phasellus eu posuere ipsum.",  "src/9.png"));
    aStore.push(new items (10, "Champion's Hoodie", 34.99, 100, 10, 4, 4.99,  getRandowReviews(), "Duis sit amet varius magna, nec gravida tortor. Duis pharetra felis nec purus fermentum, finibus gravida ante laoreet.",  "src/10.png"));
    aStore.push(new items (11, "Naruto Hoodie", 69.99, 100, 10, 4, 4.99,  getRandowReviews(), "Nulla sodales fringilla lorem sed ultrices. Aenean egestas et erat ut tempus. ",  "src/11.png"));
    aStore.push(new items (12, "Supreme Hoodie", 15.99, 100, 10, 4, 4.99,  getRandowReviews(), "Morbi molestie accumsan leo, at rutrum velit posuere at.",  "src/12.png"));
    aStore.push(new items (13, "White Socks", 19.99, 100, 20, 5, 4.99,  getRandowReviews(), "Duis consectetur nisi ac pharetra convallis. Aenean ultrices sem eu dui ultrices, vitae bibendum sapien ultricies.",  "src/13.png"));
    aStore.push(new items (14, "Black Socks", 19.99, 100, 20, 5, 4.99,  getRandowReviews(), "Phasellus leo velit, tincidunt et mollis vel, dapibus ut mi.",  "src/14.png"));
    aStore.push(new items (15, "Amazon Socks", 9.99, 100, 20, 5, 4.99,  getRandowReviews(), " Donec vitae nunc vitae ante pretium pulvinar vitae et lacus. Fusce laoreet tristique mi, pretium auctor risus aliquam sed. ",  "src/15.png"));

    // for loop to create currencies global arrays w/ prices
    for (let index = 0; index < aStore.length; index++) {
        // const tempItem = aStore[index];
        const tempPrice = aStore[index]["price"];
        CADprice.push(tempPrice);
        USDprice.push((tempPrice * 0.72).toFixed(2));
        KZTprice.push((tempPrice * 300).toFixed(2));
    }

    currentTime();
    displayStoreItems(typeCategory); 
    displayCartItems();
    displayStoreItemsDetails();
    bootstrapFeatures();
}

function bootstrapFeatures(){ //JQuery functions

    //   $(function () {
    //     $('[data-toggle="popover"]').popover()
    //     })    


    //ACTIVATES AND CREATES POPOVERS WITH "DIV" FROM BUTTON "DATA-DIV"

    $('[data-toggle="popover"]').popover({ //black magic
        html: true,
        trigger: 'click',
        placement: 'top',
        content: function () {
                //var content = $(this).attr("data-popover-content");
                // return $(content).children(".popover_body").html();
                //return $(".popoverLol");
                return $($(this).data('div'));           
            }
      });

}

function displayStoreItems(typeCategory){
    var divOutput = document.getElementById("storeItems");
    divOutput.innerHTML = "";
    for(let index = 0; index < aStore.length; index++){
        if(typeCategory === aStore[index].category || typeCategory === 0){
        
            const tempItem = aStore[index];
            //main div
            var tempCard = document.createElement("div");
            tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
            //tempCard.className = "card text-black bg-light col-lg-auto"; // the reason why I give class name is bootstrap library;
            tempCard.style = "width: 18rem;";
            tempCard.setAttribute("id", "card");
            //tempCard.setAttribute("data-toggle","modal");
            //tempCard.setAttribute("data-target","#exampleModalLong"+index);

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
            detailsButton.className = "btn btn-outline-secondary";
            detailsButton.setAttribute("type","button");
            detailsButton.setAttribute("data-toggle","modal");
            detailsButton.setAttribute("data-target","#exampleModalLong"+index);
            detailsButton.setAttribute("id", "infoBtn");
            detailsButton.innerHTML = "More Info";

            var coolID = "btnAdd" + index;

            //CREATE BUTTON 
            var addToCard = document.createElement("button");
            addToCard.setAttribute("type", "button");
            addToCard.setAttribute("class", "btn btn-outline-dark");
            addToCard.setAttribute("data-toggle", "popover");
            addToCard.setAttribute("title", "How many?");
            addToCard.setAttribute("data-div", `
                <input type="text" value="0" id="inpQnt"/>
                <button type="button" class="btn btn-success" id=${coolID} onclick="addItemToCart()">Add</button>
            
            `) //Black Magic
            addToCard.setAttribute("id","cartBtn");
            addToCard.innerText = "Add to cart";
            

            // $("#btnLess").click(function(){
            //     console.log("minus");
            //     $("#inpQnt").text("3");
            // });
            
            
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
        }
        
    }

    return

}

function addItemToCart(){

    var item = document.getElementById("cartBtn");
    var itemQuantity = document.getElementById("inpQnt");
    console.log("Hi you");

    //get value from input
        

    //push ojbect to array


    aCart.push(new cartItems(item.id, item.price, itemQuantity, item.shippingPrice));

}

// bug fixing function 
function categoryChange(id) {
    typeCategory = id;
    displayStoreItems(id); 
}

// function which creates hidden element (modals (bootstrap)) which related for each store item to show details
function displayStoreItemsDetails() {
    
    var hiddenDivOutput = document.getElementById("hiddenModals");
 
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
        headerDiv.className = 'modal-header';

        var modalTitle = document.createElement('h5');
        modalTitle.className = 'modal-title';
        modalTitle.setAttribute('id', 'exampleModalLongTitle');
        modalTitle.innerText = storeItem.name;

        var xButton = document.createElement('button');
        xButton.setAttribute('type','button');
        xButton.setAttribute('class','close');
        xButton.setAttribute('data-dismiss','modal');
        xButton.setAttribute('aria-label','Close');

        var span = document.createElement('span');
        span.setAttribute('aria-hidden', 'true')
        span.innerText = "x";

        var modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        
        modalBody.innerText = storeItem.description;

        var img = document.createElement('img');
        img.className = 'card-img';
        img.setAttribute('src', storeItem.image);

        var hr0 = document.createElement('hr');

        var price = document.createElement('h4')
        price.innerHTML = "Price: $" + storeItem.price;

        var onstoke = document.createElement('h4');
        onstoke.innerText = "On stoke: " + storeItem.qty;

        var maxPerCstmr = document.createElement('h4');
        maxPerCstmr.innerText = "Max per customer: " + storeItem.maxPerCustomer;

        // switch case for categories because in items object categories are int
        switch (storeItem.category){
            case 1:
                var category = document.createElement('h4');
                category.innerText = "Category: Shoes";
                break;

            case 2:
                var category = document.createElement('h4');
                category.innerText = "Category: T-Shirt";
                break;

            case 3:
                var category = document.createElement('h4');
                category.innerText = "Category: Jeans";
                break;  

            case 4:
                var category = document.createElement('h4');
                category.innerText = "Category: Hoodie";
                break;

            case 5:
                var category = document.createElement('h4');
                category.innerText = "Category: Socks";
                break;
            default:
                var category = document.createElement('h4');
                category.innerText = "Category: Unknows";
        }

        // reviews in modal 
        var reviewsUl = document.createElement('ul');
        var reviewsLi1 = document.createElement('li');
        reviewsLi1.innerText = aStore[index].reviews[0][0] + ": " + aStore[index].reviews[0][1];
        var reviewsLi2 = document.createElement('li');
        reviewsLi2.innerText = aStore[index].reviews[1][0] + ": " + aStore[index].reviews[1][1];
        var reviewsLi3 = document.createElement('li');
        reviewsLi3.innerText = aStore[index].reviews[2][0] + ": " + aStore[index].reviews[2][1];

        var hr1 = document.createElement('hr');

        var modalFooter = document.createElement('div');
        modalFooter.className = "modal-footer";

        var footerBtn = document.createElement('button');
        footerBtn.setAttribute('type', 'button');
        footerBtn.className = "btn btn-secondary";
        footerBtn.setAttribute("data-dismiss", "modal");
        footerBtn.innerText = "Close";

        var footerBtnAddToCart = document.createElement('button');
        footerBtnAddToCart.setAttribute('type', 'button');
        footerBtnAddToCart.className = 'btn btn-primary';
        footerBtnAddToCart.innerText = "Add to Cart";
        footerBtnAddToCart.setAttribute('onclick', 'addToCart()');

                


        hiddenDivOutput.appendChild(mainModalDiv);
        mainModalDiv.appendChild(main2ModalDiv);
        main2ModalDiv.appendChild(contentDiv);
        contentDiv.appendChild(headerDiv);
        headerDiv.appendChild(modalTitle);
        headerDiv.appendChild(xButton);
        xButton.appendChild(span);
        contentDiv.appendChild(modalBody);
        modalBody.appendChild(img);
        modalBody.appendChild(hr0);
        modalBody.appendChild(price);
        modalBody.appendChild(onstoke);
        modalBody.appendChild(maxPerCstmr);
        modalBody.appendChild(category);
        modalBody.appendChild(hr1);
        modalBody.appendChild(reviewsUl);
        reviewsUl.appendChild(reviewsLi1);
        reviewsUl.appendChild(reviewsLi2);
        reviewsUl.appendChild(reviewsLi3);
        contentDiv.appendChild(modalFooter);
        modalFooter.appendChild(footerBtn);
        modalFooter.appendChild(footerBtnAddToCart);
        

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

        var btn = document.getElementsByClassName("btn btn-outline-dark");
        var dlina = btn.length;
        for(var i = 0; i<dlina; i++)
        {
            btn[0].setAttribute("class", "btn btn-outline-light");
        }

        var cardText = document.getElementsByClassName("card-text");
        for(var i = 0; i < dlina - 1; i++)
        {
            cardText[i].style.color = "#FFF";
        }

        var infoBtn = document.getElementsByClassName("btn btn-outline-secondary");
        for(var i=0;i<dlina - 1;i++){
            infoBtn[0].setAttribute("class", "btn btn-outline-info");
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

        var btn = document.getElementsByClassName("btn btn-outline-light");
        var dlina = btn.length;
        for(var i = 0; i<dlina; i++)
        {
            btn[0].setAttribute("class", "btn btn-outline-dark");
        }

        var cardText = document.getElementsByClassName("card-text");
        for(var i = 0; i < dlina - 1; i++)
        {
            cardText[i].style.color = "#000";
        }

        var infoBtn = document.getElementsByClassName("btn btn-outline-info");
        for(var i=0;i<dlina - 1;i++){
            infoBtn[0].setAttribute("class", "btn btn-outline-secondary");
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

// function to create array of review where [0] name and [1] comment
function getRandowReviews() {
    var names = ["Mike","Nick","Slagathor","Rick","Astley","Rock","JW","Pronax", "Adil", "Emily", 'Aisha', 'Kays', 'Jim']; 
    var reviews = ["very good", "satisfied", "I don't like it", "Shipping was very long", "excellent quality", "I'll buy more!!!!!!", "nah", "****", "5 stars"];
    var reviewObject = [[names[randomNumber(names.length - 1)],reviews[randomNumber(reviews.length - 1)]],[names[randomNumber(names.length - 1)],reviews[randomNumber(reviews.length - 1)]],[names[randomNumber(names.length - 1)],reviews[randomNumber(reviews.length - 1)]]];
    return reviewObject;
}



function displayCartItems() {
    var divCart = document.getElementById("cartItems");

    for (let index = 0; index < aCart.length; index++) {
        const element = aCart[index];
    }
}

function addToCart(){

    var item = document.getElementById("cartBtn");
    var itemQuantity = document.getElementById("qnt");
    console.log("Hi you");
    aCart.push(new cartItems(item.id, item.price, itemQuantity, item.shippingPrice));

}

function changeToCAD() {
    $(document).ready(function(){
        $('#cad').mouseleave(function() {
            $("#dropdownMenuButton1").text('🇨🇦');
        })
    });
    for (let index = 0; index < aStore.length; index++) {
        aStore[index].price = parseFloat(CADprice[index]);
    }
    displayStoreItems(typeCategory);
}

function changeToUSD() {
    $(document).ready(function(){
        $('#usd').mouseleave(function() {
            $("#dropdownMenuButton1").text('🇺🇸');
        })
    });
    for (let index = 0; index < aStore.length; index++) {
        aStore[index].price = parseFloat(USDprice[index]);
    }
    displayStoreItems(typeCategory);
}

function changeToKZT () {
    $(document).ready(function(){
        $('#kzt').mouseleave(function() {
            $("#dropdownMenuButton1").text('🇰🇿');
        })
    });
    for (let index = 0; index < aStore.length; index++) {
        aStore[index].price = parseFloat(KZTprice[index]);
    }
    displayStoreItems(typeCategory);
}
