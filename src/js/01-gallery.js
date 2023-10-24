// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem(element) {
  return element
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                  />
              </a>
          </li>`;
    })
    .join('');
}
const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryHandler = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
