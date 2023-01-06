"use strict";
var arregloNumeros;
var arregloCadenas;
arregloNumeros = [1, 2, 3, 4];
arregloCadenas = ["Juanan", "Sofia", "María"];
console.log(arregloNumeros);
console.log(arregloNumeros[0]);
console.log(arregloCadenas);
for (var index = 0; index < arregloCadenas.length; index++) {
    var element = arregloCadenas[index];
    console.log(element);
}
console.log("Otra forma de forEach");
arregloCadenas.forEach(function (element) {
    console.log(element);
});
