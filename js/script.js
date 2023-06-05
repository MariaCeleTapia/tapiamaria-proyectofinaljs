//PRODUCTOS

const productos = [
    //Anillos
    {
        id: "Anillos-01",
        titulo: "Anillo 01",
        imagen: "./img/anillos/01.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        }
    },
    {
        id: "Anillos-02",
        titulo: "Anillo 02",
        imagen: "./img/anillos/02.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        }
    },
    {
        id: "Anillos-03",
        titulo: "Anillo 03",
        imagen: "./img/anillos/03.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        }
    },
    {
        id: "Anillos-04",
        titulo: "Anillo 04",
        imagen: "./img/anillos/04.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        }
    },
    {
        id: "Anillos-05",
        titulo: "Anillo 05",
        imagen: "./img/anillos/05.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        }
    },
    {
        id: "Anillos-06",
        titulo: "Anillo 06",
        imagen: "./img/anillos/06.jpg",
        categoria: {
            nombre: "Anillo",
            id: "anillos"
        }
    },
    //Aros
    {
        id: "Aros-01",
        titulo: "Aros 01",
        imagen: "./img/aros/01.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        }
    },
    {
        id: "Aros-02",
        titulo: "Aros 02",
        imagen: "./img/aros/02.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        }
    },
    {
        id: "Aros-02",
        titulo: "Aros 02",
        imagen: "./img/aros/02.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        }
    },
    {
        id: "Aros-03",
        titulo: "Aros 03",
        imagen: "./img/aros/03.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        }
    },
    {
        id: "Aros-04",
        titulo: "Aros 04",
        imagen: "./img/aros/04.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        }
    },
    {
        id: "Aros-05",
        titulo: "Aros 05",
        imagen: "./img/aros/05.jpg",
        categoria: {
            nombre: "Aros",
            id: "aros"
        }
    },
    //Cadenas
    {
        id: "Cadenas-01",
        titulo: "Cadena 01",
        imagen: "./img/cadenas/01.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadena"
        }
    },
    {
        id: "Cadenas-02",
        titulo: "Cadena 02",
        imagen: "./img/cadenas/02.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadena"
        }
    },
    {
        id: "Cadenas-03",
        titulo: "Cadena 03",
        imagen: "./img/cadenas/03.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadena"
        }
    },
    //Pulseras
    {
        id: "Pulseras-01",
        titulo: "Pulsera 01",
        imagen: "./img/pulseras/01.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        }
    },
    {
        id: "Pulseras-02",
        titulo: "Pulsera 02",
        imagen: "./img/pulseras/02.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        }
    },
    {
        id: "Pulseras-03",
        titulo: "Pulsera 03",
        imagen: "./img/pulseras/03.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        }
    },

];
const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {

    productos.forEach(producto => {
        
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
}

cargarProductos();
