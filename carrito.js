// let ulCarrito = document.getElementById("ulCarrito");

// let nLi = document.createElement("li");
// nLi.id = "li0";
// nLi.className = "list-group-item";
// nLi.innerHTML = "hello"
// ulCarrito.appendChild(nLi);

totCarrito = document.getElementById("totCarrito");

totCarrito.innerHTML = tot;


for(item in carrito){


    let ulCarrito = document.getElementById("ulCarrito");
    let nLi = document.createElement("li");
    nLi.id = item;
    nLi.className = "list-group-item";
    nLi.innerHTML = `<img class="ulPic" src="${carrito[item].img}"> ${carrito[item].nombre} -------- PRECIO: ${carrito[item].precio}`
    ulCarrito.appendChild(nLi);

}