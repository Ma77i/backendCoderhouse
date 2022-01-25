const fs = require('fs').promises;


class Contenedor {
    constructor(path) {
        this.path = path
        this.list = []
    }


    //: Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    async save(prod) {
        const txt = await fs.readFile(this.path, 'utf8');
        const data = JSON.parse(txt);
        const last = data[data.length - 1]
        data.push({
            id: last.id +1,
            ...prod
        })

        await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf8")
        return last + 1
    }
    //: Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    getById(id) {
        const prods = this.getAll()
        prods.map(item=>item.id === id)
    }
    //: Object[] - Devuelve un array con los objetos presentes en el archivo.
    async getAll() {
        const products = await fs.readFile(this.path, 'utf8')
        const allProds = JSON.parse(products)
        this.list.push(allProds)
    }
    //: void - Elimina del archivo el objeto con el id buscado.
    deleteById(Number) {
    }
    //: void - Elimina todos los objetos presentes en el archivo.
    deleteAll() {

    }
}

module.exports = Contenedor

