/*
    ===== Código de TypeScript =====
*/
// console.log("variables");

let skills: string[] = ["Bash", "Counter", "Healing"];
skills.push("1");

interface Costumers {
    nombre: string;
    hp: number;
    skill: string[];
    nativeCountry?: string; // ? --> indica que es opcional
}

const costumer: Costumers = {
    nombre: "Strider",
    hp: 10,
    skill: ["Bash", "Counter"]
}

costumer.nativeCountry = "Pueblo paleta";

console.table(costumer);