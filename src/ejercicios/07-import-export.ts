/*
    ===== Código de TypeScript =====
*/

import { Product, calculeISV } from "./06-desestructuracion-funcion";


const buyShop: Product[] =
[{
    description: "Telefono 1",
    price: 200
},
{
    description: "Telefono 2",
    price: 150
}];

const [total, isv] = calculeISV(buyShop);
console.log(`total: ${total}, isv: ${isv}`)