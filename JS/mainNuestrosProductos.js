//Este .js aplica sobre la página NuestrosProductos.html, sobre los botones "Crear cuenta" e "Iniciar sesión" (y sus modales asociados), sobre los productos que figuran en la página y sobre el modal del carrito (asociado al botón con el ícono del carrito)

/* Variables */

let crearCuenta0 = document.getElementById("crearCuenta0");
let iniciarSesión0 = document.getElementById("iniciarSesión0");
let iniciarCompra0 = document.getElementById("iniciarCompra0");
let productoEncontrado;
let posiciónProducto1;
let posiciónProducto2;
let agregarProducto0;
let agregarProducto1;
let idProducto0;
let idProducto1;
let totalCarrito;
let carrito = [];
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
let carritoSumarArray = [];
let carritoRestarArray = [];
let carritoBorrarArray = [];

// Eventos

crearCuenta0.addEventListener("submit", formularioCrearCuenta0);
iniciarSesión0.addEventListener("submit", formularioIniciarSesión0);
iniciarCompra0.addEventListener("submit",iniciarCompra);
eventos(agregarACarritoInputArray,agregarACarrito0,"submit");

/* Funciones */

function eventos(array,función,evento) { /*Crea eventos en base a un array con los document.getElementByIds y el tipo de evento con el que se lo desee relacionar*/
    for (i = 0; i < array.length; i ++) {
        array[i].addEventListener(`${evento}`,función);
    }
}

function agregarACarrito0(e) { /*Agrega los productos seleccionados por el usuario al array carrito*/
    e.preventDefault();
    let agregarProducto0 = e.target;
    let idProducto0 = e.target.id;
    function agregarACarrito1(id) {
        if (carrito.length == 0) {
            posiciónProducto1 = productos.findIndex(nombreProducto => nombreProducto.id1 == id);
            productos[posiciónProducto1].cantidad = parseInt(agregarProducto0.children[0].value);
            carrito.push(productos[posiciónProducto1]);
        }
        else {
            productoEncontrado = carrito.findIndex(nombreProducto => nombreProducto.id1 == id);
            productoEncontrado != -1 ? (
            posiciónProducto2 = carrito.findIndex(nombreProducto => nombreProducto.id1 == id),
            carrito[posiciónProducto2].cantidad += parseInt(agregarProducto0.children[0].value) 
            ) : (
            posiciónProducto1 = productos.findIndex(nombreProducto => nombreProducto.id1 == id),
            productos[posiciónProducto1].cantidad += parseInt(agregarProducto0.children[0].value),
            carrito.push(productos[posiciónProducto1])
            );
        }
        agregarProducto0.children[0].value = "";
        swal("Carrito","Producto añadido con éxito","success");
    }
    agregarACarrito1(idProducto0);
    calcularSubtotal(carrito);
    calcularTotal(carrito);
    imprimirEnCarrito();
}

function formularioCrearCuenta0(e) { /*Modifica el DOM para mostrar los datos del usuario creado*/
    e.preventDefault();
    let crearCuenta1 = document.getElementById("crearCuenta1");
    let sesiónBotón = document.getElementById("sesiónBotón");
    let mail = crearCuenta1.children[0].value;
    for (i = 0; i < crearCuenta1.children.length; i ++) {
        crearCuenta1.children[i].value = "";   
    }
    swal("Cuenta","Cuenta creada exitosamente","success");
    sesiónBotón.innerHTML = `
        <div class="col-sm-12 p-4">                            
            Bienvenido/a, ${mail}
        </div>
    `;
}

function formularioIniciarSesión0(e) { /*Modifica el DOM para mostrar los datos del usuario que inició sesión*/
    e.preventDefault();
    let iniciarSesión1 = document.getElementById("iniciarSesión1");
    let sesiónBotón = document.getElementById("sesiónBotón");
    let mail = iniciarSesión1.children[0].value;
    for (i = 0; i < iniciarSesión1.children.length; i ++) {
        iniciarSesión1.children[i].value = "";   
    }
    swal("Cuenta","Sesión iniciada exitosamente","success");
    sesiónBotón.innerHTML = `
        <div class="col-sm-12 p-4">                            
            Bienvenido/a, ${mail}
        </div>
    `;
}

function imprimirEnCarrito() { /*Inserta el HTML de los productos que están en el carrito, en el modal carrito*/
    let cuerpoCarrito0 = document.getElementById("cuerpoCarrito0");
    let cuerpoCarrito1 = document.getElementById("cuerpoCarrito1");
    let totalCarrito0 = document.getElementById("totalCarrito0");
    cuerpoCarrito0.innerHTML = "";
    cuerpoCarrito1.classList.remove("ocultar");
    for (i = 0; i < carrito.length; i ++) {
        cuerpoCarrito0.insertAdjacentHTML("beforeend",`
            <div class="row justify-content-center m-2">
                <div class="col-sm-3">
                    <h5><small>${carrito[i].nombre}</small></h5>
                </div>
                <div class="col-sm-2">
                    <h5><small>${carrito[i].cantidad}</small></h5>
                </div>
                <div class="col-sm-2">
                    <h5><small>$${carrito[i].precio}</small></h5>
                </div>
                <div class="col-sm-2">
                    <h5><small>$${carrito[i].total}</small></h5>
                </div>
                <div class="col-sm-3">
                    <h5>
                        <small>
                            <button class="btn align-self-center fondo2" id="carritoSumar-${carrito[i].id1}">
                                <i class="fa-solid fa-plus fuente-gris"></i>
                            </button>
                            <button class="btn align-self-center fondo2" id="carritoRestar-${carrito[i].id1}">
                                <i class="fa-solid fa-minus fuente-gris"></i>
                            </button>
                            <button class="btn align-self-center fondo2"id="carritoBorrar-${carrito[i].id1}">
                                <i class="fa-solid fa-trash-can fuente-gris"></i>
                            </button>
                        </small>
                    </h5>
                </div>
            </div> 
        `);
    }
    totalCarrito0.innerHTML = `
        <div class="col-sm-6">
            <h5>
                <strong>Total</strong>
            </h5>
        </div>
        <div class="col-sm-6">
            <h5>
                <strong>$${totalCarrito}</strong>
            </h5>
        </div>
    `;
    crearGetElementByIdCarrito();
    eventos(carritoSumarArray,carritoSumar,"click");
    eventos(carritoRestarArray,carritoRestar,"click");
    eventos(carritoBorrarArray,carritoBorrar,"click");
}

function calcularSubtotal(array) { /*Calcula el precio x cantidad de cada artículo que está en el array carrito*/
    let subtotalCarrito = [];
    for (i = 0; i < array.length; i ++) {
        subtotalCarrito.push({
        total: parseInt(array[i].precio) * parseInt(array[i].cantidad)
        });
        array[i].total = subtotalCarrito[i].total;
    }
    return subtotalCarrito;
}

function calcularTotal(array) { /*Suma todos los subtotales de cada artículo que está en el array carrito*/
    totalCarrito = 0;
    for (i = 0; i < array.length; i ++) {
        totalCarrito += parseInt(array[i].total);
    }
    return totalCarrito;
}

function carritoSumar(e) { /*Al presionar el botón "+" en el modal carrito, agrega una unidad al array carrito del artículo en cuestión y modifica el HTML en base a esto*/
    idProducto1 = e.target.id;
    carrito[encontrarProductoEnCarrito(idProducto1)].cantidad ++;
    calcularSubtotal(carrito);
    calcularTotal(carrito);
    imprimirEnCarrito();
}

function carritoRestar(e) { /*Al presionar el botón "-" en el modal carrito, resta una unidad al array carrito del artículo en cuestión y modifica el HTML en base a esto*/
    idProducto1 = e.target.id;
    if (carrito[encontrarProductoEnCarrito(idProducto1)].cantidad == 1) {
        carritoBorrar(e);
    }
    else {
        carrito[encontrarProductoEnCarrito(idProducto1)].cantidad --;
        calcularSubtotal(carrito);
        calcularTotal(carrito);
        imprimirEnCarrito();
    }
}

function carritoBorrar(e) { /*Al presionar el botón del tacho de basura en el modal carrito, elimina del array carrito el artículo en cuestión y modifica el HTML en base a esto*/
    idProducto1 = e.target.id;
    carrito.splice([encontrarProductoEnCarrito(idProducto1)],1);
    calcularSubtotal(carrito);
    calcularTotal(carrito);
    imprimirEnCarrito(); 
    swal("Carrito","Producto eliminado","success");
}

function crearGetElementByIdCarrito() { /*Por cada artículo que se agrega al array carrito, genera tres document.getElementById (uno para cada botón del modal del carrito)*/
    carritoSumarArray = [];
    carritoRestarArray = [];
    carritoBorrarArray = [];
    for (i = 0; i < carrito.length; i ++) {
        carritoSumarArray.push(document.getElementById(`carritoSumar-${carrito[i].id1}`));
        carritoRestarArray.push(document.getElementById(`carritoRestar-${carrito[i].id1}`));
        carritoBorrarArray.push(document.getElementById(`carritoBorrar-${carrito[i].id1}`));
    } 
}

function indexOfMásUno(string,elemento) {
    let index = string.indexOf(elemento);
    index ++;
    return index;
}

function encontrarProductoEnCarrito(string) { /*Devuelve el número de índice del producto en cuestión en el array carrito*/
    let idProducto1id = string.substring(indexOfMásUno(string,"-"));
    let productoEncontradoEnCarrito = carrito.findIndex(nombreProducto => nombreProducto.id1 == idProducto1id);
    return productoEncontradoEnCarrito;
}

function iniciarCompra(e) { /*Envía al storage el array carrito*/
    e.preventDefault();
    let carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("Detalle comprado",carritoJSON);
    carrito = [];
    calcularTotal(carrito);
    imprimirEnCarrito();
    limpiarModalCarrito();
    swal("Procesado!");
}

function limpiarModalCarrito() { /*Borra el HTML del modal carrito*/
    let cuerpoCarrito0 = document.getElementById("cuerpoCarrito0");
    let cuerpoCarrito1 = document.getElementById("cuerpoCarrito1");
    let totalCarrito0 = document.getElementById("totalCarrito0");
    cuerpoCarrito0.innerHTML = "No hay productos en el carrito";
    cuerpoCarrito1.classList.add("ocultar");
    totalCarrito0.innerHTML = "";
}
