//Este .js aplica sobre la página NuestrosProductos.html, sobre los botones "Crear cuenta" e "Iniciar sesión" y (por ahora) sobre uno de los productos que figuran en la página

/* Variables */

let crearCuenta = document.getElementById("crearCuenta");
let iniciarSesión = document.getElementById("iniciarSesión");
let agregarACarritoInput0 = document.getElementById("panesDeHamburguesa");
const carrito = [];

/*No está en uso todavía este objeto*/ const productos = [ 
    {
        nombre: "Pan",
        precio: 200,
        descripción: "Pan blanco de molde. Viene por 1 kg",
        cantidad: 0,
        categoría: "panadería",
    },
    {
        nombre: "Pan arabe",
        precio: 300,
        descripción: "Pan arabe. Viene por medio kg",
        cantidad: 0,
        categoría: "panadería",
    },
    {
        nombre: "Pan de hamburguesas",
        precio: 500,
        descripción: "Pan para hamburguesas. Viene por medio kg",
        cantidad: 0,
        categoría: "panadería",
    },
    {
        nombre: "Torta",
        precio: 400,
        descripción: "Bizcochuelo de chocolate con relleno de crema. Viene por porción",
        cantidad: 0,
        categoría: "pastelería",
    },
    {
        nombre: "Galletitas",
        precio: 250,
        descripción: "Galletitas con chips de chocolate. Vienen por unidad",
        cantidad: 0,
        categoría: "pastelería",
    }
];

// Eventos

crearCuenta.addEventListener("click", formularioCrearCuenta);
iniciarSesión.addEventListener("click", formularioIniciarSesión);
agregarACarritoInput0.addEventListener("submit",agregarACarrito0);

/* Funciones */

function agregarACarrito0(e){
    e.preventDefault();
    let agregarPanesDeHamburguesa = e.target;
    productos[0].cantidad = 0;
    productos[0].cantidad = parseInt(agregarPanesDeHamburguesa.children[0].value);
    carrito.push(productos[0]);
    let carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("Detalle comprado",carritoJSON);
    alert("El producto fue añadido al carrito");
}

function formularioCrearCuenta(){
    prompt("Introduzca su mail");
    prompt("Introduzca su nombre y apellido");
}

function formularioIniciarSesión(){
    prompt("Introduzca su mail");
    prompt("Introduzca su contraseña");
}








