let sectionsProductsH = document.getElementById('sectionProductsH');
let sectionsProductsF = document.getElementById('sectionProductsF');



let productos = JSON.parse(localStorage.getItem('carrito')) || [];
class Producto{
    constructor(id,imagen,nombre,marca,precio){
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = 1;
    }
}

/* SECTION HOMBRE */

if(sectionsProductsH){
fetch('./js/databaseProducts.json')
    .then(response => response.json())
    .then(products => {
        const filteredProducts = products.filter((prod, index) => index <= 15);
        filteredProducts.forEach(product => {
            sectionsProductsH.innerHTML += `
                        <div class="card p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12" category="${product.category}" id="producto${product.id}" style="width: auto;">
                            <img src="${product.imagen}" style="width: 30rem;" class="card-img-top " alt="Producto Imagen">
                            <div class="card-body">
                                <h5 class="card-title nombre">${product.nombre}</h5>
                                <p class="card-text marca">${product.marca}</p>
                                <p class="card-text precio">$${product.precio}</p>
                                <div class="btn" id="btn${product.id}">
                                  <img  src="./images/icons/icon-cart.svg" alt="icon cart">
                                  <p>Agregar al Carrito</p>
                                </div>
                            </div>
                        </div>
            `
            
        });
        filteredProducts.forEach((product, index) => {
            document.getElementById(`btn${product.id}`).addEventListener('click', ()=>{
                productos = JSON.parse(localStorage.getItem('carrito')) || [];
                if(productos.find(producto => producto.nombre == product.nombre)){
                    let indice = productos.findIndex(producto => producto.nombre == product.nombre)
                    productos[indice].cantidad++;
                    localStorage.setItem('carrito', JSON.stringify(productos))
                }else{
                    let producto = new Producto (product.id, product.imagen, product.nombre,product.marca,product.precio) 
                    productos.push(producto)
                    localStorage.setItem('carrito', JSON.stringify(productos))
                } 
                addToCart();
            })
        })
        updateCart();
    })
}
/* SECTION MUJER */
if(sectionsProductsF){
fetch('./js/databaseProducts.json')
    .then(response => response.json())
    .then(products => {
        const filteredProducts = products.filter((prod, index) => index > 15);
        filteredProducts.forEach(product => {
            sectionsProductsF.innerHTML += `
                        <div class="card p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12" category="${product.category}"  id="producto${product.id}" style="width: auto;">
                            <img src="${product.imagen}" style="width: 30rem;" class="card-img-top" alt="Producto Imagen">   
                            <div class="card-body">
                                <h5 class="card-title nombre">${product.nombre}</h5>
                                <p class="card-text marca">${product.marca}</p>
                                <p class="card-text precio">$${product.precio}</p>
                                <div class="btn" id="btn${product.id}">
                                  <img  src="./images/icons/icon-cart.svg" alt="icon cart">
                                  <p>Agregar al Carrito</p>
                                </div>
                            </div>
                        </div>
            `
        });
        
        filteredProducts.forEach((product, index) => {
            document.getElementById(`btn${product.id}`).addEventListener('click', ()=>{
                productos = JSON.parse(localStorage.getItem('carrito')) || [];
                if(productos.find(producto => producto.nombre == product.nombre)){
                    let indice = productos.findIndex(producto => producto.nombre == product.nombre)
                    productos[indice].cantidad++;
                    localStorage.setItem('carrito', JSON.stringify(productos))
                }else{
                    let producto = new Producto (product.id, product.imagen, product.nombre,product.marca,product.precio) 
                    productos.push(producto)
                    localStorage.setItem('carrito', JSON.stringify(productos))
                }
                addToCart();
            })
        })
        updateCart();
    })
}

