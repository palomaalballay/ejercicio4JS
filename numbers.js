//- Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 165;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMts = 1.658;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 60.05;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let redAltMts = `${alturaMts.toFixed(1)}`;
console.log(redAltMts);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let redPesoKg = `${pesoKg.toFixed(0)}`;
console.log(redPesoKg)

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript// 

var numero = max + 1;

if (numero > max) {
    numero = max;
    console.log(numero)
}
