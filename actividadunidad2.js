var mes = 0 ;

if (mes > 0 && mes < 3){
    console.log("es invierno");
    }
    
    else if (mes >2 && mes < 6) {
    console.log("es primavera");
    } 

else if (mes >5 && mes < 9) {
  console.log("es verano");
}

else if ( mes > 8 && mes < 12) {
  console.log("es otoño");
}

else if (mes === 12){
  console.log ("es invierno");
}
else{
  console.log("no es un mes válido");
  console.log("Jose Manuel Morales Carrera 20007034");
  document.write("Jose Manuel Morales Carrera 20007034");
}


/* otro caso*/

var mes = 10;

switch(mes){
  case 12: 
    console.log("es invierno");
    break;
  case 1: 
    console.log("es invierno");
    break;
  case 2: 
    console.log("es invierno");
    break;
  case 3: 
    console.log("es primavera");
    break;
  case 4: 
    console.log("es primavera");
    break;
  case 5: 
    console.log("es primavera");
    break;
  case 6: 
    console.log("es verano");
    break;
  case 7: 
    console.log("es verano");
    break;
  case 8: 
    console.log("es verano");
    break;
  case 9 : 
    console.log("es otoño");
    break;
  case 10: 
    console.log("es otoño");
    break;
  case 11: 
    console.log("es otoño");
  default: 
    console.log("no es un mes valido");
	console.log("Jose Manuel Morales Carrera 20007034");
	document.write("Jose Manuel Morales Carrera 20007034");