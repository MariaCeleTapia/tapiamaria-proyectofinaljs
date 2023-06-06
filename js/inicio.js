//carrousel

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach((cadaPunto , i) =>{
    punto[i].addEventListener("click" , (i) =>{

        let posicion = i;

        let operacion = posicion * -50;

        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach( (cadaPunto , i )=>{

            punto[i].classList.remove("active");
        })
        punto[i].classList.add("active");
    })
})



