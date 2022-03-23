/*
    ===== Código de TypeScript =====
*/

// URL: https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
console.log("DECORADORES\n\n");
// Un decorador es una funcion que expande a la clase

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
      hello = "override";
    };
  }

@reportableClassDecorator
class mySuperClass{
    public myProperty: string = 'ABC123';

    print(){
        console.log("Hello world")
    }
}

console.log(mySuperClass);

const myClass = new mySuperClass();
console.log( myClass.print() );