const galerias = {
  golden: [
    "img/golden1.jpg",
    "img/golden2.jpg",
    "img/golden3.jpg",
    "img/golden4.jpg"
  ],
  pastor: [
    "img/pas1.jpg",
    "img/pas2.jpg",
    "img/pas3.jpg",
    "img/pas4.jpg"
  ],
  sanbernardo: [
    "img/san1.jpg",
    "img/san2.jpg",
    "img/san3.jpg",
    "img/san4.jpg"
  ],
  mastin: [
    "img/mastin1.jpg",
    "img/mastin2.jpg",
    "img/mastin3.jpg",
    "img/mastin4.jpg"
  ],
  doberman: [
    "img/d1.jpg",
    "img/d2.jpg",
    "img/d3.jpg",
    "img/d4.jpg"
  ]
};

const posiciones = {
  golden: 0,
  pastor: 0,
  sanbernardo: 0,
  mastin: 0,
  doberman: 0
};

function cambiarFoto(raza, direccion) {
  const lista = galerias[raza];
  posiciones[raza] = posiciones[raza] + direccion;

  if (posiciones[raza] >= lista.length) {
    posiciones[raza] = 0;
  }
  if (posiciones[raza] < 0) {
    posiciones[raza] = lista.length - 1;
  }

  document.getElementById("foto-" + raza).src = lista[posiciones[raza]];
  document.getElementById("contador-" + raza).textContent = (posiciones[raza] + 1) + " de " + lista.length;
}

function moverTarjetas(idCarrusel, distancia) {
  const carrusel = document.getElementById(idCarrusel);
  carrusel.scrollLeft += distancia;
}