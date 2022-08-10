//Este .js aplica sobre la página NuestrosProductos.html, sobre los botones "Crear cuenta" e "Iniciar sesión" y sobre los productos que figuran en la página

/* Variables */

let crearCuenta0 = document.getElementById("crearCuenta0");
let iniciarSesión = document.getElementById("iniciarSesión");
let productoEncontrado;
let posiciónProducto1;
let posiciónProducto2;
let nombre;
const carrito = [];
const productos = [{nombre: "Pan de hamburguesas", precio: 500, descripción: "Pan para hamburguesas. Viene por medio kg", cantidad: 0, categoría: "panadería", id1: "panesDeHamburguesa"},
    {nombre: "Pan rústico", precio: 200, descripción: "Pan integral con semillas. Viene por 1 kg", cantidad: 0, categoría: "panadería", id1: "panRústico"},
    {nombre: "Babka de manzana", precio: 500, descripción: "Trenza rellena de manzana. Pesa aproximadamente 0.75 kg", cantidad: 0, categoría: "panadería", id1: "babkaDeManzana"},
    {nombre: "Bollos suizos", precio: 400, descripción: "Bollos azucarados. Vienen por docena", cantidad: 0, categoría: "panadería", id1: "bollosSuizos"},
    {nombre: "Pan lactal", precio: 250, descripción: "Pan de molde lactal. Viene por 1 kg", cantidad: 0, categoría: "panadería", id1: "panLactal"},
    {nombre: "Pan integral", precio: 350, descripción: "Pan de molde integral. Viene por 1 kg", cantidad: 0, categoría: "panadería", id1: "panIntegral"},
    {nombre: "Torta de chocolate", precio: 500, descripción: "Bizcochuelo de chocolate con relleno de buttercream y frutas. Viene por porción", cantidad: 0, categoría: "pastelería", id1: "tortaDeChocolate"},
    {nombre: "Berlinesas", precio: 300, descripción: "Facturas rellenas con dulce de leche o pastelera. Vienen por docena", cantidad: 0, categoría: "panadería", id1: "berlinesas"},
    {nombre: "Bundt cake", precio: 450, descripción: "Torta de vainilla y especias. Viene por unidad", cantidad: 0, categoría: "pastelería", id1: "bundtCake"}];
const agregarACarritoInputArray = [document.getElementById("panesDeHamburguesa"),document.getElementById("panRústico"),document.getElementById("babkaDeManzana"),document.getElementById("bollosSuizos"),document.getElementById("panLactal"),document.getElementById("panIntegral"),document.getElementById("tortaDeChocolate"),document.getElementById("berlinesas"),document.getElementById("bundtCake")];

// Eventos

crearCuenta0.addEventListener("submit", formularioCrearCuenta0);
iniciarSesión.addEventListener("click", formularioIniciarSesión);

/* Funciones */

function eventos(){
    for (i = 0; i < agregarACarritoInputArray.length; i ++) {
        agregarACarritoInputArray[i].addEventListener("submit",agregarACarrito0);
    }
}

eventos();

function agregarACarrito0(e) {
    e.preventDefault();
    let agregarProducto = e.target;
    let idProducto = e.target.id;
    function agregarACarrito1(id) {
        if (carrito.length === 0) {
            posiciónProducto1 = productos.findIndex(nombreProducto => nombreProducto.id1 == id);
            productos[posiciónProducto1].cantidad = parseInt(agregarProducto.children[0].value);
            carrito.push(productos[posiciónProducto1]);
        }
        else {
            productoEncontrado = carrito.findIndex(nombreProducto => nombreProducto.id1 == id);
            if (productoEncontrado != -1) {
                posiciónProducto2 = carrito.findIndex(nombreProducto => nombreProducto.id1 == id);
                carrito[posiciónProducto2].cantidad += parseInt(agregarProducto.children[0].value);
            }
            else {
                posiciónProducto1 = productos.findIndex(nombreProducto => nombreProducto.id1 == id);
                productos[posiciónProducto1].cantidad += parseInt(agregarProducto.children[0].value);
                carrito.push(productos[posiciónProducto1]);
            }
        }
        let carritoJSON = JSON.stringify(carrito);
        localStorage.setItem("Detalle comprado",carritoJSON);
        agregarProducto.children[0].value = "";
        alert("Producto añadido con éxito");
    }
    agregarACarrito1(idProducto);
}

function formularioCrearCuenta0(e) {
    e.preventDefault();
    let crearCuenta2 = document.getElementById("crearCuenta1");
    let crearCuentaBotón = document.getElementById("crearCuentaBotón");
    nombre = crearCuenta2.children[2].value;
    crearCuentaBotón.innerHTML = "Bienvenido, "+ nombre ;
    for (i = 0; i < crearCuenta2.children.length; i ++) {
        crearCuenta2.children[i].value = "";   
    }
    alert("Cuenta creada exitosamente");
}

function formularioIniciarSesión() {
    prompt("Introduzca su mail");
    prompt("Introduzca su contraseña");
}








