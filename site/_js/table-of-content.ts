window.addEventListener('scroll', function () {
  let headers = document.querySelectorAll('h2, h3');
  let tocLinks = document.querySelectorAll('.toc a');
  for (let i = 0; i < headers.length; i++) {
    if (isElementInViewport(headers[i])) {
      tocLinks[i]?.classList.add('active');
    } else {
      tocLinks[i]?.classList.remove('active');
    }
  }
});

function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
