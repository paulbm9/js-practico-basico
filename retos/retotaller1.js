/*
En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
La función debe retornar la altura del triángulo.
*/

function alturaTriangulo(l1,l2,l3) {
    let base = 0;
    let h=0;
    
    if(l1===l2 && l2!==l3){
        base = l3;
        h = Math.sqrt((l1*l2)-(base/2*base/2));
    }else if(l2===l3 && l3!==l1){
        base = l1;
        h = Math.sqrt((l2*l3)-(base/2*base/2));
    }else if(l3===l1 && l1!==l2){
        base = l2;
        h = Math.sqrt((l3*l1)-(base/2*base/2));
    }else if(l3===l1 && l1==l2){
        console.log("No es un triangulo isoceles, es Equilatero");
    }else{
        console.log("No es un triangulo isoceles");
    }
    return h;
}
function calcularAlturaTriangulo(){
    const l1 = Number(document.getElementById("input-l1").value);
    const l2 = Number(document.getElementById("input-l2").value);
    const l3 = Number(document.getElementById("input-l3").value);
    const altura = alturaTriangulo(l1,l2,l3);
    alert(`La altura de triangulo es ${altura}`);

}