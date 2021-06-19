const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista");
  /*Dos métodos para eliminar los elementos hijos
    while (listaEl.firstChild) {
    listaEl.removeChild(listaEl.firstChild);
    ó
  }*/
  listaEl.innerHTML = "";

  function crearUlEl(array) {
    var list = document.querySelector(".lista");
    for (let i = 0; i < array.length; i++) {
      var item = document.createElement("li");
      item.appendChild(document.createTextNode(array[i].tema));
      item.className += array[i].class;
      list.appendChild(item);
    }
    return list;
  }
  crearUlEl(cosasQueAprendimos);
}

main();
