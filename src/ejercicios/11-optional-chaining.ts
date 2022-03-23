/*
    ===== Código de TypeScript =====
*/

console.log("Encadenamiento Opcional\n\n");

// INTERFACE
interface Passenger{
    name: string;
    children?: string[] //Propiedad opcional | Encadenamiento Opcional
}

const pass1: Passenger = {
    name: "Pepe"
}
const pass2: Passenger = {
    name: "Natalia",
    children:["Ben", "Gwen"]
}

// FUNCTION
function printChildren( passenger: Passenger): void {
    const howChildren = passenger.children?.length || 0; // Encadenamiento Opcional
    console.log( howChildren );
}
printChildren(pass1);