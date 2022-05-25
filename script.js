var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Importamos el total del carrito de la barra de navegacion
totNavBar = document.getElementById("totNavBar"); 

//Importamos donde imprimiremos los precios en el html
price1a = document.getElementById("price1"); 
price2a = document.getElementById("price2");
price3a = document.getElementById("price3");
price4a = document.getElementById("price4");
name1 = document.getElementById("name-1");
name2 = document.getElementById("name-2");
name3 = document.getElementById("name-3");
name4 = document.getElementById("name-4");
desc1 = document.getElementById("desc-1");
desc2 = document.getElementById("desc-2");
desc3 = document.getElementById("desc-3");
desc4 = document.getElementById("desc-4");
cotDolar = document.getElementById("cotDolar");


class Productos{
    constructor(nombre,precio,descripcion,img){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }    
    addItem(){
        carrito.push(this);
        let aLocalStorage = JSON.stringify(carrito);
        localStorage.setItem("carrito",aLocalStorage);
        refreshTotNavBar();
        Toastify({
          text: `  ${this.nombre} Agregado al carrito`,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
    }    

    verMas(){
      Swal.fire({
        title: `${this.nombre}`,
        text: `${this.descripcion}, PRECIO: $${this.precio}`,
        imageUrl: `${this.img}`,
        imageHeight: 300,
        imageAlt: 'Imagen del producto'        
      })
    }
}    

//Importamos los botones de agregar al carrito de cada producto
add1 = document.getElementById("add1"); 
add2 = document.getElementById("add2");
add3 = document.getElementById("add3");
ver1 = document.getElementById("ver1");
ver2 = document.getElementById("ver2");
ver3 = document.getElementById("ver3");
ver4 = document.getElementById("ver4");
empty = document.getElementById("empty");
myCarr = document.getElementById("myCarr");


//OBJETOS
deWalt20vMax = new Productos("Taladro Percutor Inalambrico Dewalt 20v Max",82000,"Rangos de 2 velocidades van de 0-550 / 0-2000 rpm ofrece aplicaciones hasta un 30% más rápidas.","./img/DCD980L2_1L.jpeg");
stanleyRoto1250 = new Productos("Rotomartillo Taladro Percutor Stanley 1250w",51499,"Poderoso motor de 1250W para un amplio rango de aplicaciones de taladrado y cincelado Diseño con piston en L para mayor poder","img/rotop.png");
carroStanley = new Productos("Carro Aluminio Plegable Stanley",11900,"Carro de mano plegable hasta 50Kg Se dobla y abre en segundos","img/zorr.jpeg");
bdwd10 = new Productos("Aspiradora Black&Decker 10L Polvo y Agua",23624,"Potente aspiradora ideal para todas las tareas de limpieza del hogar. Aspira polvo y agua sin dificultad.","img/bdwd10.jpeg");


function refreshTotNavBar(){
    var tot = 0;
    largoCarrito = carrito.length;
    for(x in carrito){
    tot = tot + carrito[x].precio
}
totNavBar.innerHTML = tot;
}
refreshTotNavBar(); //print inicial del total en barra de navegación

function vaciarCarrito(){
Swal.fire({
    title: 'Está seguro?',
    text: "Está a punto de vaciar el carrito de compras!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, vaciar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Vaciado!',
        'Su carrito ha sido vaciado.',
        'success'
      )
      carrito.splice(0,carrito.length);
      refreshTotNavBar();
      localStorage.clear();
    }
  })
}

function viewCarrito(){
  Swal.fire({
    title: '<strong>Su carrito</u></strong>',
    icon: 'info',
    html:
    `<div class="card">`+
    `<div class="card-body">`+      
    `      <ul id="ulCarrito" class="list-group">`+
    `</ul>`+
    `    </div>`+
    ` </div>` ,
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Cerrar',
    confirmButtonAriaLabel: 'Cerrar',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })

  for(item in carrito){
    let ulCarrito = document.getElementById("ulCarrito");
    let nLi = document.createElement("li");
    nLi.id = item;
    nLi.className = "list-group-item";
    nLi.innerHTML = `<img class="ulPic" src="${carrito[item].img}"> ${carrito[item].nombre} --- PRECIO: ${carrito[item].precio}`
    ulCarrito.appendChild(nLi);
     }
}

//EVENTOS
empty.onclick = () =>{vaciarCarrito()};
myCarr.onclick = () =>{viewCarrito()};


//API DOLAR
fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then(res=>res.json())
  .then(res=> cotDolar.innerHTML = res[1].casa.venta)
  


