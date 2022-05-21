// const lista1 = [100, 200, 500, 40000000];
// function comparar ( a, b ){ return a - b; };
// lista1.sort(function(a, b) => a - b);
function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// const mitadLista1 = parseInt(lista1.length / 2);
// let mediana = 0;
// if (esPar(lista1.length)) {
//   const elemento1 = lista1[mitadLista1];
//   const elemento2 = lista1[mitadLista1 - 1];
//   mediana = (elemento1 + elemento2) / 2;
// } else {
//   mediana = lista1[mitadLista1];
// }

function calcularMediana(lista) {
  //Esta podria ser otra forma
  //lista,sort(function(a,b){ return a - b;});
  lista.sort((a, b) => a - b);
  const mitadLista = parseInt(lista.length / 2);
  let mediana = 0;
  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];
    mediana = (elemento1 + elemento2) / 2;
  } else {
    mediana = lista[mitadLista];
  }
  return mediana;
}

function onClickButtonMediana() {
  const number1 = Number(document.getElementById("input-num1").value);
  const number2 = Number(document.getElementById("input-num2").value);
  const number3 = Number(document.getElementById("input-num3").value);
  const number4 = Number(document.getElementById("input-num4").value);

  let numeros = [];
  numeros.push(number1);
  numeros.push(number2);
  numeros.push(number3);
  numeros.push(number4);
  const mediana = calcularMediana(numeros);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "La mediana de los numeros ingresados es: " + mediana;
}
