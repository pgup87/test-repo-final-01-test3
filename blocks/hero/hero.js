import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`hero-cols-${cols.length}`);

  // Identify the image and content
  [...block.children].forEach((row) => {
    row.classList.add('hero-row');
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        col.classList.add('hero-image');
        const img = pic.querySelector('img');
        if (img) img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, true, [{ width: '2000' }]));
      } else {
        col.classList.add('hero-content');
      }
    });
  });
}