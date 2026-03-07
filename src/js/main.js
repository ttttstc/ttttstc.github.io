document.addEventListener('DOMContentLoaded', () => {
  initNavHighlight();
  initScrollAnimation();
  initScanlinesToggle();
});

function initNavHighlight() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || currentPath.startsWith(href + '/')) {
      link.classList.add('active');
    }
  });
}

function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

function initScanlinesToggle() {
  const scanlinesEnabled = localStorage.getItem('scanlines') === 'true';

  const toggle = document.createElement('button');
  toggle.className = 'scanlines-toggle glass';
  toggle.innerHTML = scanlinesEnabled ? '◉ CRT' : '○ CRT';
  toggle.title = '切换扫描线效果';
  document.body.appendChild(toggle);

  if (scanlinesEnabled) {
    document.body.classList.add('scanlines');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('scanlines');
    const enabled = document.body.classList.contains('scanlines');
    localStorage.setItem('scanlines', enabled);
    toggle.innerHTML = enabled ? '◉ CRT' : '○ CRT';
  });
}
