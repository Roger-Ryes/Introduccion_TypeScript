/*
    ===== Código de TypeScript =====
*/

console.log("GENERICO\n\n");

// Generico
function whatTypeIs<T> (arg:T){
    return arg;
} 

// Generico con retorno specifico
// function whatTypeIs<T>(arg: T): string {
  

let isString = whatTypeIs("Hello world");
let isNumber = whatTypeIs(600);
let isArray = whatTypeIs([21,32,4,2,1]);
let isExplicit = whatTypeIs<number>(20);
