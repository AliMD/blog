const headers = document.querySelectorAll('h2, h3');
const tocLinks = document.querySelectorAll('.toc a');

window.addEventListener('scroll', function () {
  headers.forEach((header, index) => {
    if (isElementInViewport(header)) {
      if (index !== headers.length - 1) {
        tocLinks[index - 1]?.classList.toggle('active', false);
      }
      tocLinks[index]?.classList.toggle('active', true);
    } else {
      tocLinks[index]?.classList.toggle('active', false);
    }
  });
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
