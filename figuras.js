// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: "+areaCuadrado+"cm^2");

console.groupEnd();
// Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: "+ladoTriangulo1+"cm, "+ladoTriangulo2+"cm y "+baseTriangulo+"cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: "+alturaTriangulo+"cm");

function perimetroTriangulo(lado1, lado2, base) {
  return Number(lado1) + Number(lado2) + Number(base);
}
// console.log("El perimetro del triangulo mide es: "+perimetroTriangulo+"cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El area del triangulo es: "+areaTriangulo+"cm^2");
console.groupEnd();

// Codigo del circulo
console.group("Circulos");
// const radioCirculo = 4;
// console.log("El radio del circulo es :"+radioCirculo+"cm");
function diametroCirculo(radio) {
  return radio * 2;
}
const PI = Math.PI;
// console.log("PI es :"+PI);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("input-cuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("input-cuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
function calcularPerimetroTriangulo() {
  const l1 = document.getElementById("input-triangulo-lado1").value;
  const l2 = document.getElementById("input-triangulo-lado2").value;
  const base = document.getElementById("input-triangulo-base").value;
  const perimetro = perimetroTriangulo(l1, l2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const base = document.getElementById("input-triangulo-base").value;
  const altura = document.getElementById("input-triangulo-altura").value;
  const area = areaTriangulo(base, altura);
  alert(area);
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById("input-circulo").value;
  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radio = document.getElementById("input-circulo").value;
  const area = areaCirculo(radio);
  alert(area);
}
