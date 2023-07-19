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
const loadVinyls = async ()=>{
    const res = await fetch("vinyl.json")
    const data = await res.json()

    for (let vinyl of data){
        let vinylData = new Vinyl(vinyl.id, vinyl.artist, vinyl.title, vinyl.album, vinyl.price,
            vinyl.image)
            catalogVinyl.push(vinylData)
    }
    localStorage.setItem("catalogVinyl", JSON.stringify(catalogVinyl))
}

//Create array for vinyl and tech items  
let catalogVinyl = []
if(localStorage.getItem("catalogVinyl")){
    catalogVinyl=JSON.parse(localStorage.getItem("catalogVinyl"))
}else{
    loadVinyls()
}

