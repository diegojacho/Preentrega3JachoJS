//Initiate variable and constant that we will be use thru the simulation
let endMenu = false
const vinylPrice = 9.99
const albumPrice = 39.99
const turnPrice = 229.99
const shippingCost = 8
const saleTax = 0.06
let cartTotal = 0
let vinylTotal = 0
let albumTotal = 0
let turnTotal = 0


//Constructore classes
class Vinyl{
    constructor(id, artist, title, album, price){
        this.id= id,
        this.artist= artist,
        this.title = title,
        this.album=album,
        this.price = price
    }
    showVinyl(){
        alert(`The record's artist is ${this.artist} and the title is ${this.title} from the album ${this.album} and its price is $${this.price}`)
    }
}

class Tech{
    constructor(id, name, brand, price){
        this.id=id,
        this.name=name,
        this.brand=brand,
        this.price=price
    }
    showTech(){
        alert(`The name of the item is ${this.name} its brand is ${this.brand} and it has a cost of $${this.price}`)
    }
}

class Wish{
    constructor(id, artist, title, album, price){
        this.id=id,
        this.artist=artist,
        this.title=title,
        this.album=album,
        this.price=price
    }
    showWish(){
        alert(`Your wish list contains ${this.artist} its single is ${this.title} from the album ${this.album} and your suggested cost is $${this.price} `)
    }
}
//Calling objets vinyls
const vinyl1= new Vinyl(1, "Miley Cirus", "Decades", "Flowers", 40)
const vinyl2= new Vinyl(2, "Beatles", "Here Comes the Sun", "Abbey Road", 20)
const vinyl3= new Vinyl(3, "One Republic", "Someday", "Human", 60)
const vinyl4= new Vinyl(4, "Kygo", "Love Somebody", "Cloud Nine", 50)
const vinyl5= new Vinyl(5, "Red Hot Chili Peppers", "Snow", "The War", 50)


//Calling objects technologies
const tech1= new Tech(1, "Turntable modern", "Audio-Technica", 100)
const tech2= new Tech(2, "Turntable RT81", "Fluance", 120)
const tech3= new Tech(3, "Turntable ATR45", "Rega", 125)
const tech4= new Tech(4, "Turntable SL-1500C", "Technics", 115)

//Create array for vinyl and tech items 
//Create an empty array for a wishList and searchItem, this will be use to add items and/or filter items 
const catalogVinyl = []
catalogVinyl.push(vinyl1, vinyl2, vinyl3, vinyl4, vinyl5)
const catalogTech=[]
catalogTech.push(tech1, tech2,tech3,tech4)
const wishList=[]
const searchItem=[]

//Declare all functions to use in this simulation, function to go through 1st menu
//Functions to calculate total amount based on the limited budget and finding items by title, album or brand
//Total accounts for sales tax and shipping cost
function addWish(){
    let vinylArtist = prompt("Enter artist name")
    let vinylTitle = prompt("Enter record name")
    let vinylAlbum = prompt("Enter album name")
    let vinylPrice = parseInt(prompt("Enter price"))
    const newWish = new Wish(wishList.length+1, vinylArtist, vinylTitle,
        vinylAlbum, vinylPrice)
        wishList.push(newWish)
    console.log(wishList)
    alert(`Your wish list items are:`)
    wishList.forEach(
        newWish=>newWish.showWish()
    )
}

function checkCatalogVinyl(array){
    alert(`Our available vinyls are:`)
    array.forEach(
        vinyl=>vinyl.showVinyl()
    )
}

function checkCatalogTech(array){
    alert(`Our available tech products are:`)
    array.forEach(
        tech=>tech.showTech()
    )
}

function checkWishList(array){
    alert(`The items in your wish list are:`)
    array.forEach(
        wish=>wish.showWish()
    )
}

function searchByArtist(array){
    let artistSearch = prompt(`What is the name of the artist?`)
    let search = array.find(
        (artista)=>artista.artist.toUpperCase() === artistSearch.toUpperCase()
    )
    searchItem.push(search)
    if (search == undefined){
        alert(`The artist ${artistSearch} is not in our catalog`)
    }else{
        console.log(search)
        alert(`We have the following items from the artist ${artistSearch}:`)
        searchItem.forEach(
            search=>search.showVinyl()
        )
    }
    searchItem.splice(0, searchItem.length)
}

function searchByBrand(array){
    let brandSearch = prompt("What turntable brand you are looking for?")
    let search = array.find(
        (entry)=> entry.brand.toUpperCase() == brandSearch.toUpperCase() 
    )
    searchItem.push(search)
    if (search == undefined){
        alert(`The brand ${brandSearch} is not in our catalog`)
    } else{
        console.log(search)
        alert(`We have the following items from the brand ${brandSearch}:`)
        searchItem.forEach(
            search=>search.showTech()
        )
        searchItem.splice(0, searchItem.length)
    }
}

function lowtoHigh(array){
    const lowHigh = [].concat(array)
    console.log(lowHigh)
    lowHigh.sort((a,b)=> a.price - b.price)
    checkCatalogVinyl(lowHigh)
}

function hightoLow(array){
    const highLow = [].concat(array)
    console.log(highLow)
    highLow.sort((x,y)=> y.price - x.price)
    checkCatalogVinyl(highLow)
}

function order(array){
    let option = parseInt(prompt(`
    1 - Price low to high
    2 - Price high to low
    `))
    switch(option){
        case 1:
            lowtoHigh(array)
        break
        case 2:
            hightoLow(array)
        break
        default:
            alert(`The option ${option} is not valid`)
        break
    }
}

//Updated these functions from PreEntrega1 -> now they used find to get the price and calculate the total
function vinyl(array){
    let itemNumberv = prompt(`Enter title of vinyl to purchase
    Decades
    Here Comes the Sun
    Someday
    Love Somebody
    Snow`)
    let busq = array.find(
        (find) => find.title.toUpperCase() === itemNumberv.toUpperCase()
    )
    let vinylAmount = busq.price
    vinylTotal=(vinylAmount) + (vinylAmount*saleTax) + shippingCost
}

function album(array){
    let itemNumbera = prompt(`Enter title of album to purchase
    Flowers
    Abbey Road
    Human
    Cloud Nine
    The War`)
    let busq = array.find(
        (find) => find.album.toUpperCase() === itemNumbera.toLocaleUpperCase()
    )
    let albumAmount = busq.price
    albumTotal=(albumAmount) + (albumAmount*saleTax) + shippingCost
}

function turntable(array){
    let itemNumbert = prompt(`Enter brand of turntable to purchase
    Audio Technica
    Fluance
    Rega
    Technics`)
    let busq = array.find(
        (find) => find.brand.toLocaleUpperCase() === itemNumbert.toLocaleUpperCase()
    )
    let turnAmount = busq.price
    turnTotal=(turnAmount) + (turnAmount*saleTax) + shippingCost
}

function grandTotal(){
    cartTotal = vinylTotal + albumTotal + turnTotal
    alert(`The total amount to pay is ${cartTotal.toFixed(2)}`)
    console.log(`The total amount to pay is ${cartTotal.toFixed(2)}`)
}

//Ask customer if he is in the USA, if not, message will display that we do not ship internaitonally
let shipping=0;
do{
shipping = parseInt(prompt(`Are you located in the USA?
1 - Yes
2 - No
0 - Close Window`))
    switch (shipping){
        case 1:
            console.log(`${shipping}`)
            alert(`Browse and add items in your shopping cart`)
            endMenu=true
            break
        case 2:
            console.log(`${shipping}`)
            alert(`Sorry, we do not ship internationally but you can still browse and shop our items list locally`)
            endMenu=true
            break
        case 0:
            console.log(`${shipping}`)
            alert(`Thanks for visiting our website`)
            endMenu=true
            break
        default:
            console.log(`${shipping} is not a valid entry`)
            alert(`No valid entry, please select from the ones below`)
            break
    }
} while(!endMenu)

//Loop que primero chequee que el usurario no cerro la ventana
if(shipping!=0){

//Second menu that shows the catalog available, allows costumer to filter and/or find items based on artist name, album, brand
//Also allows to sort items by price (only in the vinyl catalog)
//Option 6 allows to add items to their wishList, items they wish to see in the store, this eventually will be use for shopping cart
let menuVariable=0;
do{
    menuVariable=parseInt(prompt(`Choose an option from the menu:
    1 - Browse Vinyl Catalog
    2 - Browse Turntables Catalog
    3 - Search by Artist
    4 - Search by Brand
    5 - Sort Vinyl and Albums
    6 - Add item you wish to see in our store
    0 - Close Window`))
    switch (menuVariable){
        case 1:
            checkCatalogVinyl(catalogVinyl)
            endMenu=false
        break
        case 2:
            checkCatalogTech(catalogTech)
            endMenu=false
        break
        case 3:
            searchByArtist(catalogVinyl)
            endMenu=false
        break
        case 4:
            searchByBrand(catalogTech)
            endMenu=false
        break
        case 5:
            order(catalogVinyl)
            endMenu=false
        break
        case 6:
            addWish()
            endMenu=false
        break
        case 0:
            alert(`Thanks for browsing our items`)
            endMenu = true
        break
        default:
            console.log(`${menuVariable} is not a valid entry`)
            alert(`No valid entry, please select from the ones below`)
            break
    }
} while(!endMenu)
}

//Ask for budget able to expend in the store
let amountExpent = parseInt(prompt(`What is your maximum budget to expend?`))

//Check if amount is not a number 
while(isNaN(amountExpent)){
    amountExpent = parseInt(prompt(`Please enter a number: What is your maximum budget to expend? `))
}

//Condicional going through amunt enter from customer
if (amountExpent <9.99){
    alert(`Your budget is not enough to purchase an item`)
    console.log(`Amount is not enoguht to continue`)
} else if (amountExpent <=69.99 && amountExpent>=19.99){
    vinyl(catalogVinyl);
    grandTotal();
}
else if (amountExpent >69.99 && amountExpent<=219.99){
    vinyl(catalogVinyl)
    album(catalogVinyl);
    grandTotal();

} else if (amountExpent>219.99){
    vinyl(catalogVinyl);
    album(catalogVinyl);
    turntable(catalogTech);
    grandTotal();
}

