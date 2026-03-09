export default function decorate(block) {
  const list = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const link = row.querySelector('a');
    if (link) {
      link.classList.add('resource-link');
      if (link.href.endsWith('.pdf')) link.setAttribute('target', '_blank');
    }
    li.append(...row.children);
    list.append(li);
  });
  block.replaceChildren(list);
}