
const cart = document.getElementById('cart');
const btnCart = document.querySelectorAll('.btnCart');

const btnAddToCard = document.querySelectorAll('.btn');
const cartCount = document.getElementById('cart-count');
const productInShoppingCart = document.getElementById('products-in-cart');

const msgEmpty = document.getElementById('msg-empty');
const checkout = document.getElementById('checkout');

let btnFinCompra = document.getElementById("checkout")



// VARIABLES NUMERICAS
let productCounterValue = 1;
let productsInCart = 0;


// EVENTOS PARA LAS FUNCIONES DEL CARRITO
btnCart.forEach(btn => btn.addEventListener('click', openCart));
btnAddToCard.forEach( btn =>  btn.addEventListener('click', addToCart))


// FUNCION PARA ABRIR EL CARRITO
function openCart(){
    cart.classList.toggle('hidden');
}

// FUNCIONES PARA CONTADOR DE PRODUCTO

function productCounterPlus(){
    setProductCounter(1);

}
function productCounterMinus(){
    setProductCounter(-1);
}
function setProductCounter(value){
    if((productCounterValue + value) > 0){
        productCounterValue += value;
        productCounter.innerHTML = productCounterValue;
    }
}

// FUNCIÓN PARA AGREGAR PRODUCTO AL CARRITO
 function addToCart(){
    updateCart();
}

function updateCart(){
    let productHtml = ''
    const productosStorage = JSON.parse(localStorage.getItem('carrito'))
    productsInCart = productosStorage.length;
    if(productsInCart === 0) productInShoppingCart.innerHTML = productHtml;
    productosStorage.forEach((productoCarrito, index) => {
        productHtml += `
        <div class="item" id="producto${productoCarrito.id}">
            <img class="product-img" src="${productoCarrito.imagen}" alt="product 1">
            <div class="details">
                <div class="product-name">${productoCarrito.nombre}</div>
                <div class="price-group">
                <div class="price">$${Number(productoCarrito.precio)}</div> x
                <div class="count">${productoCarrito.cantidad}</div>
                <div class="total-amount">$${Number(productoCarrito.precio)* productoCarrito.cantidad}</div>
            </div>
            </div>
                <img id="btnDelete${productoCarrito.id}" class="btnDelete" src="./images/icons/icon-delete.svg" alt="icon delete">
            </div>
    `;
    productInShoppingCart.innerHTML = productHtml;
    });
    updateCartIcon();
    updateMsgEmpty();
    updateCheckoutButton();
    document.querySelectorAll('.btnDelete').forEach(btn => btn.addEventListener('click', onBtnDeleteClick));
}
function updateCartIcon() { 
    cartCount.textContent = productsInCart;
    if(productsInCart == 0){
        if(!cartCount.classList.contains('hidden')){
            cartCount.classList.add('hidden');
        }
    }else{
        cartCount.classList.remove('hidden');
    }

}
// FUNCIÓN PARA MOSTRAR MENSAJE SI EL CARRITO ESTÁ VACÍO
function updateMsgEmpty(){
    if(productsInCart == 0){
        if(msgEmpty.classList.contains('hidden')){
            msgEmpty.classList.remove('hidden');
        }
    }else{
        if(!msgEmpty.classList.contains('hidden')){
            msgEmpty.classList.add('hidden');
        }
    }

}
// FUNCION PARA ACTUALIZAR PRODUCTO
function updateCheckoutButton(){
    if(productsInCart == 0){
        if(checkout.classList.contains('hidden')){
            checkout.classList.add('hidden');
        }
    }else{
        checkout.classList.remove('hidden');
    }
}

// FUNCIÓN PARA ICONO DE ELIMINAR PRODUCTO EN EL CARRITO
function onBtnDeleteClick(e){
    const productId = e.target.id.slice(9);
    // console.log(productId)
    const productosStorage = JSON.parse(localStorage.getItem('carrito'));
    const productos = productosStorage.filter(producto => producto.id != productId);
    localStorage.setItem('carrito', JSON.stringify(productos));
    productsInCart--;
    updateCart();
}

// EVENTO PARA FINALIZAR COMPRA
btnFinCompra.addEventListener('click', () => {
    localStorage.setItem('carrito', JSON.stringify([]))
    swal("Gracias por su compra!", "Los productos seran enviados en la brevedad", "success");
    productsInCart = 0;
    updateCart();
})
