//Este .js aplica sobre la página NuestrosProductos.html, sobre los botones "Crear cuenta" e "Iniciar sesión" y (por ahora) sobre uno de los productos que figuran en la página

/* Variables */

let crearCuenta = document.getElementById("crearCuenta");
let iniciarSesión = document.getElementById("iniciarSesión");
let panesDeHamburguesa = document.getElementById("panesDeHamburguesa");
let agregarACarritoInput = document.getElementById("agregarACarrito");

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
panesDeHamburguesa.addEventListener("click", objetoAñadidoCarrito);

/* Funciones */

function objetoAñadidoCarrito(){
    agregarACarritoInput.addEventListener("input", agregarACarrito);
    function agregarACarrito(){
        localStorage.setItem("Cantidad",agregarACarritoInput.value);
    }
    alert("Objeto añadido exitosamente al carrito");
}

function formularioCrearCuenta(){
    prompt("Introduzca su mail");
    prompt("Introduzca su nombre y apellido");
}

function formularioIniciarSesión(){
    prompt("Introduzca su mail");
    prompt("Introduzca su contraseña");
}








