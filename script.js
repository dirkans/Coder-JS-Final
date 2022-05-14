var carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//Importamos el total del carrito de la barra de navegacion
totNavBar = document.getElementById("totNavBar"); 

//Importamos donde imprimiremos los precios en el html
price1a = document.getElementById("price1"); 
price2a = document.getElementById("price2");
price3a = document.getElementById("price3");
name1 = document.getElementById("name-1");
name2 = document.getElementById("name-2");
name3 = document.getElementById("name-3");
desc1 = document.getElementById("desc-1");
desc2 = document.getElementById("desc-2");
desc3 = document.getElementById("desc-3");


class Productos{
    constructor(nombre,precio,descripcion,img){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }    
    addItem(){
        carrito.push(this);
        refreshTotNavBar();
    }    
}    


//Importamos los botones de agregar al carrito de cada producto
add1 = document.getElementById("add1"); 
add2 = document.getElementById("add2");
add3 = document.getElementById("add3");
empty = document.getElementById("empty");



//OBJETOS
deWalt20vMax = new Productos("Taladro Percutor Inalambrico Dewalt 20v Max",82000,"Rangos de 2 velocidades van de 0-550 / 0-2000 rpm ofrece aplicaciones hasta un 30% más rápidas.","img/DCD980L2_1L.jpeg");
stanleyRoto1250 = new Productos("Rotomartillo Taladro Percutor Stanley 1250w",51499,"Poderoso motor de 1250W para un amplio rango de aplicaciones de taladrado y cincelado Diseño con piston en L para mayor poder","img/rotop.png");
carroStanley = new Productos("Carro Aluminio Plegable Stanley",11900,"Carro de mano plegable hasta 50Kg Se dobla y abre en segundos","img/zorr.jpeg");




function refreshTotNavBar(){
    largoCarrito = carrito.length;
    let tot = 0;
    for(x in carrito){
    tot = tot + carrito[x].precio
}
totNavBar.innerHTML = tot;
}
refreshTotNavBar; //print inicial del total en barra de navegación

function vaciarCarrito(){
carrito.splice(0,carrito.length);
refreshTotNavBar();

}


// add1.addEventListener("click",deWalt20vMax.addItem());
add1.onclick = () =>{deWalt20vMax.addItem()};
add2.onclick = () =>{stanleyRoto1250.addItem()};
add3.onclick = () =>{carroStanley.addItem()};
empty.onclick = () =>{vaciarCarrito();}


name1.innerHTML = deWalt20vMax.nombre;
name2.innerHTML = stanleyRoto1250.nombre;
name3.innerHTML = carroStanley.nombre;

desc1.innerHTML = deWalt20vMax.descripcion;
desc2.innerHTML = stanleyRoto1250.descripcion;
desc3.innerHTML = carroStanley.descripcion;

//ASIGNAMOS LOS PRECIOS DE CADA OBJETO A LA VARIABLE QUE IMPRIME EN EL HTML
price1a.innerHTML = deWalt20vMax.precio;
price2a.innerHTML = stanleyRoto1250.precio;
price3a.innerHTML = carroStanley.precio;

img1.setAttribute("src", deWalt20vMax.img) 
img2.setAttribute("src", stanleyRoto1250.img) 
img3.setAttribute("src", carroStanley.img) 