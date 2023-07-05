//Constructor classes
class Vinyl{
    constructor(id, artist, title, album, price, image){
        this.id= id,
        this.artist= artist,
        this.title = title,
        this.album= album,
        this.price = price,
        this.image = image
    }
}

//Calling objets vinyls
const vinyl1= new Vinyl(1, "Miley Cirus", "Decades", "Flowers", 39.99, "release3.png")
const vinyl2= new Vinyl(2, "Beatles", "Postal Service", "Abbey Road", 21.99,"release2.png")
const vinyl3= new Vinyl(3, "Kuai Gabino", "Someday", "Human", 59.99,"release1.png")
const vinyl4= new Vinyl(4, "Kygo", "Love Somebody", "Cloud Nine", 51.99,"release4.png")
const vinyl5= new Vinyl(5, "Gorillaz", "Plastic beach", "The War", 59.99,"plastic.webp")
const vinyl6= new Vinyl(6, "Eagles, Don Henley", "Hotel California", "The War", 48.99,"hotel.webp")
const vinyl7= new Vinyl(7, "Bob Marley", "The Best of Bob", "The War", 23.99,"bobmarley.webp")
const vinyl8= new Vinyl(8, "Pink Floyd", "Darkside Moon", "The War", 33.99,"pink.webp")
const vinyl9= new Vinyl(9, "Justin Paul", "La la land", "The War", 24.99,"lalaland.webp")
const vinyl10= new Vinyl(10, "Chris Stapleton", "Traveler", "The War", 38.99,"traveller.webp")
const vinyl11= new Vinyl(11, "Kanye West", "Dropout", "The War", 49.99,"dropout.webp")
const vinyl12= new Vinyl(12, "Lorde", "Melodrama", "The War", 79.99,"melodrama.webp")
const vinyl13= new Vinyl(13, "Led Zeppelin", "Led Zeppelin", "LP", 44.99,"led.webp")
const vinyl14= new Vinyl(14, "John Lennon", "John Lennon", "The War", 58.99,"album8.webp")
const vinyl15= new Vinyl(15, "Lana del Rey", "Lust for Life", "The War", 39.99,"lana.webp")
const vinyl16= new Vinyl(16, "Frank Sinatra", "Sinatra Best", "2 FP", 14.99,"sinatra.webp")

//Create array for vinyl and tech items  
let catalogVinyl = []

if(localStorage.getItem("catalogVinyl")){
    catalogVinyl=JSON.parse(localStorage.getItem("catalogVinyl"))
}else{
    catalogVinyl.push(vinyl1, vinyl2, vinyl3, vinyl4, vinyl5,vinyl6,vinyl7,vinyl8,vinyl9,vinyl10,vinyl11,vinyl12,vinyl13,vinyl14,vinyl15,vinyl16)
    localStorage.setItem("catalogVinyl", JSON.stringify(catalogVinyl))
}