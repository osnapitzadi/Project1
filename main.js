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

//current time date
function currentTime() {
    var date = new Date(); // creating object of Date 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var fulldate = date.toDateString();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("time").innerText = fulldate + " " + hour + " : " + min + " : " + sec; // adding time to the div
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
        const tempPrice = aStore[index]["price"];
        CADprice.push(tempPrice);
        USDprice.push((tempPrice * 0.72).toFixed(2));
        KZTprice.push((tempPrice * 300).toFixed(2));
    }

    // calling this function because of jQuery
    changeToKZT();
    changeToUSD();
    changeToCAD();

    currentTime();
    displayStoreItems(typeCategory); 
    displayCartItems();
    displayStoreItemsDetails();
    bootstrapFeatures();
}

    
//JQuery functions
function bootstrapFeatures(){ 
    // this jQuery function creates pop up div element on click "Add Item"
    $('[data-toggle="popover"]').popover({ //black magic
        html: true,
        trigger: 'click',
        placement: 'top',
        content: function () {
                return $($(this).data('div'));           
            }
      });

      $('body').on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            // hide any open popovers when the anywhere else in the body is clicked or inner button 'add'
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0 || $(e.target).is('.add')) {
                $(this).popover('hide');
            }
        });
    }); // need to call in init() for proper function
}

function displayStoreItems(typeCategory){ // parament to check which category was opened last and prevent massive code with a 6 if statement :)
    var divOutput = document.getElementById("storeItems"); 
    divOutput.innerHTML = "";
    for(let index = 0; index < aStore.length; index++){ 
        if(typeCategory === aStore[index].category || typeCategory === 0){
        
            const tempItem = aStore[index];
            //main div
            var tempCard = document.createElement("div");
            tempCard.className = "card col-lg-auto"; // the reason why I give class name is bootstrap library;
            tempCard.style = "width: 18rem;";
            tempCard.setAttribute("id", "card");

            // card 
            var cardImg = document.createElement("IMG");
            cardImg.className = "card-img-top";
            cardImg.setAttribute('src', tempItem.image);
            cardImg.setAttribute("data-toggle","modal");
            cardImg.setAttribute("data-target","#exampleModalLong"+index);

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

            // button 'add to cart' with unique id 
            var addToCard = document.createElement("button");
            addToCard.setAttribute("type", "button");
            addToCard.setAttribute("class", "btn btn-outline-dark");
            addToCard.setAttribute("id","cartBtn" + index);

            // creates popover data for jQuery which triggers by bootstrapFeatures()
            addToCard.setAttribute("data-toggle", "popover");
            addToCard.setAttribute("title", "How many?");
            addToCard.setAttribute("data-div", `
                <input type="text" value="1" id="inpQnt${index}")/>
                <button type="button" class="btn btn-success add" id=${coolID} onclick="addItemToCart(id);">Add</button>
            
            `) //Black Magic
            addToCard.innerText = "Add to cart";
            
            
            
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
    bootstrapFeatures();
    return

}


function addItemToCart(id){
    
    var itemId = parseInt(id.slice(6)); // getting last char of string to get index
    console.log(itemId);
    var quantity = parseInt(document.getElementById("inpQnt" + itemId).value); // takes value from input in popover
    var checker = 0; // checher for validations

    // validations
    if(Number.isInteger(quantity)){
        checker++;
        
    } else {
        alert("Please insert the number");
    }
    
    if(quantity > aStore[itemId].maxPerCustomer || quantity > aStore[itemId].qty){
        alert("Sorry, we don't have this much :(");
    } else{
        checker++;
    }

    if(checker === 2){
        aCart.push(new cartItems(itemId, aStore[itemId].price, quantity, aStore[itemId].shippingPrice)); // add element to cart array
        aStore[itemId].qty = aStore[itemId].qty - quantity; // to prevent add more than possible on stoke
        aStore[itemId].maxPerCustomer = aStore[itemId].maxPerCustomer - quantity; // to prevent add more than more customes
        alert('Item has been successfully added');
    }

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

        var coolID = "btnAdd" + index;

        var mainModalDiv = document.createElement("div");
        mainModalDiv.className = "modal fade";
        mainModalDiv.setAttribute("id", "exampleModalLong"+index);
        //mainModalDiv.setAttribute("tabindex", "-1");
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


        //ADD TO CART IN FOOTER
        var footerBtnAddToCart = document.createElement('button');
        footerBtnAddToCart.setAttribute('type', 'button');
        footerBtnAddToCart.setAttribute("class",'btn btn-primary');
        //footerBtnAddToCart.setAttribute('onclick', 'addToCart()');
        
        //POPOVER
        footerBtnAddToCart.setAttribute("data-toggle", "popover");
        footerBtnAddToCart.setAttribute("title", "How many?");
        footerBtnAddToCart.setAttribute("data-div", `
        <input type="text" value="1" id="inpQnt${index}")/>
        <button type="button" class="btn btn-success" id=${coolID} onclick="addItemToCart(id)">Add</button>
        
        `) //Black Magic
        footerBtnAddToCart.innerText = "Add to Cart";
        
        //ACTIVATE ELEMENTS TO HTML
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
    if(document.getElementById("customSwitch1").checked == true){ // dark mode
    document.getElementById("storeName").style.color="#FFF";
    document.body.style.background = "#363636";
    document.getElementById("mainNavbar").className = "navbar navbar-expand-lg navbar-dark bg-dark";
    document.getElementById("time").style.color = "#FFF";
    document.getElementById("modeLabel").style.color = "#FFF";
    document.getElementById("modeLabel").innerHTML = "Light mode";
    document.getElementById("contactUs").style.color = "#FFF";
    document.getElementById("contact").style.color = "#FFF";

    var table = document.getElementsByTagName("table");
        for (let index = 0; index < table.length; index++) {
            table[index].style.background = "#404040";
            table[index].style.color = "white";
        }
    var hiddenmodals = document.getElementsByClassName("modal-content");
        for (let index = 0; index < hiddenmodals.length; index++) {
            hiddenmodals[index].style.background = "#404040";
            hiddenmodals[index].style.color = "white";
        }
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



    } else { // light mode
        document.getElementById("storeName").style.color="black";
        document.body.style.background = "#FFF";
        document.getElementById("mainNavbar").className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById("time").style.color = "#000";
        document.getElementById("modeLabel").style.color = "#000";
        document.getElementById("modeLabel").innerHTML = "Dark mode";
        document.getElementById("contactUs").style.color = "black";
        document.getElementById("contact").style.color = "black";

        var table = document.getElementsByTagName("table");
        for (let index = 0; index < table.length; index++) {
            table[index].style.background = "white";
            table[index].style.color = "black";
        }

        var hiddenmodals = document.getElementsByClassName("modal-content");
        for (let index = 0; index < hiddenmodals.length; index++) {
            hiddenmodals[index].style.background = "white";
            hiddenmodals[index].style.color = "black";
        }

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

// dinamic changing title 
setInterval(function(){
    currentWord++;
    if(currentWord >= words.length)
    {
        currentWord = 0;
    }
    document.getElementById("storeName").innerHTML = words[currentWord];
}, 3000); // callback 3 sec

// random nuber function from 0 to "max"
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


// function which creates DOM elements in hidden modal 
function displayCartItems() {
    var divCart = document.getElementById("cartPrint");
    if (aCart.length === 0) {
        divCart.innerHTML = "Cart is empty";
    } else { 
        divCart.innerHTML = '';
        // head of cart
        var thead = document.createElement('thead');
        var tr0 = document.createElement('tr');
        var th0 = document.createElement('th');
        th0.setAttribute('scope','col');
        th0.setAttribute('id','th0');
        // th0.className = "d-none d-sm-block";
        th0.innerText = '';
        var product = document.createElement('th');
        product.setAttribute('scope','col');
        product.innerText = 'Product';
        var price = document.createElement('th');
        price.setAttribute('scope','col');
        price.innerText = 'Price';
        var headQty = document.createElement('th');
        headQty.setAttribute('scope','col');
        headQty.innerText = 'Qty';
        var subtotal = document.createElement('th');
        subtotal.setAttribute('scope','col');
        subtotal.innerText = 'Subtotal';

        divCart.appendChild(thead);
        thead.appendChild(tr0);
        tr0.appendChild(th0);
        tr0.appendChild(product);
        tr0.appendChild(price);
        tr0.appendChild(headQty);
        tr0.appendChild(subtotal);

        for (let index = 0; index < aCart.length; index++) {
            if (aCart[index].qty == 0) {
                aCart.splice(index,1);
                index--;
            } else {
                const element = aCart[index];

                // printing all items to cart from aCart
                var tbody = document.createElement('tbody');

                var tr = document.createElement('tr');

                var tdW25 = document.createElement('td');
                tdW25.className = "w-25";

                var img = document.createElement('img');
                img.setAttribute('src',aStore[element.id].image);
                img.className = 'img-fluid img-thumbnail';

                var tdName = document.createElement('td');
                tdName.innerText = aStore[element.id].name;

                var tdPrice = document.createElement('td');
                tdPrice.innerText = "$" + aStore[aCart[index].id].price;

                var tdQty = document.createElement('td');
                tdQty.className = 'qty';

                var qtyInput = document.createElement("input");
                qtyInput.setAttribute("class","form-control");
                qtyInput.setAttribute('type','text');
                // adding onclick atr with id to each items input to get value and update subtotal
                qtyInput.setAttribute('onchange',`qtyChange(${index},document.getElementById("qtyInputId"+${index}).value);`);
                qtyInput.setAttribute('id','qtyInputId'+index);
                qtyInput.setAttribute('value', aCart[index].qty);

                divCart.appendChild(tbody);
                tbody.appendChild(tr);
                tbody.appendChild(tdW25);
                tdW25.appendChild(img);
                tbody.appendChild(tdName);
                tbody.appendChild(tdPrice);
                tbody.appendChild(tdQty);
                tdQty.appendChild(qtyInput);
                
                var tdTotal = document.createElement('td');
                tdTotal.innerText = "$" + (aStore[aCart[index].id].price * (document.getElementById('qtyInputId'+index).value)).toFixed(2);
                tdTotal.className = 'subtotal';
                
                tbody.appendChild(tdTotal);
            } //end if 
        } // end for loop
        // check after deleting all items from cart
        if (aCart.length === 0) {
            divCart.innerHTML = "Cart is empty";
        }
    } // end of if
    subtotalCalculator();
}

function qtyChange (i,x) {
    aCart[i].qty = x;
    displayCartItems();
    subtotalCalculator();
}

function subtotalCalculator() {

    //variables for readable code and better practice with DOM elements
    var subtotals = document.getElementsByClassName("subtotal");
    var cartSubtotal = document.getElementById("cartSubtotal");
    var cartShipping = document.getElementById('cartShipping');
    var cartTax = document.getElementById('cartTax');
    var cartTotal = document.getElementById('cartTotal');

    var subtotal = 0;
    var shippingPriceCart = 0;
    const HTS_TAX = 0.13;

    for (let index = 0; index < subtotals.length; index++) { // an array of all elements in cart with class subtotal 
        var element = subtotals[index].innerText; 
        var floatElement = parseFloat(element.slice(1)); // cuting $ sign 
        subtotal += floatElement; // sum of numbers 
    }

    for (let index = 0; index < aCart.length; index++) {
        const shippingPrice = aCart[index].shippingPrice; 
        shippingPriceCart += shippingPrice;// all shipping prices in cart
    }

    cartSubtotal.innerHTML = "$" + subtotal.toFixed(2); // output of subtotal
    cartShipping.innerHTML = '$' + shippingPriceCart.toFixed(2); // output of sum of shipping price
    cartTax.innerHTML = (subtotal * HTS_TAX).toFixed(2); // tax amount
    cartTotal.innerHTML = '$' + (subtotal + (subtotal * HTS_TAX)+shippingPriceCart).toFixed(2); // final total


}


function changeToCAD() {
    // this is jQuery function which track event "click" to change text in dropdown menu to CAD
    $(document).ready(function(){
        $('#cad').click(function() {
            $("#dropdownMenuButton1").text('🇨🇦');
        })
    }); // need to call this function in init() for proper work 
    for (let index = 0; index < aStore.length; index++) {
        aStore[index].price = parseFloat(CADprice[index]);
    }
    displayStoreItems(typeCategory); // for update currencies in html 
}

function changeToUSD() {
    // this is jQuery function which track event "click" to change text in dropdown menu to USD
    $(document).ready(function(){
        $('#usd').click(function() {
            $("#dropdownMenuButton1").text('🇺🇸');
        })
    }); // need to call this function in init() for proper work 
    for (let index = 0; index < aStore.length; index++) {
        aStore[index].price = parseFloat(USDprice[index]);
    }
    displayStoreItems(typeCategory); // for update currencies in html 
}

function changeToKZT () {
    // this is jQuery function which track event "click" to change text in dropdown menu to KAZ
    $(document).ready(function(){
        $('#kzt').click(function() {
            $("#dropdownMenuButton1").text('🇰🇿'); 
        })
    }); // need to call this function in init() for proper work 
    for (let index = 0; index < aStore.length; index++) {
        aStore[index].price = parseFloat(KZTprice[index]); 
    }
    displayStoreItems(typeCategory); // for update currencies in html 
}