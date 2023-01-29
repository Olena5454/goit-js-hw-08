// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
console.dir(containerGallery);

function galleryItemsCards(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"           
            alt="${description}"
          />
        </a>`
    )
    .join('');
}

containerGallery.insertAdjacentHTML(
  'beforeend',
  galleryItemsCards(galleryItems)
);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});