const Contenedor = require('./contenedor');

const producto = new Contenedor('./data.json')

async function enterProd (){
    await producto.save({
        title: ("Hardrock A1"),
        price: (765),
        thumbnail: ("https://assets.specialized.com/i/specialized/121879?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto")
    })
    await producto.save({
        title: ("Rockhopper"),
        price: (965),
        thumbnail: ("https://assets.specialized.com/i/specialized/91520-45_ROCKHOPPER-ELITE-29-CSTBLK-BLK_HERO")
    })


}

function getId (id){
    return producto.getById(id)
}

//enterProd();
console.log(producto.getAll());
//console.log(getId(3))