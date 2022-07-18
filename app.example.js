

// BOTONES PARA CAMBIAR CANTIDAD
const btnPlus = document.querySelector('#btnPlus'); 
const btnMinus = document.querySelector('#btnMinus'); 

// CONTADOR DE PRODUCTOS EN CARRITO
const productCounter = document.querySelector('.counter'); 

// VARIABLES PARA EVENTOS DE IMAGENES

const gallery = document.querySelectorAll('.pic');
const heroImg = document.querySelector('.product-here');

const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

const overlay = document.querySelector('.overlay');
const lightbox = document.querySelector('.lightbox');

let lightboxGallery;
let lightboxHero;

// EVENTOS
btnPlus.addEventListener('click', productCounterPlus);
btnMinus.addEventListener('click', productCounterMinus);

gallery.forEach(img => {
    img.addEventListener('click', onThumbClick);
});

btnNext.addEventListener('click', handleBtnClickNext);
btnPrevious.addEventListener('click', handleBtnClickPrevious);

heroImg.addEventListener('click', onHeroImgClick);

// FUNCIÓN PARA IMAGEN

function onThumbClick(event){
    // clear active
    gallery.forEach(img => {
        img.classList.remove('active');
    });
    // set active thumbnail
    event.target.parentElement.classList.add('active');

    // update hero image
    heroImg.src = event.target.src.replace('-thumbnail', ''); 

}
// FUNCIONES PARA CAMBIAR DE IMAGENES

function handleBtnClickNext(){
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if(imageIndex > 4) {
        imageIndex = 1;
    }
    setHeroImage(imageIndex);
}

function handleBtnClickPrevious(){
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if(imageIndex < 1) {
        imageIndex = 4;
    }
    setHeroImage(imageIndex);
}

function getCurrentImageIndex(){
    const imageIndex = parseInt(heroImg.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
    return imageIndex;
}
function setHeroImage(imageIndex){
    heroImg.src = `images/image-product-${imageIndex}.jpg`;

    gallery.forEach(img => {
        img.classList.remove('active');
    });
    gallery[imageIndex-1].classList.add('active');
}

// FUNCION PARA OVERLAY EN IMAGEN
function onHeroImgClick(){

    if(window.innerWidth>= 1440){
        if(overlay.childElementCount == 1){
                const newNode = lightbox.cloneNode(true);
                overlay.appendChild(newNode);

                const btnOverlayClose = document.querySelector('#btnOverlayClose');
                btnOverlayClose.addEventListener('click', onBtnOverlayClose);

                lightboxGallery = overlay.querySelectorAll('.pic');
                lightboxHero = overlay.querySelector('.product-here')
                lightboxGallery.forEach(img => {
                    img.addEventListener('click', onThumbClickLightBox);
                });

                const btnOverlayNext = overlay.querySelector('.next');
                const btnOverlayPrevious = overlay.querySelector('.previous');
                btnOverlayNext.addEventListener('click', handleBtnClickNextOverlay);
                btnOverlayPrevious.addEventListener('click', handleBtnClickPreviousOverlay);
            }
            overlay.classList.remove('hidden');
    } 
}

function onBtnOverlayClose() {
    overlay.classList.add('hidden');
}
function onThumbClickLightBox(event){
    // claro activo
    lightboxGallery.forEach(img => {
        img.classList.remove('active');
    });
    // establecer miniatura activa
    event.target.parentElement.classList.add('active');

    // actualizar hero image
    lightboxHero.src = event.target.src.replace('-thumbnail', ''); 

}



function handleBtnClickNextOverlay(){
    let imageIndex = getOverlayCurrentImageIndex();
    imageIndex++;
    if(imageIndex > 4) {
        imageIndex = 1;
    }
    setOverlayHeroImage(imageIndex);
}
function handleBtnClickPreviousOverlay(){
    let imageIndex = getOverlayCurrentImageIndex();
    imageIndex--;
    if(imageIndex < 1) {
        imageIndex = 4;
    }
    setOverlayHeroImage(imageIndex);
}
function getOverlayCurrentImageIndex(){
    const imageIndex = parseInt(lightboxHero.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
    return imageIndex;
}
function setOverlayHeroImage(imageIndex){
    lightboxHero.src = `./images/image-product-${imageIndex}.jpg`;

    lightboxGallery.forEach(img => {
        img.classList.remove('active');
    });
    lightboxGallery[imageIndex-1].classList.add('active');
}