/*
    Páginas del administrador:
        - Inicio________________________________________________ navInicio() -> pagInicio()
        - Categorías____________________________________________ navCategorias() -> pagCategorias()
            - Listar categorías................... navListarCategorias() -> pagListarCategorias()
            - Añadir categoría.................... navAñadirCategoria() -> pagAñadirCategoria()
        - Productos_____________________________________________ navProductos() -> pagProductos()
            - Listar productos.................... navListarProductos() -> pagListarProductos()
            - Añadir producto..................... navAñadirProducto() -> pagAñadirProducto()
            - Ud. de medida....................... navUdMedida() -> pagUdMedida()
        - Solicitudes___________________________________________ navSolicitudes() -> pagSolicitudes()
        - Pedidos_______________________________________________ navPedidos() -> pagPedidos()
            - Listar pedidos...................... navListarPedidos() -> pagListarPedidos()
            - Añadir pedido....................... navAñadirPedido() -> pagAñadirPedido()
        - Usuarios______________________________________________ navUsuarios() -> pagUsuarios()
            - Listar usuarios..................... navListarUsuarios() -> pagListarUsuarios()
            - Añadir usuario...................... navAñadirUsuario() -> pagAñadirUsuario()
        - Proveedores___________________________________________ navProveedores() -> pagProveedores()
            - Listar proveedores.................. navListarProveedores() -> pagListarProveedores()
            - Añadir proveedor.................... navAñadirProveedor() -> pagAñadirProveedor()
        - Residuos______________________________________________ navResiduos() -> pagResiduos()

    Funciones comunes para el admin y el usuario (useryadmin.js):
        - cerrarSesion()
        - crearElemento()
        - crearFormulario()
        - consultarProductos()
        - guardarProductos()
*/

window.addEventListener("load", principal);

function principal() {
    // Apartado inicio
    document.querySelector("#navInicio").addEventListener("click", navInicio);
    // Apartado categorías
    document.querySelector("#navCategorias").addEventListener("click", navCategorias);
        document.querySelector("#navListarCategorias").addEventListener("click", navListarCategorias);
        document.querySelector("#navAñadirCategoria").addEventListener("click", navAñadirCategoria);
    // Apartado productos
    document.querySelector("#navProductos").addEventListener("click", navProductos);
        document.querySelector("#navListarProductos").addEventListener("click", navListarProductos);
        document.querySelector("#navAñadirProducto").addEventListener("click", navAñadirProducto);
        document.querySelector("#navUdMedida").addEventListener("click", navUdMedida);
    // Apartado solicitudes
    document.querySelector("#navSolicitudes").addEventListener("click", navSolicitudes);
    // Apartado pedidos
    document.querySelector("#navPedidos").addEventListener("click", navPedidos);
        document.querySelector("#navListarPedidos").addEventListener("click", navListarPedidos);
        document.querySelector("#navNuevoPedido").addEventListener("click", navNuevoPedido);
        document.querySelector("#navEstadosPedido").addEventListener("click", navEstadosPedido);
    // Apartado usuarios
    document.querySelector("#navUsuarios").addEventListener("click", navUsuarios);
        document.querySelector("#navListarUsuarios").addEventListener("click", navListarUsuarios);
        document.querySelector("#navAñadirUsuario").addEventListener("click", navAñadirUsuario);
    // Apartado proveedores
    document.querySelector("#navProveedores").addEventListener("click", navProveedores);
        document.querySelector("#navListarProveedores").addEventListener("click", navListarProveedores);
        document.querySelector("#navAñadirProveedor").addEventListener("click", navAñadirProveedor);
    // Apartado residuos
    document.querySelector("#navResiduos").addEventListener("click", navResiduos);
}

function mostrarUsuarios(respuesta) {
    let contenedor = document.querySelector("#contenedor");
    let contador = 0;
    contenedor.innerHTML = "";
    let contenedorResiduos = crearElemento("div", undefined, {
        id: "ContResiduos",
        class: "col-3",
        style: "border:2px black solid; padding:5px"
    });

    respuesta.forEach(fila => {
        let residuo = crearElemento("p", undefined, {
            id: "residuos"
        });

        for (let i = 0; i < Object.keys(fila).length / 2; i++) {
            residuo.innerHTML += fila[i] + " ";
        }
        contenedorResiduos.appendChild(residuo);
        contenedor.appendChild(contenedorResiduos);
        contador++;
    });
}

// Apartado INICIO____________________________________________________________________
function navInicio() {
    pagInicio(); 
}

function pagInicio() {
}

// Apartado CATEGORÍAS________________________________________________________________
function navCategorias() { 
    pagAñadirCategoria(); //! cambiar a pagCategorias() 
}

function pagCategorias() { 
}

function navListarCategorias() {
    pagListarCategorias();
}

function pagListarCategorias() {
}

function navAñadirCategoria() {
    pagAñadirCategoria();
}

// Formulario 1. Crear categorías...................
function pagAñadirCategoria() { 
    // Contenedor general de la pagina
    let contenedor = document.querySelector("#contenedor");

    contenedor.innerHTML = "";

    // Título de la página
    let h1Inicio = crearElemento("h1", "Nueva categoría", {
        id: "tituloApartado",
        class: "py-3 mb-3 mt-4"
    });

    contenedor.appendChild(h1Inicio);

    let camposNewCategoria = {
        nombre: {
            etiqueta: 'label',
            contenido: 'Nombre',
            atributos: {
                for: 'newNombreCategoria',
                class: 'form-label'
            }
        },
        inputNombre: {
            etiqueta: 'input',
            atributos: {
                type: 'text',
                id: 'newNombreCategoria',
                class: 'form-control',
                placeholder: 'Nombre de la nueva categoría'
            }
        },
        observaciones: {
            etiqueta: 'label',
            contenido: 'Observaciones',
            atributos: {
                for: 'newObservacionCategoria',
                class: 'form-label'
            }
        },
        inputObservaciones: {
            etiqueta: 'input',
            atributos: {
                type: 'text',
                id: 'newObservacionCategoria',
                class: 'form-control',
                placeholder: 'Observación de la nueva categoría'
            }
        },
        btnCancelar: {
            etiqueta: 'input',
            atributos: {
                type: 'submit',
                value: 'Cancelar',
                class: 'btn btn_custom_3'
            }
        },
        btnLimpiarDatos: {
            etiqueta: 'input',
            atributos: {
                type: 'submit',
                value: 'Limpiar datos',
                class: 'btn btn_custom_2'
            }
        },
        btnCrearCategoria: {
            etiqueta: 'input',
            atributos: {
                type: 'submit',
                value: 'Crear categoría',
                class: 'btn btn_custom_1'
            }
        }
    };
    crearFormulario(camposNewCategoria, contenedor);
}

// Apartado PRODUCTOS__________________________________________________________________
function navProductos() {
    pagAñadirProducto(); //! cambiar a pagProductos()
}

function pagProductos() {
}

function navListarProductos() {
    pagListarProductos(); 
}

function pagListarProductos() {
}

// Formulario 2. Crear producto.......................
function pagAñadirProducto() {
    // Contenedor general de la pagina
    let contenedor = document.querySelector("#contenedor");

    contenedor.innerHTML = "";

    // Título de la página
    let h1Inicio = crearElemento("h1", "Nuevo producto", {
        id: "tituloApartado",
        class: "py-3 mb-3 mt-4"
    });

    contenedor.appendChild(h1Inicio);

    let camposNewProductos = {
        nombre: {
            etiqueta: 'label',
            contenido: 'Nombre',
            atributos: {
                for: 'newNombreProducto',
                class: 'form-label'
            }
        },
        inputNombre: {
            etiqueta: 'input',
            atributos: {
                type: 'text',
                id: 'newNombreProducto',
                class: 'form-control',
                placeholder: "Nombre del producto"
            }
        },
        categoria: {
            etiqueta: 'label',
            contenido: 'Categoría',
            atributos: {
                for: 'newCategoriaAsociada',
                class: 'form-label'
            }
        },
        inputCategoria: {
            etiqueta: 'input',
            atributos: {
                type: 'text',
                id: 'newCategoriaAsociada',
                class: 'form-control',
                placeholder: 'Categoría asociada al nuevo producto'
            }
        },
        unidadDeMedida: {
            etiqueta: 'label',
            contenido: 'Unidad de medida',
            atributos: {
                for: 'newUnidadAsociada',
                class: 'form-label'
            }
        },
        inputUnidadDeMedida: {
            etiqueta: 'input',
            atributos: {
                type: 'text',
                id: 'newUnidadAsociada',
                class: 'form-control',
                placeholder: 'Unidad de medida del nuevo producto'
            }
        },
        residuos: {
            etiqueta: 'label',
            contenido: 'Residuos',
            atributos: {
                for: 'newResiduosAsociados',
                class: 'form-label'
            }
        },
        inputResiduos: {
            etiqueta: 'input',
            atributos: {
                type: 'text',
                id: 'newResiduosAsociados',
                class: 'form-control',
                placeholder: 'Residuos del nuevo producto'
            }
        },
        observaciones: {
            etiqueta: 'label',
            contenido: 'Observaciones',
            atributos: {
                for: 'newObservacionProducto',
                class: 'form-label'
            }
        },
        inputObservaciones: {
            etiqueta: 'textarea',
            atributos: {
                type: 'text',
                id: 'newObservacionProducto',
                class: 'form-control',
                placeholder: 'Observaciones del nuevo producto'
            }
        },
        // Botones
        btnCancelar: {
            etiqueta: 'input',
            atributos: {
                type: 'submit',
                value: 'Cancelar',
                class: 'btn btn_custom_3'
            }
        },
        btnLimpiarDatos: {
            etiqueta: 'input',
            atributos: {
                type: 'submit',
                value: 'Limpiar datos',
                class: 'btn btn_custom_2'
            }
        },
        btnCrearProducto: {
            etiqueta: 'input',
            atributos: {
                type: 'submit',
                value: 'Crear producto', 
                class: 'btn btn_custom_1'
            }
        }
    };
    crearFormulario(camposNewProductos, contenedor);
}

// Formulario 3. Crear ud. de medida...................
function navUdMedida() { 
    pagUdMedida()
}

function pagUdMedida() {
    // Contenedor general de la pagina
    let contenedor = document.querySelector("#contenedor");

    contenedor.innerHTML = "";

    // Título de la página
    let h1Inicio = crearElemento("h1", "Nueva unidad de medida", {
        id: "tituloApartado",
        class: "py-3 mb-3 mt-4"
    });

    contenedor.appendChild(h1Inicio);

    let camposNewMedida = {
        nombre: {
            etiqueta: 'label',
            contenido: 'Nombre',
            atributos: { 
                for: 'newUdMedida',
                class: 'form-label'
            }
        },
        inputNombre: {
            etiqueta: 'input',
            atributos: { 
                type: 'text', 
                id: 'newUdMedida',
                class: 'form-control',
                placeholder: 'Nombre de la nueva unidad de medida' 
            }
        },
        observaciones: {
            etiqueta: 'label',
            contenido: 'Observaciones',
            atributos: { 
                for: 'newObservacionesMedida',
                class: 'form-label'
            }
        },
        inputObservaciones: {
            etiqueta: 'input',
            atributos: { 
                type: 'text', 
                id: 'newObservacionesMedida',
                class: 'form-control',
                placeholder: 'Observaciones de la nueva unidad de medida' 
            }
        },
        btnCrearMedida: {
            etiqueta: 'input',
            atributos: { 
                type: 'submit', 
                value: 'Crear ud. de medida',
                class: 'btn btn_custom_1' 
            }
        }
    };
    crearFormulario(camposNewMedida, contenedor);
}

// Apartado PEDIDOS____________________________________________________________________
function navPedidos() {
    pagNuevoPedido(); //! cambiar a pagPedidos()
}

function pagPedidos() {
}

function navListarPedidos() {
    pagListarPedidos(); 
}

function pagListarPedidos() {
}

// Formulario 4. Hacer pedido...........................
function navNuevoPedido() {
    pagNuevoPedido();
}

function pagNuevoPedido() {
}

function navEstadosPedido() {
    pagEstadosPedido(); 
}

// Formulario 5. Estados de pedido.....................
function pagEstadosPedido() {
}

// Apartado USUARIOS____________________________________________________________________
function navUsuarios() {
    let parametros = {
        claveTodosUsuarios: true
    };
    $.ajax({
        //Ubicacion del archivo php que va a manejar los valores.
        url: "./php/consultaUsuario.php",
        //Metodo en que los va a recibir.
        type: "GET",
        data: parametros,
        dataType: "json",
        success: mostrarUsuarios,
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error en la solicitud AJAX: " + textStatus, errorThrown);
        }
    });
}

function pagUsuarios() {
}

function navListarUsuarios() {
    pagListarUsuarios(); 
}

function pagListarUsuarios() {
}

// Formulario 6. Añadir usuario.....................
function navAñadirUsuario() {
    pagAñadirUsuario(); 
}

function pagAñadirUsuario() {
    // Contenedor general de la pagina
    let contenedor = document.querySelector("#contenedor");

    contenedor.innerHTML = "";

    // Título de la página
    let h1Inicio = crearElemento("h1", "Nuevo producto", {
        id: "tituloApartado",
        class: "py-3 mb-3 mt-4"
    });

    contenedor.appendChild(h1Inicio);

    let camposNewUsuario = {
        nombre: {
            etiqueta: 'label',
            contenido: 'Nombre',
            atributos: { 
                for: 'newUsername',
                class: 'form-label'
            }
        },
        inputNombre: {
            etiqueta: 'input',
            atributos: { 
                type: 'text', 
                id: 'newUsername',
                class: 'form-control',
                placeholder: 'Nombre del nuevo usuario' 
            }
        },
        activo: {
            etiqueta: 'label',
            contenido: 'Activo',
            atributos: { 
                for: 'userActive',
                class: 'form-label'
            }
        },
        inputActivo: {
            etiqueta: 'input',
            atributos: { 
                type: 'text', //! revisar tipo de input del toggle de usuario activo
                id: 'userActive',
                class: '' 
            }
        },
        telefono: {
            etiqueta: 'label',
            contenido: 'Teléfono',
            atributos: { 
                for: 'newUserTelefono',
                class: 'form-label'
            }
        },
        inputTelefono: {
            etiqueta: 'input',
            atributos: { 
                type: 'text', 
                id: 'newUserTelefono',
                class: '' 
            }
        },
        email: {
            etiqueta: 'label',
            contenido: 'Email',
            atributos: { 
                for: 'newUserEmail',
                class: 'form-label'
            }
        },
        inputEmail: {
            etiqueta: 'input',
            atributos: { 
                type: 'email', 
                id: 'newUserEmail',
                class: '' 
            }
        },
        observaciones: {
            etiqueta: 'label',
            contenido: 'Observaciones',
            atributos: { 
                for: 'newObservacionUser',
                class: 'form-label'
            }
        },
        inputObservaciones: {
            etiqueta: 'input',
            atributos: { 
                type: 'text', 
                id: 'newObservacionUser',
                class: '' 
            }
        },
        btnCrearUsuario: {
            etiqueta: 'input',
            contenido: 'Crear ud. de medida',
            atributos: { 
                type: 'submit', 
                onclick: '', 
                class: 'btn btn_custom_1' 
            }
        }
    };
    crearFormulario(camposNewUsuario, contenedor);
}

// Apartado PROVEEDORES___________________________________________________________________
function navProveedores() {
    pagAñadirProveedor(); //! cambiar a pagProveedores
}

function pagProveedores() {
    let camposNewProveedor = [
        { etiqueta: 'label', contenido: 'Nombre', atributos: { 
            for: 'newProvName',
            class: 'form-label'
        }},
        { etiqueta: 'input', atributos: { 
            type: 'text', 
            id: 'newProvName',
            class: '' }},
        { etiqueta: 'label', contenido: 'Teléfono', atributos: { 
            for: 'newProvTelefono',
            class: 'form-label'
        }},
        { etiqueta: 'input', atributos: { 
            type: 'int', 
            id: 'newProvTelefono',
            class: '' }},
        { etiqueta: 'label', contenido: 'Email', atributos: { 
            for: 'newProvEmail',
            class: 'form-label'
        }},
        { etiqueta: 'input', atributos: { 
            type: 'email', 
            id: 'newProvEmail',
            class: '' }},
        { etiqueta: 'label', contenido: 'Dirección', atributos: { 
            for: 'newProvDirec',
            class: 'form-label'
        }},
        { etiqueta: 'input', atributos: { 
            type: 'text', 
            id: 'newProvDirec',
            class: '' }},
        { etiqueta: 'label', contenido: 'Observaciones', atributos: { 
            for: 'newObservacionesProv',
            class: 'form-label'
        }},
        { etiqueta: 'input', atributos: { 
            type: 'text', 
            id: 'newObservacionesProv',
            class: '' }},
        { etiqueta: 'input', contenido: 'Crear ud. de medida', atributos: { 
            type: 'submit', 
            onclick: '', 
            class: 'btn btn_custom_1' 
        }},
    ]
    // Obtener el contenedor donde se agregará el formulario
    let contenedorFormProveedor = aux; //! crear el contenedor donde insertar el formulario
    crearFormulario(camposNewProveedor, contenedorFormProveedor);
}

function navListarProveedores() {
}

function pagListarProveedores() {
}

function navAñadirProveedor() {
    pagAñadirProveedor();
}

// Formulario 7. Añadir proveedor.....................
function pagAñadirProveedor() {

}

// Apartado RESIDUOS_______________________________________________________________________
function navResiduos() {
    pagResiduos(); 
}

function pagResiduos() {
}