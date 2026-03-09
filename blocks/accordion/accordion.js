export default function decorate(block) {
  [...block.children].forEach((row) => {
    const title = row.children[0];
    const content = row.children[1];
    
    title.classList.add('accordion-title');
    content.classList.add('accordion-content');
    
    title.addEventListener('click', () => {
      const expanded = title.getAttribute('aria-expanded') === 'true';
      title.setAttribute('aria-expanded', !expanded);
      row.classList.toggle('is-open');
    });
  });
}