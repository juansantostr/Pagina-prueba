// ===== DATOS =====
const CATEGORIES = [
  { id: 'whopper', title: 'WHOPPER®', subtitle: 'La clásica', color: '#edd4c9' },
  { id: 'kings', title: 'KINGS COLLECTION', subtitle: 'Edición especial', color: '#f6d6b8' },
  { id: 'megastacker', title: 'MEGASTACKER®', subtitle: 'Para los valientes', color: '#f5c7c0' },
  { id: 'pollo', title: 'POLLO', subtitle: 'Crujiente y jugoso', color: '#ffd9a8' },
  { id: 'veggie', title: 'VEGGIE', subtitle: 'Alternativa vegetal', color: '#bfe3b4' },
  { id: 'postres', title: 'POSTRES', subtitle: 'Dulces y cremosos', color: '#f5cdbb' }
];

const PRODUCTS = {
  'whopper': [
    { title: 'WHOPPER® CLÁSICA COMBO', desc: 'Combo con papas y bebida' },
    { title: 'WHOPPER® CON QUESO COMBO', desc: 'Con queso derretido' },
    { title: 'WHOPPER® QUESO TOCINETA COMBO', desc: 'Bacon + queso' },
    { title: 'WHOPPER® DOBLE COMBO', desc: 'Doble carne' },
    { title: 'BACON FEAST WHOPPER® COMBO', desc: 'Sabor intenso' },
    { title: 'WHOPPER® JR COMBO', desc: 'Tamaño pequeño' }
  ],
  'pollo': [
    { title: 'CRISPY CHICKEN COMBO', desc: 'Crujiente' },
    { title: 'CHICKEN DELUXE', desc: 'Con salsa especial' }
  ],
  'veggie': [
    { title: 'VEGGIE DELIGHT', desc: 'Con vegetales frescos' }
  ],
  'postres': [
    { title: 'HELADO', desc: 'Vasito de helado' },
    { title: 'TARTA', desc: 'Tarta de manzana' }
  ],
  'kings': [
    { title: 'KING BURGER', desc: 'Premium' },
    { title: 'KING BBQ', desc: 'Sabor BBQ' }
  ],
  'megastacker': [
    { title: 'MEGASTACKER® CLÁSICO', desc: 'Triple carne' },
    { title: 'MEGASTACKER® DOBLE', desc: 'Doble con queso' }
  ]
};

// ===== ELEMENTOS =====
const categoriesEl = document.getElementById('categories');
const homeView = document.getElementById('homeView');
const productsView = document.getElementById('productsView');
const catTitle = document.getElementById('catTitle');
const catSubtitle = document.getElementById('catSubtitle');
const productsGrid = document.getElementById('productsGrid');
const backBtn = document.getElementById('backBtn');

// ===== RENDER CATEGORÍAS =====
CATEGORIES.forEach(cat => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.cat = cat.id;
  card.innerHTML = `
    <div class="img" style="background:${cat.color}">
      <div style="font-size:34px; opacity:0.95">🍔</div>
    </div>
    <div class="title">${cat.title}</div>
  `;
  card.addEventListener('click', () => openCategory(cat.id));
  categoriesEl.appendChild(card);
});

// ===== FUNCIÓN PARA ABRIR CATEGORÍA =====
function openCategory(id) {
  const cat = CATEGORIES.find(c => c.id === id);
  catTitle.textContent = (cat && cat.title) || 'Categoría';
  catSubtitle.textContent = (cat && cat.subtitle) || '';

  // Cargar productos
  productsGrid.innerHTML = '';
  const items = PRODUCTS[id] || [];
  if (items.length === 0) {
    productsGrid.innerHTML = '<p style="color:var(--muted)">No hay productos en esta categoría.</p>';
  } else {
    items.forEach(p => {
      const pc = document.createElement('div');
      pc.className = 'prod-card';
      pc.innerHTML = `
        <div class="prod-img">🍔</div>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      `;
      productsGrid.appendChild(pc);
    });
  }

  // Cambiar vista
  homeView.style.display = 'none';
  productsView.classList.add('active');
  productsView.setAttribute('aria-hidden', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== BOTÓN VOLVER =====
backBtn.addEventListener('click', () => {
  productsView.classList.remove('active');
  productsView.setAttribute('aria-hidden', 'true');
  homeView.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== NAV SIMPLE =====
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const l = a.dataset.link;
    if (l === 'menu') window.scrollTo({ top: 200, behavior: 'smooth' });
  });
});
