let arregloNumeros: Array<number>;
let arregloCadenas: Array<string>;

arregloNumeros = [1,2,3,4];
arregloCadenas = ["Juanan","Sofia","María"];


console.log(arregloNumeros);
console.log(arregloNumeros[0]);

console.log(arregloCadenas);

for (let index = 0; index < arregloCadenas.length; index++) {
    const element = arregloCadenas[index];
    console.log(element)
    
}
console.log("Otra forma de forEach")
arregloCadenas.forEach(element => {
    console.log(element)
});