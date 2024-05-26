export class Producto {
    #woodFinish
    #name
    #id
    #stock
    #date

    constructor(woodFinish,name,id,stock,date){
        this.#woodFinish = woodFinish
        this.#name = name
        this.#id = id
        this.#stock = stock
        this.#date = date
    }

    getWoodFinish(){
        return this.#woodFinish
    }
    getName(){
        return this.#name
    }
    getId(){
        return this.#id
    }
    getStock(){
        return this.#stock
    }
    getDate(){
        return this.#date
    }
}