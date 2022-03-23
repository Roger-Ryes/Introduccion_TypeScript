/*
    ===== Código de TypeScript =====
*/


export interface Product{
    description: string,
    price: number
}

const phone: Product = {
    description: 'Nokia',
    price: 150
}

const table: Product = {
    description: 'iPad',
    price: 350
}

export const calculeISV = ( product: Product[] ):[number, number] => {
    let result: number = 0;
    // First Method
    /* product.forEach((prod)=> {
        result+= prod.price
    }) */
    // Second Method
    product.forEach(({ price })=> {
        result+= price
    })
    return [result, result*0.12];
}

const purchase: Product[] = [phone, table];
const [total, isv] = calculeISV(purchase);
console.log(`total:${total}, isv: ${isv}`);