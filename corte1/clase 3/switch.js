let sColor ="BLANCO";
sColor=sColor.toLowerCase();

switch(sColor){
case"blanco":
console.log("Esta es la respuesta");
break;
case"Blanco":
console.log("Esta no es la respuesta");
break;
case"BLANCO":
console.log("Mañana");
break;
case"naranja":
case"Naranja":
case"NARANJA":
console.log("1/2 Dia");
break;
case"amarillo":
case"Amarillo":
case"AMARILLO":
console.log("TARDE");
break;
case"gris":
case"Gris":
case"GRIS":
console.log("Vespertina");
break;
case"negro":
case"Negro":
case"NEGRO":
console.log("NOCHE");
break;
default:
console.log("No eciste esa jornada");
}



