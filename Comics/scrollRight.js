const container = document.querySelector('.reader');

container.addEventListener('wheel', (event) => {
  container.scrollLeft -= event.deltaY;
  event.preventDefault();
});