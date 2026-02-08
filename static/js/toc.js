(function () {
  var toc = document.querySelector('.toc-sidebar');
  if (!toc) return;

  // On wide screens, force details open and prevent closing
  var details = toc.querySelector('details');
  var mql = window.matchMedia('(min-width: 1280px)');

  function handleWidthChange(e) {
    if (e.matches) {
      details.setAttribute('open', '');
    }
  }

  mql.addEventListener('change', handleWidthChange);
  handleWidthChange(mql);

  // Intersection Observer for active section highlighting
  var links = toc.querySelectorAll('#TableOfContents a');
  var headingIds = [];
  links.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    if (id) headingIds.push(id);
  });

  if (headingIds.length === 0) return;

  var headingElements = headingIds.map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);

  // Track which heading is currently in view
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Remove active class from all
        links.forEach(function (link) {
          link.parentElement.classList.remove('active');
        });
        // Add to the matching one
        var activeLink = toc.querySelector(
          '#TableOfContents a[href="#' + entry.target.id + '"]'
        );
        if (activeLink) {
          activeLink.parentElement.classList.add('active');
        }
      }
    });
  }, {
    rootMargin: '0px 0px -70% 0px',
    threshold: 0
  });

  headingElements.forEach(function (el) {
    observer.observe(el);
  });
})();
