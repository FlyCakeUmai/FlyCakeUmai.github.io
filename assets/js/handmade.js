// ハンドメイド商品データ（森・自然テーマ）
const products = [
  {
    id: 1,
    name: "森の輝きシルバーリング",
    price: "¥3,500",
    priceNum: 3500,
    category: "accessories",
    materials: ["シルバー925"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
    description: "森の木漏れ日をイメージした手作りシルバーリング。自然の曲線美を表現したシンプルで上品なデザインです。",
    materialsText: "シルバー925（リサイクルシルバー使用）",
    size: "フリーサイズ（調整可能）"
  },
  {
    id: 2,
    name: "大地の恵みレザートートバッグ",
    price: "¥12,000",
    priceNum: 12000,
    category: "bags",
    materials: ["天然レザー"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    description: "植物性タンニンで丁寧に鞣した天然レザーを使用したエコなハンドメイドトートバッグ。使うほどに味わい深く変化します。",
    materialsText: "植物性タンニン鞣しレザー（牛革）",
    size: "W35cm × H30cm × D10cm"
  },
  {
    id: 3,
    name: "森の恵み陶器フラワーベース",
    price: "¥4,800",
    priceNum: 4800,
    category: "interior",
    materials: ["天然陶器"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    description: "地元の土を使って手びねりで作った温かみのある陶器の花瓶。自然の不規則性が美しい一点もの。",
    materialsText: "地元産天然粘土、無鉛釉薬",
    size: "高さ18cm × 直径12cm"
  },
  {
    id: 4,
    name: "海の贈り物パールピアス",
    price: "¥2,800",
    priceNum: 2800,
    category: "accessories",
    materials: ["天然パール", "14kgf"],
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
    description: "海の恵みである天然パールを使用したエレガントなピアス。自然が作り出した美しい輝きをお楽しみください。",
    materialsText: "天然淡水パール、14kゴールドフィルド",
    size: "パール直径6mm"
  },
  {
    id: 5,
    name: "季節の移ろいウォールアート",
    price: "¥8,500",
    priceNum: 8500,
    category: "art",
    materials: ["天然顔料", "キャンバス"],
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
    description: "四季の森からインスピレーションを得たオリジナルウォールアート。天然顔料を使用した環境にやさしい作品です。",
    materialsText: "天然顔料、オーガニックキャンバス",
    size: "30cm × 30cm"
  },
  {
    id: 6,
    name: "森の宝箱木製小物入れ",
    price: "¥3,200",
    priceNum: 3200,
    category: "interior",
    materials: ["天然木材"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    description: "持続可能な森林から調達した天然木を使用した手作りの小物入れ。木の温もりと自然の香りが心を癒します。",
    materialsText: "FSC認証ウォールナット材",
    size: "15cm × 10cm × 5cm"
  }
];

// お客様の声データ（自然テーマ）
const testimonials = [
  {
    id: 1,
    name: "田中 美咲",
    rating: "★★★★★",
    text: "森の香りがするような、とても自然で美しい作品でした。プレゼントとして購入しましたが、受け取った方からも「自然の温もりを感じる」と大変喜んでもらえました。作家さんの自然への愛情が作品にも表れていて素敵です。",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9c7?w=50&h=50&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "佐藤 健太",
    rating: "★★★★★",
    text: "環境に配慮した素材選びから丁寧な制作まで、すべてにこだわりを感じました。商品も期待以上で、手作りの温かみと自然の美しさが感じられる逸品です。また購入したいと思います。",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "山田 花子",
    rating: "★★★★★",
    text: "自然の素材を活かした一点一点丁寧に作られた作品に感動しました。デザインもとても洗練されていて、森の中にいるような癒しを感じます。友人からも「どこの森で見つけたの？」と聞かれるほどです。",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
  }
];

// 制作工程データ（自然テーマ）
const processSteps = [
  {
    number: 1,
    title: "🌿 自然からのインスピレーション",
    description: "森の散歩や季節の変化から着想を得て、お客様のご要望と自然の美しさを融合したオリジナルデザインを作成いたします。"
  },
  {
    number: 2,
    title: "🌱 持続可能な素材選定",
    description: "環境に配慮した天然素材を厳選し、地球にやさしい方法で調達された高品質な材料を用意いたします。"
  },
  {
    number: 3,
    title: "🌳 自然のリズムで丁寧な制作",
    description: "急がず慌てず、自然のリズムに合わせて一つ一つ手作業で、時間をかけて丁寧に制作いたします。"
  },
  {
    number: 4,
    title: "🌸 愛情込めた最終仕上げ",
    description: "完成した作品は自然の恵みへの感謝を込めて品質チェックを行い、心を込めてお客様にお届けいたします。"
  }
];

// カテゴリー情報（自然テーマ）
const categories = {
  all: "🌍 すべて",
  accessories: "🌿 ナチュラルアクセサリー",
  bags: "🍃 エコバッグ・小物",
  interior: "🌳 自然インテリア",
  art: "🌸 ネイチャーアート"
};

// グローバル状態管理
let currentProducts = [...products];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
let currentView = 'grid';
let currentSort = 'name';
let searchTerm = '';
let priceFilter = { min: 0, max: 20000 };
let materialFilter = [];

// DOM読み込み完了後の初期化
document.addEventListener('DOMContentLoaded', function() {
  initializeHandmadePage();
});

function initializeHandmadePage() {
  renderProducts(currentProducts);
  renderFilters();
  renderTestimonials();
  renderProcessSteps();
  setupModal();
  setupSearchSort();
  setupCart();
  setupImageZoom();
  updateCartDisplay();
  renderRecentlyViewed();
  setupAdvancedFilters();
}

// 検索・ソート機能のセットアップ
function setupSearchSort() {
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const viewButtons = document.querySelectorAll('.view-btn');
  const clearBtn = document.getElementById('clearSearch');

  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', handleSort);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', clearSearch);
  }

  viewButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const view = this.dataset.view;
      switchView(view);
    });
  });
}

// 検索処理
function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  searchTerm = searchInput.value.toLowerCase();
  
  const clearBtn = document.getElementById('clearSearch');
  if (clearBtn) {
    clearBtn.style.display = searchTerm ? 'block' : 'none';
  }
  
  applyFilters();
}

// 検索クリア
function clearSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  
  searchTerm = '';
  applyFilters();
}

// ソート処理
function handleSort() {
  const sortSelect = document.getElementById('sortSelect');
  currentSort = sortSelect.value;
  applyFilters();
}

// 表示モード切り替え
function switchView(view) {
  currentView = view;
  const gallery = document.getElementById('productGallery');
  const viewButtons = document.querySelectorAll('.view-btn');
  
  viewButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  
  if (gallery) {
    gallery.className = `product-gallery ${view === 'list' ? 'list-view' : ''}`;
  }
}

// フィルター適用
function applyFilters() {
  let filtered = [...products];
  
  // 検索フィルター
  if (searchTerm) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.materialsText.toLowerCase().includes(searchTerm)
    );
  }
  
  // 価格フィルター
  filtered = filtered.filter(product =>
    product.priceNum >= priceFilter.min && product.priceNum <= priceFilter.max
  );
  
  // 素材フィルター
  if (materialFilter.length > 0) {
    filtered = filtered.filter(product =>
      product.materials.some(material => 
        materialFilter.some(filter => 
          material.toLowerCase().includes(filter.toLowerCase())
        )
      )
    );
  }
  
  // ソート
  filtered.sort((a, b) => {
    switch (currentSort) {
      case 'price-low':
        return a.priceNum - b.priceNum;
      case 'price-high':
        return b.priceNum - a.priceNum;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });
  
  currentProducts = filtered;
  renderProducts(filtered);
  
  // 結果の通知
  showNotification(`${filtered.length}件の商品が見つかりました`, 'info');
}

// 商品一覧の表示
function renderProducts(productsToShow) {
  const gallery = document.getElementById('productGallery');
  
  if (!gallery) return;
  
  if (productsToShow.length === 0) {
    gallery.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
        <h3>商品が見つかりませんでした</h3>
        <p>検索条件を変更してもう一度お試しください。</p>
      </div>
    `;
    return;
  }
  
  gallery.innerHTML = productsToShow.map(product => `
    <div class="product-card" data-category="${product.category}" data-id="${product.id}">
      <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" 
              onclick="toggleFavorite(${product.id})">
        ${favorites.includes(product.id) ? '❤️' : '🤍'}
      </button>
      <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="addToRecentlyViewed(${product.id}); showProductModal(${product.id})">
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price}</div>
        <div class="product-category">${categories[product.category]}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-actions">
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            🛒 カートに追加
          </button>
          <button class="compare-btn ${compareList.includes(product.id) ? 'active' : ''}" 
                  onclick="toggleCompare(${product.id})" title="比較リストに追加">
            ⚖️
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// カート機能
function setupCart() {
  const cartIcon = document.getElementById('cartIcon');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartClose = document.getElementById('cartClose');
  const cartCheckout = document.getElementById('cartCheckout');
  
  if (cartIcon) {
    cartIcon.addEventListener('click', () => {
      cartSidebar.classList.add('open');
    });
  }
  
  if (cartClose) {
    cartClose.addEventListener('click', () => {
      cartSidebar.classList.remove('open');
    });
  }
  
  if (cartCheckout) {
    cartCheckout.addEventListener('click', handleCheckout);
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${product.name}をカートに追加しました`, 'success');
  }
}

function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index > -1) {
    const product = cart[index];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${product.name}をカートから削除しました`, 'info');
  }
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (cartCount) {
    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length > 0 ? 'flex' : 'none';
  }
  
  if (cartItems) {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price}</div>
        </div>
        <button class="cart-remove" onclick="removeFromCart(${item.id})">×</button>
      </div>
    `).join('');
  }
  
  if (cartTotal) {
    const total = cart.reduce((sum, item) => sum + item.priceNum, 0);
    cartTotal.textContent = `合計: ¥${total.toLocaleString()}`;
  }
}

function handleCheckout() {
  if (cart.length === 0) {
    showNotification('カートが空です', 'warning');
    return;
  }
  
  const items = cart.map(item => `- ${item.name} (${item.price})`).join('\n');
  const total = cart.reduce((sum, item) => sum + item.priceNum, 0);
  
  const subject = 'ハンドメイド作品のご注文 - FlyCakeUmai';
  const body = `
以下の商品のご注文をお願いいたします：

${items}

合計金額: ¥${total.toLocaleString()}

お客様情報：
- お名前: 
- ご住所: 
- お電話番号: 
- ご希望納期: 

その他ご要望がございましたらお聞かせください。

よろしくお願いいたします。
  `;
  
  window.location.href = `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// 画像ズーム機能
function setupImageZoom() {
  const overlay = document.getElementById('imageZoomOverlay');
  if (!overlay) {
    const zoomOverlay = document.createElement('div');
    zoomOverlay.id = 'imageZoomOverlay';
    zoomOverlay.className = 'image-zoom-overlay';
    zoomOverlay.innerHTML = '<img class="image-zoom-content" src="" alt="">';
    document.body.appendChild(zoomOverlay);
    
    zoomOverlay.addEventListener('click', () => {
      zoomOverlay.style.display = 'none';
    });
  }
}

function zoomImage(imageSrc, altText) {
  const overlay = document.getElementById('imageZoomOverlay');
  const img = overlay.querySelector('.image-zoom-content');
  
  img.src = imageSrc;
  img.alt = altText;
  overlay.style.display = 'flex';
}

// 最近見た商品
function addToRecentlyViewed(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    // 既に履歴にある場合は削除
    recentlyViewed = recentlyViewed.filter(item => item.id !== productId);
    // 先頭に追加
    recentlyViewed.unshift(product);
    // 最大5件まで保持
    recentlyViewed = recentlyViewed.slice(0, 5);
    
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    renderRecentlyViewed();
  }
}

function renderRecentlyViewed() {
  const container = document.getElementById('recentlyViewedGrid');
  const section = document.getElementById('recentlyViewedSection');
  
  if (!container) return;
  
  if (recentlyViewed.length === 0) {
    if (section) section.style.display = 'none';
    return;
  }
  
  if (section) section.style.display = 'block';
  
  container.innerHTML = recentlyViewed.map(item => `
    <div class="recently-viewed-item" onclick="showProductModal(${item.id})">
      <img src="${item.image}" alt="${item.name}">
      <div class="name">${item.name}</div>
      <div class="price">${item.price}</div>
    </div>
  `).join('');
}

// 比較機能
function toggleCompare(productId) {
  const index = compareList.indexOf(productId);
  
  if (index === -1) {
    if (compareList.length >= 3) {
      showNotification('比較できるのは最大3つまでです', 'warning');
      return;
    }
    compareList.push(productId);
    showNotification('比較リストに追加しました', 'success');
  } else {
    compareList.splice(index, 1);
    showNotification('比較リストから削除しました', 'info');
  }
  
  localStorage.setItem('compareList', JSON.stringify(compareList));
  updateCompareDisplay();
  renderProducts(currentProducts);
}

function updateCompareDisplay() {
  const compareBar = document.getElementById('compareBar');
  if (!compareBar) return;
  
  if (compareList.length > 0) {
    compareBar.classList.add('show');
    const compareItems = document.getElementById('compareItems');
    if (compareItems) {
      compareItems.innerHTML = compareList.map(id => {
        const product = products.find(p => p.id === id);
        return `
          <div class="compare-item">
            <img src="${product.image}" alt="${product.name}">
            <span>${product.name}</span>
          </div>
        `;
      }).join('');
    }
  } else {
    compareBar.classList.remove('show');
  }
}

// 通知システム
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// 高度フィルター設定
function setupAdvancedFilters() {
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');
  const materialTags = document.querySelectorAll('.material-tag');
  
  if (priceMin && priceMax) {
    priceMin.addEventListener('input', updatePriceFilter);
    priceMax.addEventListener('input', updatePriceFilter);
  }
  
  materialTags.forEach(tag => {
    tag.addEventListener('click', function() {
      const material = this.dataset.material;
      toggleMaterialFilter(material);
      this.classList.toggle('active');
    });
  });
}

function updatePriceFilter() {
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');
  
  priceFilter.min = parseInt(priceMin.value) || 0;
  priceFilter.max = parseInt(priceMax.value) || 20000;
  
  applyFilters();
}

function toggleMaterialFilter(material) {
  const index = materialFilter.indexOf(material);
  
  if (index === -1) {
    materialFilter.push(material);
  } else {
    materialFilter.splice(index, 1);
  }
  
  applyFilters();
}

// 既存の関数たち
function renderFilters() {
  const filterContainer = document.getElementById('filterContainer');
  
  if (!filterContainer) return;
  
  filterContainer.innerHTML = Object.entries(categories).map(([key, value]) => `
    <button class="filter-btn ${key === 'all' ? 'active' : ''}" 
            data-category="${key}" onclick="filterProducts('${key}')">
      ${value}
    </button>
  `).join('');
}

function renderTestimonials() {
  const testimonialsContainer = document.getElementById('testimonialsGrid');
  
  if (!testimonialsContainer) return;
  
  testimonialsContainer.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-text">${testimonial.text}</div>
      <div class="testimonial-author">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <div class="testimonial-rating">${testimonial.rating}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProcessSteps() {
  const processContainer = document.getElementById('processSteps');
  
  if (!processContainer) return;
  
  processContainer.innerHTML = processSteps.map(step => `
    <div class="process-step">
      <div class="process-number">${step.number}</div>
      <div class="process-title">${step.title}</div>
      <div class="process-description">${step.description}</div>
    </div>
  `).join('');
}

function filterProducts(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-category="${category}"]`).classList.add('active');
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);
  
  currentProducts = filteredProducts;
  renderProducts(filteredProducts);
}

function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  
  if (index === -1) {
    favorites.push(productId);
    showNotification('お気に入りに追加しました', 'success');
  } else {
    favorites.splice(index, 1);
    showNotification('お気に入りから削除しました', 'info');
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  const btn = document.querySelector(`[data-id="${productId}"] .favorite-btn`);
  if (btn) {
    btn.textContent = favorites.includes(productId) ? '❤️' : '🤍';
    btn.classList.toggle('active', favorites.includes(productId));
  }
}

function setupModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
}

function showProductModal(productId) {
  const product = products.find(p => p.id === productId);
  const modal = document.getElementById('productModal');
  
  if (!product || !modal) return;
  
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="document.getElementById('productModal').style.display='none'">&times;</span>
      <div class="modal-details">
        <div class="modal-image-container">
          <img src="${product.image}" alt="${product.name}" class="modal-image" onclick="zoomImage('${product.image}', '${product.name}')">
        </div>
        <div class="modal-info">
          <h3>${product.name}</h3>
          <div class="modal-price">${product.price}</div>
          <div class="product-category">${categories[product.category]}</div>
          <p><strong>商品説明：</strong><br>${product.description}</p>
          <p><strong>素材：</strong> ${product.materialsText}</p>
          <p><strong>サイズ：</strong> ${product.size}</p>
          <div class="premium-badge">✦ 一点もの ✦</div>
          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <button class="order-btn" onclick="contactForOrder('${product.name}')" style="flex: 1;">
              この商品を注文する
            </button>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})" style="flex: 1;">
              🛒 カートに追加
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
  addToRecentlyViewed(productId);
}

function contactForOrder(productName) {
  const subject = `${productName}について - FlyCakeUmai`;
  const body = `
${productName}に興味があります。

以下の情報について教えてください：
- 在庫状況
- 納期
- カスタマイズの可否
- 配送方法

よろしくお願いいたします。
  `;
  
  window.location.href = `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function openSocialLink(platform) {
  const links = {
    instagram: 'https://instagram.com/flycakeumai',
    twitter: 'https://twitter.com/flycakeumai',
    facebook: 'https://facebook.com/flycakeumai',
    pinterest: 'https://pinterest.com/flycakeumai'
  };
  
  if (links[platform]) {
    window.open(links[platform], '_blank');
  }
}

function smoothScrollTo(targetId) {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// 商品比較の表示
function showComparison() {
  if (compareList.length < 2) {
    showNotification('比較するには最低2つの商品を選択してください', 'warning');
    return;
  }
  
  const compareProducts = compareList.map(id => products.find(p => p.id === id));
  
  const modal = document.getElementById('productModal');
  if (!modal) return;
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 1000px;">
      <span class="close" onclick="document.getElementById('productModal').style.display='none'">&times;</span>
      <h2 style="text-align: center; margin-bottom: 2rem;">商品比較</h2>
      <div style="display: grid; grid-template-columns: repeat(${compareProducts.length}, 1fr); gap: 2rem;">
        ${compareProducts.map(product => `
          <div style="text-align: center; padding: 1rem; border: 1px solid #eee; border-radius: 10px;">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="color: #0077cc; margin-bottom: 0.5rem;">${product.name}</h3>
            <div style="color: #d4af37; font-weight: bold; font-size: 1.2rem; margin-bottom: 1rem;">${product.price}</div>
            <div style="background: #f8f9fa; padding: 0.5rem; border-radius: 5px; margin-bottom: 0.5rem;">
              <strong>カテゴリー:</strong> ${categories[product.category]}
            </div>
            <div style="background: #f8f9fa; padding: 0.5rem; border-radius: 5px; margin-bottom: 0.5rem;">
              <strong>素材:</strong> ${product.materialsText}
            </div>
            <div style="background: #f8f9fa; padding: 0.5rem; border-radius: 5px; margin-bottom: 1rem;">
              <strong>サイズ:</strong> ${product.size}
            </div>
            <p style="color: #666; text-align: left; line-height: 1.5;">${product.description}</p>
            <div style="margin-top: 1rem;">
              <button class="add-to-cart-btn" onclick="addToCart(${product.id})" style="width: 100%; margin-bottom: 0.5rem;">
                カートに追加
              </button>
              <button class="order-btn" onclick="contactForOrder('${product.name}')" style="width: 100%;">
                注文する
              </button>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <button onclick="clearCompareList()" style="padding: 0.8rem 2rem; background: #dc3545; color: white; border: none; border-radius: 20px; cursor: pointer;">
          比較リストをクリア
        </button>
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
}

// 比較リストをクリア
function clearCompareList() {
  compareList = [];
  localStorage.setItem('compareList', JSON.stringify(compareList));
  updateCompareDisplay();
  renderProducts(currentProducts);
  document.getElementById('productModal').style.display = 'none';
  showNotification('比較リストをクリアしました', 'info');
}

// キーボードショートカット
document.addEventListener('keydown', function(e) {
  // Ctrl/Cmd + K で検索にフォーカス
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }
  
  // Escapeキーで各種クローズ
  if (e.key === 'Escape') {
    // モーダルを閉じる
    const modal = document.getElementById('productModal');
    if (modal && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
    
    // カートサイドバーを閉じる
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar && cartSidebar.classList.contains('open')) {
      cartSidebar.classList.remove('open');
    }
    
    // 画像ズームを閉じる
    const zoomOverlay = document.getElementById('imageZoomOverlay');
    if (zoomOverlay && zoomOverlay.style.display === 'flex') {
      zoomOverlay.style.display = 'none';
    }
  }
});

// ページ読み込み時のウェルカムメッセージ
window.addEventListener('load', function() {
  setTimeout(() => {
    showNotification('🎨 ハンドメイド作品ギャラリーへようこそ！', 'success');
  }, 1000);
  
  // ヒント表示
  setTimeout(() => {
    if (recentlyViewed.length === 0 && cart.length === 0) {
      showNotification('💡 商品をクリックして詳細をご覧ください', 'info');
    }
  }, 3000);
});

// スクロールに応じたアニメーション
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  // 商品カードにアニメーション効果を追加
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// 商品表示後にアニメーション設定
const originalRenderProducts = renderProducts;
renderProducts = function(productsToShow) {
  originalRenderProducts(productsToShow);
  setTimeout(observeElements, 100);
}; 