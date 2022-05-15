
// add1.addEventListener("click",deWalt20vMax.addItem());
add1.onclick = () =>{deWalt20vMax.addItem()};
ver1.onclick  = () =>{deWalt20vMax.verMas()};
ver2.onclick  = () =>{stanleyRoto1250.verMas()};
ver3.onclick  = () =>{carroStanley.verMas()};
ver4.onclick  = () =>{bdwd10.verMas()};
add2.onclick = () =>{stanleyRoto1250.addItem()};
add3.onclick = () =>{carroStanley.addItem()};
add4.onclick = () =>{bdwd10.addItem()};



name1.innerHTML = deWalt20vMax.nombre;
name2.innerHTML = stanleyRoto1250.nombre;
name3.innerHTML = carroStanley.nombre;
name4.innerHTML = bdwd10.nombre;

//ASIGNAMOS LOS PRECIOS DE CADA OBJETO A LA VARIABLE QUE IMPRIME EN EL HTML
price1a.innerHTML = deWalt20vMax.precio;
price2a.innerHTML = stanleyRoto1250.precio;
price3a.innerHTML = carroStanley.precio;
price4a.innerHTML = bdwd10.precio;

img1.setAttribute("src", deWalt20vMax.img);
img2.setAttribute("src", stanleyRoto1250.img);
img3.setAttribute("src", carroStanley.img);
img4.setAttribute("src", bdwd10.img);