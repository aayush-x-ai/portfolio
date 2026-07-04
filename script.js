const iconPaths = {
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  mail: '<path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>',
  'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  graduation: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  calendar: '<path d="M8 2v4M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  'map-pin': '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  sparkle: '<path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2L12 3z"/>'
};

const skillIcons = {
  c: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c3.71 0 6.96-2.02 8.7-5l-2.61-1.5c-1.28 2.08-3.59 3.5-6.09 3.5-3.87 0-7-3.13-7-7s3.13-7 7-7c2.5 0 4.81 1.42 6.09 3.5l2.61-1.5C18.96 4.02 15.71 2 12 2z"/>',
  cpp: '<path d="M11 2C5.48 2 1 6.48 1 12s4.48 10 10 10c3.71 0 6.96-2.02 8.7-5l-2.61-1.5c-1.28 2.08-3.59 3.5-6.09 3.5-3.87 0-7-3.13-7-7s3.13-7 7-7c2.5 0 4.81 1.42 6.09 3.5l2.61-1.5C17.96 4.02 14.71 2 11 2zm11 9h-2V9h-2v2h-2v2h2v2h2v-2h2v-2z"/>',
  python: '<path d="M12.003 2c-5.52 0-5 3.5-5 3.5h3.5v1H5.5S2 6.48 2 12c0 5.52 3.5 5 3.5 5h1v-3.5c0-1.93 1.57-3.5 3.5-3.5h7c1.93 0 3.5-1.57 3.5-3.5V5c0-5.52-3.5-3-3.5-3h-5zm-3.5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3.5 16c5.52 0 5-3.5 5-3.5h-3.5v-1H18.5S22 17.52 22 12c0-5.52-3.5-5-3.5-5h-1v3.5c0 1.93-1.57 3.5-3.5 3.5h-7c-1.93 0-3.5 1.57-3.5 3.5V19c0 5.52 3.5 3 3.5 3h5z"/>',
  html: '<path d="M2.992 21 1 1h20l-1.992 20L11 24zM18.15 6H5.85l.4 4H14.1l-.4 4H9.87l-.1-.8H6.15l.3 3.2L12 17.9l5.55-1.5.7-8.4z"/>',
  css: '<path d="M2.992 21 1 1h20l-1.992 20L11 24zM5.85 6H18.15l-.2 2H8.25l.2 2h9.3l-.6 6-5.15 1.4-5.15-1.4-.4-4h3.6l.2 1.6 1.75.5 1.75-.5.2-2H6.05z"/>',
  default: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>'
};

const skills = [
  ['c', 'C', 'languages', '#00599c'], ['cpp', 'C++', 'languages', '#00599c'], ['python', 'Python', 'languages', '#ffd43b'],
  ['html', 'HTML5', 'languages', '#e34f26'], ['css', 'CSS3', 'languages', '#1572b6'], ['default', 'JavaScript', 'languages', '#f7df1e'],
  ['default', 'MySQL', 'languages', '#00758f'], ['default', 'Machine Learning', 'ml', '#a78bfa'], ['default', 'NumPy', 'ml', '#013243'],
  ['default', 'Pandas', 'ml', '#150458'], ['default', 'Matplotlib', 'ml', '#11557c'], ['default', 'Seaborn', 'ml', '#4c72b0'],
  ['default', 'Flask', 'tools', '#000000'], ['default', 'Git', 'tools', '#f05032'], ['default', 'GitHub', 'tools', '#ffffff'],
  ['default', 'VS Code', 'tools', '#007acc'], ['default', 'Photoshop', 'creative', '#31a8ff'], ['default', 'CapCut', 'creative', '#25f4ee'],
  ['default', 'Canva', 'creative', '#00c4cc'], ['default', '30+ AI Tools', 'ai', '#ec4899']
];

const categories = [
  ['all', 'All Skills'], ['languages', 'Languages'], ['ml', 'Data Science & ML'],
  ['tools', 'Frameworks & Tools'], ['creative', 'Design & Creative'], ['ai', 'AI & Automation']
];

function svg(path, attrs = '') {
  return `<svg viewBox="0 0 24 24" ${attrs}>${path}</svg>`;
}

document.querySelectorAll('[data-icon]').forEach((el) => {
  const name = el.dataset.icon;
  el.innerHTML = svg(iconPaths[name] || iconPaths.sparkle);
});

const tabs = document.getElementById('skill-tabs');
const grid = document.getElementById('skills-grid');
let activeCategory = 'all';

function renderSkills() {
  tabs.innerHTML = categories.map(([id, label]) => (
    `<button class="tab-btn ${id === activeCategory ? 'active' : ''}" type="button" data-category="${id}">
      ${id === 'ai' ? `<span class="icon small sparkle-icon">${svg(iconPaths.sparkle)}</span>` : ''}${label}
    </button>`
  )).join('');

  grid.innerHTML = skills
    .filter((skill) => activeCategory === 'all' || skill[2] === activeCategory)
    .map(([icon, name, , color]) => (
      `<div class="glass-card skill-card reveal visible" style="--hover-glow:${color};--skill-color:${color}">
        <div class="skill-logo">${svg(skillIcons[icon] || skillIcons.default)}</div>
        <span class="skill-name">${name}</span>
      </div>`
    )).join('');
}

tabs.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  renderSkills();
});
renderSkills();

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
reveals.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 3) * 90}ms`;
  observer.observe(el);
});

const cursor = document.querySelector('.custom-cursor');
const dot = document.querySelector('.custom-cursor-dot');
let cursorX = 0;
let cursorY = 0;
let targetX = 0;
let targetY = 0;

window.addEventListener('mousemove', (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
  dot.style.transform = `translate(${targetX - 2}px, ${targetY - 2}px)`;
});

function moveCursor() {
  cursorX += (targetX - cursorX) * 0.24;
  cursorY += (targetY - cursorY) * 0.24;
  cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
  requestAnimationFrame(moveCursor);
}
moveCursor();

document.body.addEventListener('mouseover', (event) => {
  if (event.target.closest('a, button, .glass-card, .tab-btn, .timeline-dot')) cursor.classList.add('hovered');
});
document.body.addEventListener('mouseout', (event) => {
  if (event.target.closest('a, button, .glass-card, .tab-btn, .timeline-dot')) cursor.classList.remove('hovered');
});

let currentSlide = 0;
const carousel = document.getElementById('carousel-images');
const dots = document.getElementById('carousel-dots');
const slideCount = carousel.children.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.querySelectorAll('.dot').forEach((dotEl, index) => dotEl.classList.toggle('active', index === currentSlide));
}

dots.innerHTML = Array.from({ length: slideCount }, (_, index) => `<button class="dot ${index === 0 ? 'active' : ''}" type="button" aria-label="Go to slide ${index + 1}" data-slide="${index}"></button>`).join('');
document.querySelector('.carousel-control.prev').addEventListener('click', () => {
  currentSlide = currentSlide === 0 ? slideCount - 1 : currentSlide - 1;
  updateCarousel();
});
document.querySelector('.carousel-control.next').addEventListener('click', () => {
  currentSlide = currentSlide === slideCount - 1 ? 0 : currentSlide + 1;
  updateCarousel();
});
dots.addEventListener('click', (event) => {
  const dotEl = event.target.closest('[data-slide]');
  if (!dotEl) return;
  currentSlide = Number(dotEl.dataset.slide);
  updateCarousel();
});

document.getElementById('copy-email').addEventListener('click', async () => {
  const button = document.getElementById('copy-email');
  const copySlot = button.querySelector('.copy-btn .icon');
  try {
    await navigator.clipboard.writeText('aayushsahu9981@gmail.com');
    copySlot.innerHTML = svg(iconPaths.check);
    setTimeout(() => { copySlot.innerHTML = svg(iconPaths.copy); }, 2000);
  } catch {
    window.location.href = 'mailto:aayushsahu9981@gmail.com';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

const canvas = document.getElementById('particle-bg');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  const count = Math.min(520, Math.floor((window.innerWidth * window.innerHeight) / 1800));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    z: Math.random() * 1.5 + 0.2,
    vx: (Math.random() - 0.5) * 0.16,
    vy: (Math.random() - 0.5) * 0.16
  }));
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 18;
  mouseY = (event.clientY / window.innerHeight - 0.5) * 18;
});

function drawParticles() {
  ctx.fillStyle = '#030303';
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = 'rgba(0, 242, 254, 0.62)';
  particles.forEach((p) => {
    p.x += p.vx * p.z + mouseX * 0.002 * p.z;
    p.y += p.vy * p.z + mouseY * 0.002 * p.z;
    if (p.x < -20) p.x = window.innerWidth + 20;
    if (p.x > window.innerWidth + 20) p.x = -20;
    if (p.y < -20) p.y = window.innerHeight + 20;
    if (p.y > window.innerHeight + 20) p.y = -20;
    ctx.globalAlpha = 0.25 + p.z * 0.25;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.1 * p.z, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawParticles);
}

resizeCanvas();
drawParticles();
