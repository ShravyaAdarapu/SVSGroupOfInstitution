// Directory index pages share the same canonical clean address.
(() => {
  const path = location.pathname;
  if (path.endsWith('/index.html')) {
    location.replace(path.slice(0, -10) + location.search + location.hash);
  }
})();
