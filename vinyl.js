//Vinyl Record is a website that sells records, and allows a costumer to add/sell their own records
//It filters the catalog by pice, and name. It adds items to the cart or to the wishList.
//The shopping cart calculates the total amount and quantity, it also removes items or empty the entire cart
//Items from the wish list can be moved to the cart and visversa
//For the final I will add the remove from wishlist button and add sales tax and shipping cost to the shopping cart

//Getting DOM from HTML 
let buttonSell = document.getElementById("btnSelllist")
let vinylDiv = document.getElementById("catalogSection")
let seeCatalog = document.getElementById("btnCatalog")
let wishSection = document.getElementById("wishlistSection")
let addVinylBtn = document.getElementById("addVinylBtn")
let searchBar = document.getElementById("searchBar")
let lowHigh= document.getElementById("lowHigh")
let highLow= document.getElementById("highLow")
let ABCorder= document.getElementById("ABCorder")
let addCart = document.getElementById("buttonCart")
let addWish = document.getElementById("btnWishlist")
let btnEmpty = document.getElementById("btnEmpty")
let btnCatalogCart = document.getElementById("btnCatalogCart")
let btnCheckout = document.getElementById("btnCheckout")
let submit = document.getElementById("addVinylBtn")
let productsWish
if(localStorage.getItem("wish")){
    productsWish = JSON.parse(localStorage.getItem("wish"))
} else{
    productsWish=[]
    localStorage.setItem("wish", productsWish)
}

//New Functions for DOM and interactive menu to initiate the website and welcome the constumer, 
//only to keep the first clicks interactive
  function showCart() {
    document.getElementById("catalogSection").style.display = "none";
    document.getElementById("wishlistSection").style.display = "none";
    document.getElementById("sellVinylSection").style.display = "none";
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("shopping-cart").style.display = "flex"
  }
  
  function showWishlist() {
    document.getElementById("catalogSection").style.display = "none";
    document.getElementById("cartSection").style.display = "none";
    document.getElementById("wishlistSection").style.display = "flex";
    document.getElementById("sellVinylSection").style.display = "none";
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("shopping-cart").style.display = "none"

  }
  function showSellVinyl(){
    document.getElementById("catalogSection").style.display = "none";
    document.getElementById("cartSection").style.display = "none";
    document.getElementById("wishlistSection").style.display = "none";
    document.getElementById("sellVinylSection").style.display = "flex";
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("shopping-cart").style.display = "none"

}

//Functions including DOM to show catalog, add vinyls and do all calculations
function showCatalog(array){
    vinylDiv.innerHTML=``
    document.getElementById("catalogSection").style.display = "flex";
    document.getElementById("cartSection").style.display = "none";
    document.getElementById("wishlistSection").style.display = "none";
    document.getElementById("sellVinylSection").style.display = "none";
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("shopping-cart").style.display = "none"

    for (let vinyl of array){
        let newVinylDiv = document.createElement("div")
        newVinylDiv.className = "col-12 col-md-6 col-lg-3 col-sm-6 my-2 justify-content-md-center"
        newVinylDiv.innerHTML = `<div id="${vinyl.id}" class="card col d-flex" style="width: 15rem;float: none;margin: 0 auto;">
                                   <img class="card-img-top img-fluid" style="height: 100%; float: none;margin: 0 auto;width:100%"src="assets/${vinyl.image}" alt="${vinyl.title} by ${vinyl.artist}">
                                   <div class="card-body text-center">
                                      <h4 class="card-title">${vinyl.title}</h4>
                                      <p>Artist: ${vinyl.artist}</p>
                                      <p>Album: ${vinyl.album}</p>
                                      <p class="price-item">Price: $<span>${vinyl.price}</span></p>
                                      <div class="cart-action">
						              <input type="text" class="product-quantity" name="quantity" value="1" size="2"/>
                                      <button id="buttonCart${vinyl.id}" value="Add to Cart" class="add-to-cart btn btn-outline-success" onClick="addToCart(this)">Add to Cart</button>
					                  </div>
                                      <button id="buttonWish${vinyl.id}" class="btn btn-outline-success">Add to WishList <i class="fa fa-heart-o" aria-hidden="true"></i></button>
                                   </div>
                                </div>`
        vinylDiv.appendChild(newVinylDiv)
        let addBtnWish = document.getElementById(`buttonWish${vinyl.id}`)
        addBtnWish.addEventListener("click", ()=>{
            addToWish(vinyl)
        })
     }
}

function addVinyl(array){
    let titleAdd = document.getElementById("titleInput")
    let artistAdd = document.getElementById("artistInput")
    let albumAdd = document.getElementById("albumInput")
    let priceAdd = document.getElementById('priceInput')

    //Included this part to validate the entry (input) it will not add the vinyl untill all inputs are filled
    if(titleAdd.value && artistAdd.value && albumAdd.value && priceAdd.value){
    const vinylNew = new Vinyl(array.length+1, titleAdd.value, artistAdd.value, albumAdd.value, priceAdd.value, "vinylsell.jpeg");
    array.push(vinylNew);
    localStorage.setItem("catalogVinyl", JSON.stringify(array));
    showCatalog(array);
    titleAdd.value = "";
    artistAdd.value = "";
    albumAdd.value = "";
    priceAdd.value = "";
    } else {
    let nameError = document.getElementById("nameErrort");
    let nameErrora = document.getElementById("nameErrora");
    let nameErrorb = document.getElementById("nameErrorb");
    let nameErrorp = document.getElementById("nameErrorp");
    nameError.classList.add("visible");
    nameErrora.classList.add("visible");
    nameErrorb.classList.add("visible");
    nameErrorp.classList.add("visible");
    titleAdd.classList.add("invalid");
    artistAdd.classList.add("invalid");
    albumAdd.classList.add("invalid");
    priceAdd.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
    nameErrora.setAttribute("aria-hidden", false);
    nameErrora.setAttribute("aria-invalid", true);
    nameErrorb.setAttribute("aria-hidden", false);
    nameErrorb.setAttribute("aria-invalid", true);
    nameErrorp.setAttribute("aria-hidden", false);
    nameErrorp.setAttribute("aria-invalid", true);
    } 
}

function searchingBar(search, array){
    let searchName = array.filter(
        (artista)=>artista.artist.toUpperCase().includes(search.toUpperCase())||
            artista.title.toUpperCase().includes(search.toUpperCase())
    )
    let noMatch = document.createElement("div")
    noMatch.className = "d-flex"
    if (searchName.length == 0){
        noMatch.innerHTML = `<h3>There are not matches to the search: ${search}. </h3>`
        showCatalog(searchName)
    }else{
       noMatch.innerHTML = ``
       showCatalog(searchName)
    }
    vinylDiv.appendChild(noMatch)
}

function lowtoHigh(array){
    const lowHigh = [].concat(array)
    lowHigh.sort((a,b)=> a.price - b.price)
    showCatalog(lowHigh)
}

function hightoLow(array){
    const highLow = [].concat(array)
    highLow.sort((x,y)=> y.price - x.price)
    showCatalog(highLow)
}

function AbcOrder (array){
    const arrayABC = [].concat(array)
    arrayABC.sort ((a,b)=>{
        if (a.title>b.title){
            return 1
        }
        if (a.title <b.title){
            return -1
        }
        return 0
    })
    showCatalog(arrayABC)
}

function addToCart(element) {
    let productParent = element.closest('.card-body');
    let priceElement = productParent.querySelector('.price-item span');
    let productNameElement = productParent.querySelector('.card-title');
    let quantityElement = productParent.querySelector('.product-quantity');

    let price = priceElement.textContent;
    let productName = productNameElement.textContent;
    let quantity = quantityElement.value;

    let cartArray = [];
    // If the shopping cart in local storage is not empty
    if (localStorage.getItem('shopping-cart')) {
        cartArray = JSON.parse(localStorage.getItem('shopping-cart'));
    }
    // Check if the same product is already in the cart
    let existingItemIndex = cartArray.findIndex(item => {
        let cartItem = JSON.parse(item);
        return cartItem.productName === productName;
    });

    if (existingItemIndex !== -1) {
        // Item already exists in the cart, increase the quantity
        let existingItem = JSON.parse(cartArray[existingItemIndex]);
        existingItem.quantity = parseInt(existingItem.quantity) + parseInt(quantity);
        cartArray[existingItemIndex] = JSON.stringify(existingItem);
    } else {
        let cartItem = {
            productName: productName,
            price: price,
            quantity: quantity
        };
        cartArray.push(JSON.stringify(cartItem));
    }

    let cartJSON = JSON.stringify(cartArray);
    localStorage.setItem('shopping-cart', cartJSON);
    showCartTable();
}

function emptyCart() {
	if (localStorage.getItem('shopping-cart')) {
		// Clear JavaScript localStorage by index, the entire cart is erase
		localStorage.removeItem('shopping-cart');
		showCartTable();
	}
}

function showCartTable() {
	let cartRowHTML = '';
	let itemCount = 0;
	let grandTotal = 0;
	let price = 0;
	let quantity = 0;
	let subTotal = 0;

	if (localStorage.getItem('shopping-cart')) {
		let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
		//Iterate javascript shopping cart array
		shoppingCart.forEach((item)=> {
			let cartItem = JSON.parse(item);
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity)
			subTotal = price * quantity
            itemCount += quantity
			cartRowHTML += '<tr>' +
            '<td>' + '<button id="deleteItem" class="remove-button" ><i class="fa fa-trash" onclick="removeItem(this)" aria-hidden="true"></i></button> ' +
            cartItem.productName + '</td>' +
				"<td id='itemPrice' class='text-right'>$" + price.toFixed(2) + "</td>" +
				"<td id='itemQuantity'class='text-right'>" + quantity + "</td>" +
				"<td id='itemSubtotal' class='text-right'>$" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
		});
	}
	document.getElementById('cartTableBody').innerHTML = cartRowHTML;
    document.getElementById('itemCount').textContent = itemCount;
    document.getElementById('totalAmount').textContent = "$" + grandTotal.toFixed(2);
}

function removeItem(element) {
    let row = element.closest('tr');
    let productName = row.querySelector('td:first-child').textContent.trim();
  
    let cartArray = [];
    if (localStorage.getItem('shopping-cart')) {
      cartArray = JSON.parse(localStorage.getItem('shopping-cart'));
    }
  
    let itemIndex = cartArray.findIndex((item) => {
      let cartItem = JSON.parse(item);
      return cartItem.productName === productName;
    });
  
    // Check if the item has more than 1 quantity and removes quantity until 0, then removes the entire row
    if (itemIndex !== -1) {
      let cartItem = JSON.parse(cartArray[itemIndex]);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        cartArray[itemIndex] = JSON.stringify(cartItem);
      } else {
        cartArray.splice(itemIndex, 1);
      }
  
      let cartJSON = JSON.stringify(cartArray);
      localStorage.setItem('shopping-cart', cartJSON);
      showCartTable();
    }
  }

  function addToWish(vinyl){
    let vinylAdded = productsWish.find((elem)=>elem.id == vinyl.id)
    if (vinylAdded == undefined){
        productsWish.push(vinyl)
        localStorage.setItem("wish",JSON.stringify(productsWish))
    } else{
        alert(`Item is in your Wish List`)
    }
}

function cardToWish(array){
    wishSection.innerHTML = ``
    array.forEach((productsWish)=>{
        wishSection.innerHTML += `
        <div > 
        <div class="card col d-flex" style="width: 15rem;float: none;margin: 0 auto; id ="productoCarrito${productsWish.id}">
                 <img class="card-img-top img-fluid" style="height: 100%; float: none;margin: 0 auto;width:100%" src="assets/${productsWish.image}" alt="">
                 <div class="card-body text-center">
                        <h4 class="card-title">${productsWish.title}</h4>
                        <p class="card-text">${productsWish.artist}</p>
                         <p class="price-item">$<span>${productsWish.price}</span></p> 
                         <input type="text" class="product-quantity" name="quantity" value="1" size="2"/>
                         <button class="btn btn-outline-success" id="botonMove${productsWish.id}" onClick="addToCart(this)">Move to Cart</button>
                 </div>    
            </div>
       </div>`
    })
}

//Calling EVENTS, a couple of other events I added them direcly on the button using onclick, hope that is okay
buttonSell.addEventListener("click", (event) =>{
    event.preventDefault()
    showSellVinyl()
})

seeCatalog.addEventListener("click", () =>{
    showCatalog(catalogVinyl)
})

addVinylBtn.addEventListener("click", function (event){
    event.preventDefault()
    addVinyl(catalogVinyl)
})

lowHigh.addEventListener("click", ()=>{
    lowtoHigh(catalogVinyl)
})

highLow.addEventListener("click",()=>{
    hightoLow(catalogVinyl)
})

ABCorder.addEventListener("click",()=>{
    AbcOrder(catalogVinyl)
})

searchBar.addEventListener("input", ()=>{
    searchingBar(searchBar.value ,catalogVinyl)
})

btnEmpty.addEventListener("click",()=>{
    emptyCart()
})

btnCatalogCart.addEventListener("click", ()=>{
    showCatalog(catalogVinyl)
})

btnCheckout.addEventListener("click", ()=>{
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if(shoppingCart === null){
        alert(`Your cart is Empty, please browse our catalog`)
    } else{
        alert('Thanks for your purchase')
    }
})

addWish.addEventListener("click", ()=>{
    cardToWish(productsWish)
})