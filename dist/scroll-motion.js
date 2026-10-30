(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;
  const selector = 'main > section:not(.hero):not(.hero-film), .homepage-main-content > section, .recognition-mark';
  const targets = [...document.querySelectorAll(selector)];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {threshold: 0, rootMargin: '0px 0px -32px 0px'});
  targets.forEach(element => {
    // Leave the first viewport and anchor destinations immediately available.
    if (element.getBoundingClientRect().top < innerHeight || element.contains(document.querySelector(':target'))) return;
    if (element.matches('.recognition-mark')) {
      const index = [...element.parentElement.children].indexOf(element);
      element.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 65}ms`);
    }
    element.classList.add('svs-reveal');
    observer.observe(element);
  });
  preference.addEventListener('change', event => {
    if (event.matches) {
      observer.disconnect();
      targets.forEach(element => element.classList.add('is-visible'));
    }
  });
})();
