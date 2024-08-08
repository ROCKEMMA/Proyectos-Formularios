// llamando a un node del DOM
let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios";

// lista de datos (String)
let formularios = [
    { nombre: "Login", link: "componentes/login/login.html" },
    { nombre: "Busqueda", link: "componentes/formularioDeBusqueda/fBusqueda.html" },
    { nombre: "Comentarios Reseñas", link: "componentes/formularioDeComentariosReseñas/fResennas.html" },
    { nombre: "Contacto", link: "componentes/formularioDeContacto/fContacto.html" },
    { nombre: "Pedido Compras", link: "componentes/formularioDePedidoCompras/fCompras.html" },
    { nombre: "Registro", link: "componentes/formularioDeRegistro/fRegistro.html" }
];

// forEach (for)
formularios.forEach(itemLista => {

    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);

});

root.appendChild(div_formulario);