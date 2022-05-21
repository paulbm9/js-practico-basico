// const lista1 = [100, 200, 300, 500];

function calcularMediaAritmetica(lista) {
  //   let sumaLista = 0;
  //   for (let i = 0; i < lista.length; i++) {
  //     sumaLista += lista[i];
  //   }
  const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function onClickButtonMediaAritmetica() {
  const num1Value = Number(document.getElementById("input-num1").value);
  const num2Value = Number(document.getElementById("input-num2").value);
  const num3Value = Number(document.getElementById("input-num3").value);
  const num4Value = Number(document.getElementById("input-num4").value);
  let numeros = [];
  numeros.push(num1Value);
  numeros.push(num2Value);
  numeros.push(num3Value);
  numeros.push(num4Value);
  const promedio = calcularMediaAritmetica(numeros);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = `El promedio de los numeros es ${promedio}`;
}
