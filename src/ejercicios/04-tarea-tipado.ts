/*
    ===== Código de TypeScript =====
*/
interface Hero{
    name: string,
    age: number,
    address: Address,
    showAddress: ()=>string
}

interface Address{
    street: string,
    country: string,
    city: string
}

const hero: Hero = {
    name: "Spiderman",
    age: 20,
    address:{
        street: 'Main St',
        country: 'US',
        city: 'NY'
    },
    showAddress(){
        return `${this.name}, ${this.address.street}, ${this.address.country}`;
    }
}

const address = hero.showAddress();

console.log(address);