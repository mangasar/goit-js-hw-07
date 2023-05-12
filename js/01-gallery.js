import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const body = document.querySelector('body');
const galleryContainer = document.querySelector('.gallery');



function createGalleryMarkup (image) {
return image.map(({preview,original,description}) => {
return `<li class="gallery__item">
<a class="gallery__link" href= "${original}">
 <img
   class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}"
 />
</a>
</li>`
}).join('')
}
galleryContainer.insertAdjacentHTML("beforebegin" , createGalleryMarkup(galleryItems))





