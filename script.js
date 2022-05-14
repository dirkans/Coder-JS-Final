var carrito = JSON.parse(localStorage.getItem("carrito")) || [];


totNavBar = document.getElementById("totNavBar");

price1a = document.getElementById("price1"); 
price2a = document.getElementById("price2");
price3a = document.getElementById("price3");

add1 = document.getElementById("add1");
add2 = document.getElementById("add2");
add3 = document.getElementById("add3");

price1a.innerHTML = 82000;
price2a.innerHTML = 51499;
price3a.innerHTML = 11900;

totNavBar.innerHTML = 52000;


