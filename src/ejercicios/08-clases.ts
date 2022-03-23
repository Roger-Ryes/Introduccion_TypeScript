/*
    ===== Código de TypeScript =====
*/

console.log("CLASES BASICAS\n\n");

class NormalPerson{
    constructor(
        public name: string,
        public address: string
    ){}
}

class Heroe extends NormalPerson{
    // FORMA LARGA
        // Por defecto son public
    // public nickname: string;
    // public age: number;
    // public realName: string;

    // constructor(){
    //     this.nickname = nickname;
    //     this.age = age;
    //     this.realName = realName;
    // }

    // FORMA CORTA
    constructor(
        public nickname: string, 
        public age: number, 
        public power?: string, 
        public name: string = "",
        public address: string = "" 
    ){
        super(name, address);
    }
}


const iroman = new Heroe("Ironman", 36, "intelligent");
const spider = new Heroe("Spiderman", 25);

console.log(iroman);
console.log(spider);