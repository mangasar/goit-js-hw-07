import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryContainer: document.querySelector(".gallery"),
    body: document.querySelector("body"),
  };

createGalleryMarkup(galleryItems);
function createGalleryMarkup(images) {
  const galleryMarkup = images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>`;
    }) .join("");
    refs.galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
  }

  refs.body.addEventListener('click', onClickImage )

  function onClickImage(evt) {
    console.log(evt.target)
  }

  refs.galleryContainer.addEventListener("click", clickOnImg);
function clickOnImg(event) {
  event.preventDefault()}