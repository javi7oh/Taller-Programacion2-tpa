console.log("Ejercicio Parte 1");
let lista = [
    "hola", 
    123,
    false,
    undefined,
    null,
    "final",
];


for (let index = 0; index < lista.length; index++) {
    console.log(typeof lista[index]);
}
console.log("Ejercicio Parte 2");
let lista2 = [
    "hola", 
    "holas",
    "Impar",
    "Par.",
    "Muchos",
    "Mucho",
    "Caracteres",
];


for (let index = 0; index < lista2.length; index++) {
    lista2[index].length % 2 != 0 ? console.log(lista2[index]) : null ;
}