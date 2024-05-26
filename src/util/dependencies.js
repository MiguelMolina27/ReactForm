import { LinkedList } from "../models/LinkedList.mjs";
import { Producto } from "../models/Producto";

export const lista = new LinkedList();

export const createProducto = function (woodFinish, name, id, stock, date) {
  const producto = new Producto(woodFinish,name,id,stock,date)
  return producto;
};


