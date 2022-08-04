//Este .js aplica sobre la página Index.html, sobre los botones "Crear cuenta" e "Iniciar sesión"

/* Variables */

let crearCuenta = document.getElementById("crearCuenta");
let iniciarSesión = document.getElementById("iniciarSesión");

// Eventos

crearCuenta.addEventListener("click", formularioCrearCuenta);
iniciarSesión.addEventListener("click", formularioIniciarSesión);

/* Funciones */

function formularioCrearCuenta(){
    prompt("Introduzca su mail");
    prompt("Introduzca su nombre y apellido");
}

function formularioIniciarSesión(){
    prompt("Introduzca su mail");
    prompt("Introduzca su contraseña");
}

// function consultaProducto(){

//     alert("Bienvenido a Lazaretto Bakery");
//     let nombre = prompt("Indique su nombre");
//     alert(`Bienvenido/a ${nombre}`);
//     do {
//         let categoría = prompt("Indique la categoría que desea ver: 1 - Panadería, 2 - Pastelería");
//         switch(categoría){
//             default:
//                 alert("Categoría incorrecta");
//                 break;
//             case "1":
//                 grupoProductos0 = productos.filter(propiedad => propiedad.categoría.includes("panadería"));
//                 for (n = 0; n < grupoProductos0.length; n++){
//                     alert(`${grupoProductos0[n].descripción}. Cuesta $ ${grupoProductos0[n].precio}`);
//                 }
//                 producto = prompt("Indique el producto que desea comprar : 0 - Pan, 1 - Pan arabe, 2 - Pan para hamburguesas");
//                 alert("Cuesta $" + productos[producto].precio + ". " + productos[producto].descripción);
//                 let cantidad0 = parseInt (prompt("Ingrese la cantidad de unidades que quiere comprar"));
//                 totalCompra = productos[producto].precio*cantidad0;
//                 alert(`El total a pagar por ${cantidad0} unidades de ${productos[producto].nombre} es de: $ ${totalCompra}`);
//                 break;
//             case "2":
//                 grupoProductos1 = productos.filter(propiedad => propiedad.categoría.includes("pastelería"));
//                 for (n = 0; n < grupoProductos1.length; n++){
//                     alert(`${grupoProductos1[n].descripción}. Cuesta $ ${grupoProductos1[n].precio}`);
//                 }
//                 producto = prompt("Indique el producto que desea comprar :3 - Torta, 4 - Galletitas");
//                 alert("Cuesta $" + productos[producto].precio + ". " + productos[producto].descripción);
//                 let cantidad1 = parseInt (prompt("Ingrese la cantidad de unidades que quiere comprar"));
//                 totalCompra = productos[producto].precio*cantidad1;
//                 alert(`El total a pagar por ${cantidad1} unidades de ${productos[producto].nombre} es de: $ ${totalCompra}`);
//                 break;
//         }
//         opción = prompt("Desea solicitar otro producto? 1 - Sí, 2 - No");
//     } while(opción != 2)
//     alert("Muchas gracias por su compra!");
// } 

// consultaProducto();




