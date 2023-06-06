//PRODUCTOS

const productos = [
    //Anillos
    {
        id: "anillos-01",
        titulo: "Anillo 01",
        imagen: "./img/anillos/01.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        },
        precio: 900
    },
    {
        id: "anillos-02",
        titulo: "Anillo 02",
        imagen: "./img/anillos/02.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        },
        precio: 900
    },
    {
        id: "anillos-03",
        titulo: "Anillo 03",
        imagen: "./img/anillos/03.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        },
        precio: 900
    },
    {
        id: "anillos-04",
        titulo: "Anillo 04",
        imagen: "./img/anillos/04.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        },
        precio: 900
    },
    {
        id: "anillos-05",
        titulo: "Anillo 05",
        imagen: "./img/anillos/05.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        },
        precio: 900
    },
    {
        id: "anillos-06",
        titulo: "Anillo 06",
        imagen: "./img/anillos/06.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        },
        precio: 900
    },
    //Aros
    {
        id: "aros-01",
        titulo: "Aros 01",
        imagen: "./img/aros/01.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        },
        precio: 900
    },
    {
        id: "aros-02",
        titulo: "Aros 02",
        imagen: "./img/aros/02.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        },
        precio: 900
    },
    {
        id: "aros-02",
        titulo: "Aros 02",
        imagen: "./img/aros/02.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        },
        precio: 900
    },
    {
        id: "aros-03",
        titulo: "Aros 03",
        imagen: "./img/aros/03.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        },
        precio: 900
    },
    {
        id: "aros-04",
        titulo: "Aros 04",
        imagen: "./img/aros/04.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        },
        precio: 900
    },
    {
        id: "aros-05",
        titulo: "Aros 05",
        imagen: "./img/aros/05.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        },
        precio: 900
    },
    //Cadenas
    {
        id: "cadenas-01",
        titulo: "Cadena 01",
        imagen: "./img/cadenas/01.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 900
    },
    {
        id: "cadenas-02",
        titulo: "Cadena 02",
        imagen: "./img/cadenas/02.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 900
    },
    {
        id: "cadenas-03",
        titulo: "Cadena 03",
        imagen: "./img/cadenas/03.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 900
    },
    //Pulseras
    {
        id: "pulseras-01",
        titulo: "Pulsera 01",
        imagen: "./img/pulseras/01.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 900
    },
    {
        id: "pulseras-02",
        titulo: "Pulsera 02",
        imagen: "./img/pulseras/02.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 900
    },
    {
        id: "pulseras-03",
        titulo: "Pulsera 03",
        imagen: "./img/pulseras/03.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 900
    },

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML ="";
    
    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id ===e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText ="Todos los productos";
            cargarProductos(productos);
        }
    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
} 

function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}


