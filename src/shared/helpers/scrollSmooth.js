export async function smoothScrollBy(element, x, y, duration) {
  const startX = element.scrollLeft;
  const startY = element.scrollTop;
  const targetX = startX + x;
  const targetY = startY + y;
  const startTime = performance.now();
  const endTime = startTime + duration;

  const easing = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  await new Promise(resolve => {
    function step() {
      const now = performance.now();
      const remainingTime = endTime - now;

      if (remainingTime <= 0) {
        element.scrollTo(targetX, targetY);
        resolve();
        return;
      }

      const progress = 1 - remainingTime / duration;
      const easedProgress = easing(progress);

      const newX = startX + (targetX - startX) * easedProgress;
      const newY = startY + (targetY - startY) * easedProgress;

      element.scrollTo(newX, newY);

      if (now >= endTime) {
        resolve();
        return;
      }

      requestAnimationFrame(step);
    }

    step();
  });
}
