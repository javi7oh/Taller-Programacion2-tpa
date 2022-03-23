// informacion
console.log("Hola Mundo :D");
//variable declarada

var name;

console.log(typeof name);
//variable declarada e inicializarla

var nombre = "Test1";
console.log(typeof nombre);
console.log("Holaa "+nombre);

//Let y var
if(true){
    let aa="no persiste";
    var bb="persiste";
}
if(typeof aa != 'undefined') console.log("aa "+aa);
console.log("bb "+bb);
//Condicionales

let a = 1;
let b = '2';
let c = 2;


if(b == c){
    console.log("b y c son iguales");
    if(b === c){
        console.log("b y c Poseen el mismo tipo y valor");
    }else{
        console.log("b y c No poseen el mismo tipo y valor");
    }
    if(typeof b == typeof c){
        console.log("b y c  Poseen el mismo tipo");
    }
}

if(a == c){
    console.log("a y c son iguales");
}


if(a != b){
    console.log("a y b son distintos");
}

if(b >= a){
    console.log("b es mayor o igual a a");
}
if(a <= b){
    console.log("a es menor o igual a b");
}

