// const precioOriginal = 120;
// const descuento = 18;
//anadiendo cupones en la website.
// const cupon = "treinta";
var cupones = { treinta: 30, navidadya: 50, top40: 40, JuanDC_es_Batman: 15 };

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularDescuentoCupon() {
  let descuento = 0;
  const inputCupon = document.getElementById("input-cupon");
  const cuponValue = inputCupon.value;
  //   if (cuponValue === cupon) {
  //     descuento = 30;
  //     console.log(descuento);
  //   } else {
  //     descuento = 0;
  //     console.log(descuento);
  //   }
  for (var c in cupones) {
    if (cuponValue === c) {
      descuento = cupones[c];
    }
  }
  return descuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("input-price");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("input-discount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  const precioConCupon = calcularPrecioConDescuento(
    precioConDescuento,
    calcularDescuentoCupon()
  );
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConCupon;
}
// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
