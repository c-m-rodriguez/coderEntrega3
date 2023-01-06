const carrito = [];
let contenedor = document.getElementById("misprods");

function renderizarProductos() {
  for (const producto of productos) {
    //=+ acumulativo
    contenedor.innerHTML += `
    <div class="card col-sm-2">
        <img class="card-img-top" src="${producto.foto}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${producto.id}</h5>
            <p class="card-text">${producto.nombre}</p>
            <p class="card-text"> $ ${producto.precio}</p>
            <button id="btn${producto.id}" class="btn btn-primary"> comprar </button>
        </div>
    </div>
    `;
  }

  
  productos.forEach((producto)=>{
    document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
        agregarAlCarrito(producto);
    });    
});
}

renderizarProductos();


function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("Producto "+productoAComprar.nombre+" agregado al carro!");
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${productoAComprar.id}</td>
        <td>${productoAComprar.nombre}</td>
        <td>${productoAComprar.precio}</td>
    </tr>
    `

    let totalCarrito= carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText="Total a pagar $:" + totalCarrito;  //aca no pongo += porque lo esta pisando

}

botonTema.onclick=()=>{

    if(tema=="claro"){
        document.body.className="oscuro";
        botonTema.innerText="Modo Claro";
        tema="oscuro";
        estiloCarta = "estilo-carta-oscuro";
        localStorage.setItem("modo-oscuro","true");
    }
    else{
        document.body.className = "claro";
        botonTema.innerText = "Modo Oscuro";
        tema = "claro";
        estiloCarta = "estilo-carta-claro";
        localStorage.setItem("modo-oscuro","false");
    }
  
  }
  
  
  
  // compruebo en el storage local si el modo oscuro esta seleccionado //
  if (localStorage.getItem("modo-oscuro") === "true") {
    document.body.className="oscuro";
    botonTema.innerText="Modo Claro";
    tema="oscuro";
    estiloCarta = "estilo-carta-oscuro";
  }else{
    document.body.className = "claro";
    botonTema.innerText = "Modo Oscuro";
    tema = "claro";
    estiloCarta = "estilo-carta-claro";
  }
  