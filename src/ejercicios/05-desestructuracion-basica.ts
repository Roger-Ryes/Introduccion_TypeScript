/*
    ===== Código de TypeScript =====
*/


// DESESTRUCTURACION DE OBJETOS
console.log("DESESTRUCTURACION DE OBJETOS");
interface Player{
    volume: number,
    second: number,
    song: string,
    detail: Detail
}

interface Detail{
    author: string,
    year: number
}

const player: Player = {
    volume: 90,
    second: 36,
    song: "Verve",
    detail: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


console.log(`El volumen actual es ${player.volume}`);
console.log(`El segundo actual es ${player.second}`);
console.log(`La cancion actual es ${player.song}`);
console.log(`El autor actual es ${player.detail.author}`);
console.log("");

// Desestruracion
const { volume, second, song, detail} = player;
console.log(`El volumen actual es ${volume}`);
console.log(`El segundo actual es ${second}`);
console.log(`La cancion actual es ${song}`);
console.log(`El autor actual es ${detail.author}`);
console.log("");

// Otra Dessetruracion con el objeto
const { year, author } = detail;
console.log(`El autor actual es ${author}`);

// Otra Dessetruracion con el objeto
const { volume:volume1, second:second1, song:song1, detail:{author:author1} } = player;
console.log(`El volumen actual es ${volume1}`);
console.log(`El segundo actual es ${second1}`);
console.log(`La cancion actual es ${song1}`);
console.log(`El autor actual es ${author1}`);
console.log("");



// DESESTRUCTURACION DE ARREGLOS
console.log("\n\nDESESTRUCTURACION DE ARREGLOS");

const dbgt: string[] = ["Goku", "Vegeta", "Trunks"];
const [ c1,, c3 ] = dbgt 
console.log(c3);
