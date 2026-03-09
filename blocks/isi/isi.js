export default function decorate(block) {
  const header = document.createElement('div');
  header.className = 'isi-header';
  header.innerHTML = '<h3>Important Safety Information</h3>';
  
  const content = document.createElement('div');
  content.className = 'isi-content';
  content.append(...block.children);

  block.replaceChildren(header, content);

  // Toggle expansion on mobile
  header.addEventListener('click', () => {
    block.classList.toggle('is-expanded');
  });
}