const dolar = {
    nombre: "dolar",
    precio: 1,
    lugar: "Estados Unidos",
    alias:"dolares",
}
const euro = {
    nombre: "euro",
    precio: 0.95,
    lugar: "la Unión Europea",
    alias:"euros",
}
const pesoMex = {
    nombre: "peso mexicano",
    precio: 18.35,
    lugar: "México",
    alias:"pesos Mexicanos",
}
const pesoUru = {
    nombre: "peso uruguayo",
    precio: 39.17,
    lugar: "Uruguay",
    alias:"pesos Uruguayos",
}
const yuan = {
    nombre: "yuan",
    precio: 7.20,
    lugar: "China",
    alias:"yuanes",
}
const realBr = {
    nombre: "real",
    precio: 5.18,
    lugar: "Brasil",
    alias:"reales",
}
const pesoArg = {
    nombre: "peso argentino",
    precio: 350.04,
    lugar: "Argentina",
    alias:"pesos",

}
const monedas = [dolar, euro, pesoMex, pesoUru, yuan, realBr, pesoArg]

function convertir (){
    
const primerMoneda = document.getElementById("primer-moneda");
const monedaEleccion1 = document.getElementById("moneda").value;

if ( monedaEleccion1 == "opciones"){
    primerMoneda.innerHTML = "--";
} else if (monedaEleccion1 == "peso-Arg"){
    primerMoneda.innerHTML = "pesos";
}else if (monedaEleccion1 == "dolar"){
    primerMoneda.innerHTML = "dolares";
}else if (monedaEleccion1 == "euro"){
    primerMoneda.innerHTML = "euros";
}else if (monedaEleccion1 == "real-Br"){
    primerMoneda.innerHTML = "reales";
}else if (monedaEleccion1 == "yuan"){
    primerMoneda.innerHTML = "yuanes";
}else if (monedaEleccion1 == "peso-Mex"){
    primerMoneda.innerHTML = "pesos";
}else if (monedaEleccion1 == "peso-Uru"){
    primerMoneda.innerHTML = "pesos";
}

const segundaMoneda = document.getElementById("segunda-moneda");
const monedaEleccion2 = document.getElementById("moneda-2").value;

if ( monedaEleccion2 == "opciones"){
    segundaMoneda.innerHTML = "--";
} else if (monedaEleccion2 == "peso-Arg"){
    segundaMoneda.innerHTML = "pesos";
}else if (monedaEleccion2 == "dolar"){
    segundaMoneda.innerHTML = "dolares";
}else if (monedaEleccion2 == "euro"){
    segundaMoneda.innerHTML = "euros";
}else if (monedaEleccion2 == "real-Br"){
    segundaMoneda.innerHTML = "reales";
}else if (monedaEleccion2 == "yuan"){
    segundaMoneda.innerHTML = "yuanes";
}else if (monedaEleccion2 == "peso-Mex"){
    segundaMoneda.innerHTML = "pesos";
}else if (monedaEleccion2 == "peso-Uru"){
    segundaMoneda.innerHTML = "pesos";
}

const form = document.getElementById("probando");
form.addEventListener("submit", function(event) {
    event.preventDefault();
}
)

let cantidad = document.getElementById("cantidad").value;

const muestra = document.getElementById("resultado");

const boton = document.getElementById("boton");

let resultado;

muestra.innerHTML= "";

const conversor = (a,b,c) => ((a*b)/c).toFixed(2);

if (monedaEleccion1 == "peso-Arg" && monedaEleccion2 == "dolar"){

    resultado = conversor(cantidad, dolar.precio, pesoArg.precio)

    muestra.innerHTML="El resultado es: $" + resultado;
    console.log(resultado)
    boton.
    
}



}