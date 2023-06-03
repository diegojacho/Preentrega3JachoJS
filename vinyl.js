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

//Declare functions for each item, eventualmente la function usara el numero de items para decir si el budget 
//esta dentro de lo permitido por ahora solo toma el numero y calcula el total, ademas clarifica si no es un numero

function vinyl(){
    let itemNumberv = parseInt(prompt(`How many vinyls do you want?`))
    while (isNaN(itemNumberv)){
        itemNumberv = parseInt(prompt(`Please enter a number, How many vinyls do you want?`))
    }
    let vinylAmount = vinylPrice
    vinylTotal=(vinylAmount*itemNumberv) + (vinylAmount*itemNumberv*saleTax) + shippingCost
}
function album(){
    let itemNumbera = parseInt(prompt(`How many albums do you want?`))
    while (isNaN(itemNumbera)){
        itemNumbera = parseInt(prompt(`Please enter a number, How many albums do you want?`))
    }
    let albumAmount = albumPrice
    albumTotal=(albumAmount*itemNumbera) + (albumAmount*itemNumbera*saleTax) + shippingCost
}

function turntable(){
    let itemNumbert = parseInt(prompt(`How many turntables do you want?`))
    while (isNaN(itemNumbert)){
        itemNumbert = parseInt(prompt(`Please enter a number, How many turntables do you want?`))
    }
    let turnAmount = turnPrice
    turnTotal=(turnAmount*itemNumbert) + (turnAmount*itemNumbert*saleTax) + shippingCost
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
//List of items available
let amountExpent = parseInt(prompt(`List of items available, price does not include sales tax (6%) nor shipping rate ($8):

Vinyl Record The Beatles $19.99
Miley Cirus Album $39.99
Techno8 Turntable $229.99

What is your maximum budget to expend?`))

//if amount is not a number 
while(isNaN(amountExpent)){
    amountExpent = parseInt(prompt(`Please enter a number: What is your maximum budget to expend? `))
}

//Condicional going through amunt enter from customer
if (amountExpent <9.99){
    alert(`Your budget is not enough to purchase an item`)
    console.log(`Amount is not enoguht to continue`)
} else if (amountExpent <=69.99 && amountExpent>=19.99){
    vinyl();
    grandTotal();
}
else if (amountExpent >69.99 && amountExpent<=219.99){
    vinyl()
    album();
    grandTotal();

} else if (amountExpent>219.99){
    vinyl();
    album();
    turntable();
    grandTotal();
}
}
