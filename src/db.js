const sequence = {
    _id: 1,
    get id() {return this.id++}
}

const products = {}

function addProd (prod) {
    if(!prod.id) prod.id = sequence.id
    products[prod.id] = prod
    return prod
}

function getProd (id) {
    return products[id] || {}
}

function getAllProd () {
    return Object.values(products)
}

function deleteProd (id) {
    const prod = products[id]
    delete products[id]
    return prod
}

module.exports = {addProd, getProd, getAllProd, deleteProd}