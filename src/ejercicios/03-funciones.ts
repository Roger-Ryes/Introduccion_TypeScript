// /*
//     ===== Código de TypeScript =====
// */

// Funcion normal
function sum(a: number, b: number): number{
    return (a + b);
}
// Funcion Flecha
const rest = (c: number, d:number):string => (c - d).toString()

// Primer: Obligatorios, Second: Opcionales(?), Third: PorDefecto
const mult = (num: number, otherNum?:number, base:number=1):number => (num * base)

const resultSum = sum(5, 2);
const resultRest = rest(5, 2);
const resultMult = mult(2, 4);
console.log("resultSum: "+resultSum);
console.log("resultRest: "+resultRest);
console.log("resultMult: "+resultMult);
console.log("resultMult2: "+mult(2));
console.log("resultMult2: "+mult(2,0,10));


// New Example1
interface Costumer{
    name: string;
    pv: number;
    showPV: () => void;
}

const cure = (costumer: Costumer, pointsLive: number):void=>{
    costumer.pv += pointsLive;
    console.log(costumer); 
}

const newConstumer: Costumer = {
    name: "Strider",
    pv: 50,
    showPV(){
        console.log(`Los puntos de vida son ${this.pv}`);
    }
}

cure(newConstumer, 20);
newConstumer.showPV();