const container = document.querySelector('.reader');
const portrait = window.matchMedia('(orientation: portrait)');

function onWheel(event) {
  // Portrait: hand scrolling back to the browser entirely.
  if (portrait.matches) return;

  // Ignore deliberate horizontal gestures (trackpad two-finger swipe, shift+wheel)
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

  // Normalise line- and page-mode deltas to pixels
  const factor =
    event.deltaMode === 1 ? 16 :
    event.deltaMode === 2 ? container.clientHeight : 1;

  // Determine scroll direction based on class presence
  const direction = container.classList.contains('direction-reverse') ? -1 : 1;

  container.scrollLeft += event.deltaY * factor * direction;
  event.preventDefault();
}

container.addEventListener('wheel', onWheel, { passive: false });
