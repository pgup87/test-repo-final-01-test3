export default function decorate(block) {
  const link = block.querySelector('a');
  const poster = block.querySelector('img');

  if (link) {
    const url = new URL(link.href);
    const isYouTube = url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be');

    block.innerHTML = `
      <div class="video-container">
        ${isYouTube 
          ? `<iframe src="https://www.youtube.com/embed/${url.searchParams.get('v') || url.pathname.slice(1)}" frameborder="0" allowfullscreen></iframe>` 
          : `<video controls poster="${poster ? poster.src : ''}"><source src="${link.href}" type="video/mp4"></video>`}
      </div>
    `;
  }
}