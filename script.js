// Menü öğelerini localStorage'dan al veya varsayılan değerleri kullan
let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [
    // Kahvaltılar
    {
        id: 1,
        name: "Serpme Kahvaltı",
        price: 150,
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3",
        description: "Zengin içerikli geleneksel Türk kahvaltısı. Taze pişmiş ekmekler, çeşitli peynirler, zeytin, domates, salatalık, bal, kaymak ve daha fazlası...",
        ingredients: ["Beyaz Peynir", "Kaşar Peyniri", "Siyah Zeytin", "Yeşil Zeytin", "Domates", "Salatalık", "Bal", "Kaymak", "Tereyağı", "Reçel", "Yumurta", "Taze Ekmek"]
    },
    {
        id: 2,
        name: "Menemen",
        price: 45,
        category: "breakfast",
        image: "img/images.jpeg",
        description: "Geleneksel Türk kahvaltı yemeği. Taze domates, biber ve yumurtanın mükemmel uyumu. Tereyağında hazırlanır ve isteğe göre peynir ilavesi yapılabilir.",
        ingredients: ["Domates", "Biber", "Yumurta", "Tereyağı", "Tuz", "Karabiber", "İsteğe Bağlı Peynir"]
    },
    {
        id: 3,
        name: "Sahanda Yumurta",
        price: 35,
        category: "breakfast",
        image: "img/sahanda yumruta.webp",
        description: "Tereyağında kızarmış, sarısı akan nefis yumurta. Yanında taze ekmek ve domates ile servis edilir.",
        ingredients: ["Yumurta", "Tereyağı", "Tuz", "Karabiber"]
    },

    // Çorbalar
    {
        id: 4,
        name: "Mercimek Çorbası",
        price: 30,
        category: "soups",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3",
        description: "Geleneksel Türk mutfağının vazgeçilmezi. Kırmızı mercimek, havuç ve özel baharatlarla hazırlanan besleyici çorba.",
        ingredients: ["Kırmızı Mercimek", "Soğan", "Havuç", "Patates", "Tereyağı", "Tuz", "Karabiber", "Kırmızı Biber"]
    },
    {
        id: 5,
        name: "Domates Çorbası",
        price: 30,
        category: "soups",
        image: "img/domatescorbasi2.webp",
        description: "Taze domateslerle hazırlanan, kremalı ve aromatik çorba. Üzerine krema ve kıtır ekmek ile servis edilir.",
        ingredients: ["Domates", "Soğan", "Sarımsak", "Krema", "Tereyağı", "Tuz", "Karabiber", "Kekik"]
    },
    {
        id: 6,
        name: "Tavuk Çorbası",
        price: 35,
        category: "soups",
        image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?ixlib=rb-4.0.3",
        description: "Lezzetli ve besleyici tavuk çorbası. Taze sebzeler ve tavuk suyu ile hazırlanır.",
        ingredients: ["Tavuk", "Havuç", "Patates", "Soğan", "Tuz", "Karabiber", "Maydanoz"]
    },

    // Et Yemekleri
    {
        id: 7,
        name: "Kuzu Pirzola",
        price: 160,
        category: "meat",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3",
        description: "Özenle seçilmiş kuzu pirzola, özel marine sosunda dinlendirilip ızgarada pişirilir. Yanında pilav ve ızgara sebze ile servis edilir.",
        ingredients: ["Kuzu Pirzola", "Zeytinyağı", "Kekik", "Biberiye", "Sarımsak", "Tuz", "Karabiber"]
    },
    {
        id: 8,
        name: "Dana Antrikot",
        price: 180,
        category: "meat",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3",
        description: "Izgarada pişirilmiş dana antrikot, özel baharatlarla marine edilmiştir. Yanında patates püresi ve sebze garnitürü ile servis edilir.",
        ingredients: ["Dana Antrikot", "Zeytinyağı", "Tuz", "Karabiber", "Biberiye"]
    },
    {
        id: 9,
        name: "Köfte",
        price: 120,
        category: "meat",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3",
        description: "Geleneksel Türk köftesi. Izgarada pişirilmiş, yanında pilav ve salata ile servis edilir.",
        ingredients: ["Dana Kıyma", "Soğan", "Ekmek Kırıntısı", "Tuz", "Karabiber", "Kimyon"]
    },

    // Tavuk Yemekleri
    {
        id: 10,
        name: "Tavuk Şiş",
        price: 90,
        category: "chicken",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3",
        description: "Izgarada pişirilmiş tavuk şiş. Yanında pilav ve salata ile servis edilir.",
        ingredients: ["Tavuk Göğsü", "Zeytinyağı", "Tuz", "Karabiber", "Kekik"]
    },
    {
        id: 11,
        name: "Tavuk Sote",
        price: 85,
        category: "chicken",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3",
        description: "Taze sebzelerle sote edilmiş tavuk. Yanında pilav ile servis edilir.",
        ingredients: ["Tavuk Göğsü", "Soğan", "Biber", "Domates", "Tuz", "Karabiber"]
    },
    {
        id: 12,
        name: "Fırın Tavuk",
        price: 95,
        category: "chicken",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3",
        description: "Fırında pişirilmiş tavuk. Yanında patates ve sebze garnitürü ile servis edilir.",
        ingredients: ["Tavuk", "Patates", "Havuç", "Soğan", "Tuz", "Karabiber"]
    },

    // Makarnalar
    {
        id: 13,
        name: "Fettuccine Alfredo",
        price: 80,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3",
        description: "Kremsi parmesan soslu İtalyan makarnası. Taze krema ve parmesan peyniri ile hazırlanır, üzerine maydanoz serpilir.",
        ingredients: ["Fettuccine", "Krema", "Parmesan", "Tereyağı", "Sarımsak", "Tuz", "Karabiber", "Maydanoz"]
    },
    {
        id: 14,
        name: "Spagetti Bolonez",
        price: 75,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3",
        description: "Bolonez soslu spagetti. Dana kıyma, domates sosu ve baharatlarla hazırlanır.",
        ingredients: ["Spagetti", "Dana Kıyma", "Domates Sosu", "Soğan", "Sarımsak", "Tuz", "Karabiber"]
    },
    {
        id: 15,
        name: "Mac and Cheese",
        price: 70,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixlib=rb-4.0.3",
        description: "Kremalı peynir soslu makarna. Üzerine ekstra peynir serpilerek fırınlanır.",
        ingredients: ["Makarna", "Cheddar Peyniri", "Krema", "Tereyağı", "Tuz", "Karabiber"]
    },

    // Salatalar
    {
        id: 16,
        name: "Sezar Salata",
        price: 65,
        category: "salads",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3",
        description: "Taze marul, parmesan peyniri ve kruton ile hazırlanan klasik Sezar salata.",
        ingredients: ["Marul", "Parmesan", "Kruton", "Sezar Sosu"]
    },
    {
        id: 17,
        name: "Akdeniz Salata",
        price: 60,
        category: "salads",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3",
        description: "Taze sebzelerle hazırlanan Akdeniz salata. Zeytinyağı ve limon sosu ile servis edilir.",
        ingredients: ["Domates", "Salatalık", "Zeytin", "Feta Peyniri", "Zeytinyağı", "Limon"]
    },
    {
        id: 18,
        name: "Ton Balıklı Salata",
        price: 70,
        category: "salads",
        image: "img/ton-balikli-salata-17.webp",
        description: "Ton balığı, marul ve taze sebzelerle hazırlanan salata. Zeytinyağı ve limon sosu ile servis edilir.",
        ingredients: ["Ton Balığı", "Marul", "Domates", "Salatalık", "Zeytinyağı", "Limon"]
    },

    // Pizzalar
    {
        id: 19,
        name: "Karışık Pizza",
        price: 110,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3",
        description: "Çeşitli malzemelerle hazırlanan karışık pizza. Mozzarella peyniri, sucuk, mantar ve biber içerir.",
        ingredients: ["Mozzarella", "Sucuk", "Mantar", "Biber", "Domates Sosu"]
    },
    {
        id: 20,
        name: "Margarita Pizza",
        price: 90,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3",
        description: "Klasik İtalyan margarita pizza. Taze mozzarella ve fesleğen ile hazırlanır.",
        ingredients: ["Mozzarella", "Fesleğen", "Domates Sosu"]
    },
    {
        id: 21,
        name: "Sucuklu Pizza",
        price: 100,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3",
        description: "Sucuk ve mozzarella peyniri ile hazırlanan lezzetli pizza.",
        ingredients: ["Sucuk", "Mozzarella", "Domates Sosu"]
    },

    // Burgerler
    {
        id: 22,
        name: "Cheeseburger",
        price: 85,
        category: "burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3",
        description: "Dana eti, cheddar peyniri, marul, domates, turşu ve özel sos ile hazırlanan klasik cheeseburger.",
        ingredients: ["Dana Eti", "Cheddar Peyniri", "Marul", "Domates", "Turşu", "Özel Sos"]
    },
    {
        id: 23,
        name: "Tavuk Burger",
        price: 75,
        category: "burger",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3",
        description: "Izgarada pişirilmiş tavuk göğsü, marul, domates ve özel sos ile hazırlanan tavuk burger.",
        ingredients: ["Tavuk Göğsü", "Marul", "Domates", "Özel Sos"]
    },
    {
        id: 24,
        name: "Mega Burger",
        price: 95,
        category: "burger",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3",
        description: "Çift katlı dana eti, cheddar peyniri, marul, domates, turşu ve özel sos ile hazırlanan mega burger.",
        ingredients: ["Dana Eti", "Cheddar Peyniri", "Marul", "Domates", "Turşu", "Özel Sos"]
    },

    // Gözlemeler
    {
        id: 25,
        name: "Kaşarlı Gözleme",
        price: 45,
        category: "gozleme",
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3",
        description: "Taze kaşar peyniri ile hazırlanan gözleme. Yanında domates ve salatalık ile servis edilir.",
        ingredients: ["Kaşar Peyniri", "Un", "Tuz", "Su"]
    },
    {
        id: 26,
        name: "Kıymalı Gözleme",
        price: 50,
        category: "gozleme",
        image: "img/Kıymalı Gözleme 2.webp",
        description: "Dana kıyma ile hazırlanan gözleme. Yanında domates ve salatalık ile servis edilir.",
        ingredients: ["Dana Kıyma", "Un", "Tuz", "Su"]
    },
    {
        id: 27,
        name: "Patatesli Gözleme",
        price: 45,
        category: "gozleme",
        image: "img/Kıymalı Gözleme.webp",
        description: "Patates püresi ile hazırlanan gözleme. Yanında domates ve salatalık ile servis edilir.",
        ingredients: ["Patates", "Un", "Tuz", "Su"]
    },

    // İçecekler
    {
        id: 28,
        name: "Türk Kahvesi",
        price: 30,
        category: "drinks",
        image: "img/türk kahvesi.jpg",
        description: "Geleneksel Türk kahvesi. Yanında lokum ile servis edilir.",
        ingredients: ["Türk Kahvesi", "Su", "Şeker"]
    },
    {
        id: 29,
        name: "Ayran",
        price: 15,
        category: "drinks",
        image: "img/ayran.jpg",
        description: "Taze yoğurt ile hazırlanan ayran. Serinletici ve ferahlatıcı.",
        ingredients: ["Yoğurt", "Su", "Tuz"]
    },
    {
        id: 30,
        name: "Taze Portakal Suyu",
        price: 25,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3",
        description: "Taze sıkılmış portakal suyu. Vitamin deposu.",
        ingredients: ["Portakal"]
    },

    // Tatlılar
    {
        id: 31,
        name: "Künefe",
        price: 60,
        category: "desserts",
        image: "img/künefe.jpg",
        description: "Geleneksel Antep fıstıklı künefe. Özel peyniri ve kadayıf teliyle hazırlanır, sıcak servis edilir.",
        ingredients: ["Kadayıf", "Özel Peynir", "Tereyağı", "Antep Fıstığı", "Şerbet"]
    },
    {
        id: 32,
        name: "Cheesecake",
        price: 55,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3",
        description: "Kremalı cheesecake. Üzerine taze meyve sosu ile servis edilir.",
        ingredients: ["Krem Peynir", "Bisküvi", "Şeker", "Yumurta", "Vanilya"]
    },
    {
        id: 33,
        name: "Baklava",
        price: 70,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1599321955726-e048426594af?ixlib=rb-4.0.3",
        description: "Geleneksel Türk baklavası. Antep fıstığı ve şerbet ile hazırlanır.",
        ingredients: ["Yufka", "Antep Fıstığı", "Tereyağı", "Şerbet"]
    }
];

// Yeni yemek çeşitleri ekle
menuItems.push(
    // Kebaplar
    {
        id: 34,
        name: "Adana Kebap",
        price: 140,
        category: "meat",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3",
        description: "Özel baharatlarla hazırlanmış el yapımı Adana kebap. Közlenmiş biber ve domatesle servis edilir.",
        ingredients: ["Dana Kıyma", "Kuzu Kıyma", "Kırmızı Biber", "Soğan", "Sarımsak", "Özel Baharatlar"]
    },
    {
        id: 35,
        name: "İskender Kebap",
        price: 160,
        category: "meat",
        image: "https://images.unsplash.com/photo-1644364935906-792b2245a2c0?ixlib=rb-4.0.3",
        description: "Özel domates soslu, tereyağlı ve yoğurtlu İskender kebap. Taze pide üzerinde servis edilir.",
        ingredients: ["Döner Et", "Pide", "Tereyağı", "Domates Sosu", "Yoğurt"]
    },
    // Deniz Ürünleri
    {
        id: 36,
        name: "Izgara Levrek",
        price: 170,
        category: "seafood",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3",
        description: "Taze levrek ızgarada pişirilir, özel sos ve limonla servis edilir.",
        ingredients: ["Levrek", "Zeytinyağı", "Limon", "Kekik", "Maydanoz"]
    },
    {
        id: 37,
        name: "Karides Güveç",
        price: 180,
        category: "seafood",
        image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3",
        description: "Özel soslu, kaşarlı karides güveç. Mantar ve sebzelerle hazırlanır.",
        ingredients: ["Karides", "Kaşar Peyniri", "Mantar", "Domates", "Biber", "Sarımsak"]
    },
    // Vejetaryen
    {
        id: 38,
        name: "Sebzeli Noodle",
        price: 85,
        category: "vegetarian",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3",
        description: "Taze sebzelerle hazırlanmış noodle. Özel soya sosuyla servis edilir.",
        ingredients: ["Noodle", "Havuç", "Brokoli", "Soğan", "Biber", "Soya Sosu"]
    },
    {
        id: 39,
        name: "Falafel Tabağı",
        price: 75,
        category: "vegetarian",
        image: "img/Falafel Tabağı.jpg",
        description: "Nohuttan yapılmış geleneksel falafel. Humus ve salatayla servis edilir.",
        ingredients: ["Nohut", "Maydanoz", "Soğan", "Sarımsak", "Kimyon", "Kişniş"]
    }
);

// Modal elementlerini seç
const modal = document.getElementById('itemModal');
const closeModal = document.querySelector('.close-modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalIngredients = document.getElementById('modalIngredients');
let qrcode = null;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');
const menuContainer = document.getElementById('menuItems');
const scrollTopBtn = document.getElementById('scrollTop');
const shortcutBtns = document.querySelectorAll('.shortcut-btn');
const ratingStars = document.querySelectorAll('.stars i');
const shareButtons = document.querySelectorAll('.share-btn');

// View Switching
function switchView(view) {
    if (view === 'list') {
        menuContainer.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    } else {
        menuContainer.classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    }
}

gridViewBtn.addEventListener('click', () => switchView('grid'));
listViewBtn.addEventListener('click', () => switchView('list'));

// Performans optimizasyonu için debounce fonksiyonu
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Görüntü lazy loading için IntersectionObserver
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// Menü öğelerini görüntüle - optimize edilmiş versiyon
function displayMenuItems(items) {
    const menuContainer = document.getElementById('menuItems');
    const fragment = document.createDocumentFragment();
    
    items.forEach((item, index) => {
        const delay = index * 100;
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.style.animation = `fadeIn 0.5s ease forwards ${delay}ms`;
        
        menuItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description || ''}</p>
                <p class="item-price">${item.price} ₺</p>
                <button class="detail-btn">Detaylar</button>
            </div>
        `;

        // Detay butonuna tıklama olayı ekle
        const detailBtn = menuItem.querySelector('.detail-btn');
        detailBtn.addEventListener('click', () => showItemDetails(item));
        
        fragment.appendChild(menuItem);
    });

    menuContainer.innerHTML = '';
    menuContainer.appendChild(fragment);
}

// Arama fonksiyonunu debounce ile optimize et
searchInput.addEventListener('input', debounce((e) => {
    const searchTerm = e.target.value.toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
    
    let filteredItems = menuItems.filter(item => 
        (item.name.toLowerCase().includes(searchTerm) || 
        (item.description && item.description.toLowerCase().includes(searchTerm))) &&
        (activeCategory === 'all' || item.category === activeCategory)
    );

    const sortType = sortSelect.value;
    filteredItems = sortItems(filteredItems, sortType);
    
    displayMenuItems(filteredItems);
}, 300));

// Sorting Functionality
function sortItems(items, sortType) {
    const sortedItems = [...items];
    switch(sortType) {
        case 'priceAsc':
            return sortedItems.sort((a, b) => a.price - b.price);
        case 'priceDesc':
            return sortedItems.sort((a, b) => b.price - a.price);
        case 'nameAsc':
            return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        case 'nameDesc':
            return sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        default:
            return sortedItems;
    }
}

sortSelect.addEventListener('change', (e) => {
    const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) &&
        (activeCategory === 'all' || item.category === activeCategory)
    );
    
    filteredItems = sortItems(filteredItems, e.target.value);
    displayMenuItems(filteredItems);
});

// Scroll to Top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Category Shortcuts
shortcutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        const categoryBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
        categoryBtn.click();
        categoryBtn.scrollIntoView({ behavior: 'smooth' });
    });
});

// Rating System
let ratings = JSON.parse(localStorage.getItem('ratings')) || {};

function updateStars(rating) {
    ratingStars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

function updateRatingCount(itemId) {
    const ratingCount = document.getElementById('ratingCount');
    const itemRatings = ratings[itemId] || [];
    ratingCount.textContent = itemRatings.length;
}

ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        const currentItem = star.closest('.modal').getAttribute('data-item-id');
        
        if (!ratings[currentItem]) {
            ratings[currentItem] = [];
        }
        ratings[currentItem].push(rating);
        localStorage.setItem('ratings', JSON.stringify(ratings));
        
        updateStars(rating);
        updateRatingCount(currentItem);
    });
});

// Share Functionality
shareButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const platform = btn.getAttribute('data-platform');
        const url = window.location.href;
        const text = "Lezzet Durağı'nda harika yemekler sizi bekliyor!";
        
        let shareUrl;
        switch(platform) {
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                break;
        }
        
        window.open(shareUrl, '_blank');
    });
});

// Enhanced Modal Display
function showModal(item) {
    modal.setAttribute('data-item-id', item.id);
    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalTitle.textContent = item.name;
    modalPrice.textContent = `${item.price} ₺`;
    modalDescription.textContent = item.description || "Bu ürün için henüz detaylı açıklama eklenmemiştir.";
    
    // İçindekiler listesini oluştur
    modalIngredients.innerHTML = '';
    if (item.ingredients && item.ingredients.length > 0) {
        item.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            modalIngredients.appendChild(li);
        });
    } else {
        modalIngredients.innerHTML = '<li>İçindekiler listesi henüz eklenmemiştir.</li>';
    }

    // Besin değerleri
    const nutritionInfo = document.getElementById('nutritionInfo');
    nutritionInfo.innerHTML = '';
    if (item.nutrition) {
        Object.entries(item.nutrition).forEach(([key, value]) => {
            nutritionInfo.innerHTML += `
                <div class="nutrition-item">
                    <h4>${key}</h4>
                    <p>${value}</p>
                </div>
            `;
        });
    } else {
        nutritionInfo.innerHTML = '<p>Besin değerleri bilgisi henüz eklenmemiştir.</p>';
    }

    // Yıldız derecelendirmesini güncelle
    updateStars(0);
    updateRatingCount(item.id);

    // QR kodu oluştur
    if (qrcode) {
        qrcode.clear();
        document.getElementById('qrcode').innerHTML = '';
    }
    qrcode = new QRCode(document.getElementById('qrcode'), {
        text: window.location.href,
        width: 128,
        height: 128,
        colorDark: '#2c3e50',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Modal'ı kapat
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Arka plan kaydırmayı tekrar etkinleştir
}

// Modal kapatma olayları
closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// ESC tuşu ile modal'ı kapatma
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModalFunc();
    }
});

// Kategori filtreleme
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.category-btn.active').classList.remove('active');
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        displayMenuItems(filteredItems);
    });
});

// Performans için event delegation kullan
document.querySelector('.menu-categories').addEventListener('click', (e) => {
    const button = e.target.closest('.category-btn');
    if (!button) return;

    document.querySelector('.category-btn.active').classList.remove('active');
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    displayMenuItems(filteredItems);
});

// Scroll olayını throttle et
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const scrollBtn = document.getElementById('scrollTop');
            scrollBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Menü verilerini önbelleğe al
const menuCache = new Map();
function getCachedMenuItems(category) {
    if (!menuCache.has(category)) {
        const items = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        menuCache.set(category, items);
    }
    return menuCache.get(category);
}

// Modal görüntüsünü optimize et
function showModal(item) {
    // Mevcut modal kodu...
    
    // Görüntüyü progressive loading ile yükle
    const tempImage = new Image();
    tempImage.onload = () => {
        modalImage.src = item.image;
        modalImage.classList.add('loaded');
    };
    tempImage.src = item.image;
    
    // QR kodunu lazy loading ile yükle
    requestAnimationFrame(() => {
        if (qrcode) {
            qrcode.clear();
            document.getElementById('qrcode').innerHTML = '';
        }
        qrcode = new QRCode(document.getElementById('qrcode'), {
            text: window.location.href,
            width: 128,
            height: 128,
            colorDark: '#2c3e50',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    });
}

// Sayfa yüklendiğinde menüyü göster
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menuItems);
});

// Garson çağırma fonksiyonu
const callWaiterBtn = document.getElementById('callWaiter');

function showWaiterNotification() {
    // Varsa eski bildirimi kaldır
    const oldNotification = document.querySelector('.waiter-notification');
    if (oldNotification) {
        oldNotification.remove();
    }

    // Yeni bildirim oluştur
    const notification = document.createElement('div');
    notification.className = 'waiter-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Garson çağrınız alındı, en kısa sürede size ulaşacağız.</span>
    `;

    // Bildirimi sayfaya ekle
    document.body.appendChild(notification);

    // 3 saniye sonra bildirimi kaldır
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

callWaiterBtn.addEventListener('click', () => {
    showWaiterNotification();
    // Burada gerçek bir sistemde garson çağırma API'si çağrılabilir
});

// Yeni kategorileri ekle
document.querySelector('.menu-categories').insertAdjacentHTML('beforeend', `
    <button class="category-btn" data-category="seafood">
        <i class="fas fa-fish"></i>
        <span>Deniz Ürünleri</span>
    </button>
    <button class="category-btn" data-category="vegetarian">
        <i class="fas fa-leaf"></i>
        <span>Vejetaryen</span>
    </button>
`);

// Yeni özellikler için değişkenler
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// DOM Elements
const reserveTableBtn = document.getElementById('reserveTable');
const favoritesBtn = document.getElementById('favorites');
const orderTrackingBtn = document.getElementById('orderTracking');
const reservationModal = document.getElementById('reservationModal');
const favoritesModal = document.getElementById('favoritesModal');
const orderTrackingModal = document.getElementById('orderTrackingModal');
const cartModal = document.getElementById('cartModal');
const reservationForm = document.getElementById('reservationForm');
const favoritesList = document.getElementById('favoritesList');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const trackOrderBtn = document.getElementById('trackOrder');

// Masa Rezervasyonu
reserveTableBtn.addEventListener('click', () => {
    reservationModal.style.display = 'block';
});

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('reservationName').value,
        phone: document.getElementById('reservationPhone').value,
        guests: document.getElementById('reservationGuests').value,
        date: document.getElementById('reservationDate').value,
        time: document.getElementById('reservationTime').value,
        notes: document.getElementById('reservationNotes').value
    };
    
    // Rezervasyon işlemi simülasyonu
    setTimeout(() => {
        showNotification('Rezervasyonunuz başarıyla alındı!', 'success');
        reservationModal.style.display = 'none';
        reservationForm.reset();
    }, 1000);
});

// Favoriler
function updateFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    document.querySelector('.favorites-count').textContent = favorites.length;
}

function addToFavorites(item) {
    if (!favorites.find(f => f.id === item.id)) {
        favorites.push(item);
        updateFavorites();
        showNotification('Ürün favorilere eklendi!', 'success');
    }
}

function removeFromFavorites(itemId) {
    favorites = favorites.filter(item => item.id !== itemId);
    updateFavorites();
    displayFavorites();
    showNotification('Ürün favorilerden kaldırıldı!', 'info');
}

function displayFavorites() {
    favoritesList.innerHTML = '';
    favorites.forEach(item => {
        const favoriteItem = document.createElement('div');
        favoriteItem.className = 'favorite-item';
        favoriteItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="favorite-item-info">
                <h3>${item.name}</h3>
                <p>${item.price} ₺</p>
            </div>
            <i class="fas fa-trash remove-favorite" onclick="removeFromFavorites(${item.id})"></i>
        `;
        favoritesList.appendChild(favoriteItem);
    });
}

favoritesBtn.addEventListener('click', () => {
    favoritesModal.style.display = 'block';
    displayFavorites();
});

// Sepet İşlemleri
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartTotal();
}

function addToCart(item) {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCart();
    showNotification('Ürün sepete eklendi!', 'success');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    showNotification('Ürün sepetten kaldırıldı!', 'info');
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        updateCart();
    }
}

function displayCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="cart-item-price">${item.price} ₺</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <i class="fas fa-trash" onclick="removeFromCart(${item.id})"></i>
        `;
        cartItems.appendChild(cartItem);
    });
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total} ₺`;
}

// Sipariş Takibi
function trackOrder(orderNumber) {
    const order = orders.find(o => o.number === orderNumber);
    if (order) {
        const orderStatus = document.getElementById('orderStatus');
        orderStatus.innerHTML = `
            <div class="status-step ${order.status >= 1 ? 'active' : ''}">
                <div class="step-icon"><i class="fas fa-check"></i></div>
                <div class="step-info">
                    <h4>Sipariş Alındı</h4>
                    <p>Siparişiniz başarıyla alındı.</p>
                </div>
            </div>
            <div class="status-step ${order.status >= 2 ? 'active' : ''}">
                <div class="step-icon"><i class="fas fa-utensils"></i></div>
                <div class="step-info">
                    <h4>Hazırlanıyor</h4>
                    <p>Siparişiniz hazırlanıyor.</p>
                </div>
            </div>
            <div class="status-step ${order.status >= 3 ? 'active' : ''}">
                <div class="step-icon"><i class="fas fa-truck"></i></div>
                <div class="step-info">
                    <h4>Yolda</h4>
                    <p>Siparişiniz yola çıktı.</p>
                </div>
            </div>
            <div class="status-step ${order.status >= 4 ? 'active' : ''}">
                <div class="step-icon"><i class="fas fa-home"></i></div>
                <div class="step-info">
                    <h4>Teslim Edildi</h4>
                    <p>Siparişiniz teslim edildi.</p>
                </div>
            </div>
        `;
    } else {
        showNotification('Sipariş bulunamadı!', 'error');
    }
}

trackOrderBtn.addEventListener('click', () => {
    const orderNumber = document.getElementById('orderNumber').value;
    trackOrder(orderNumber);
});

// Bildirim Sistemi
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.getElementById('notificationsContainer').appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    updateFavorites();
    displayCart();
});

// Müşteri Yorumları
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
const reviewsModal = document.getElementById('reviewsModal');
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const showReviewsBtn = document.getElementById('showReviews');

// Sadakat Puanları
let loyaltyPoints = JSON.parse(localStorage.getItem('loyaltyPoints')) || {
    points: 0,
    history: [],
    level: 'bronze'
};
const loyaltyModal = document.getElementById('loyaltyModal');
const showLoyaltyBtn = document.getElementById('showLoyalty');

// Özel Etkinlikler
let events = [
    {
        id: 1,
        title: 'Şef ile Yemek Atölyesi',
        date: '2024-02-15',
        time: '14:00',
        description: 'Profesyonel şefimiz ile İtalyan mutfağının sırlarını öğrenin.',
        capacity: 20,
        registered: 12
    },
    {
        id: 2,
        title: 'Wine & Dine Akşamı',
        date: '2024-02-20',
        time: '19:00',
        description: 'Özel şarap tadımı eşliğinde 5 çeşit lezzetli yemek.',
        capacity: 30,
        registered: 25
    },
    {
        id: 3,
        title: 'Kahve Yapım Teknikleri',
        date: '2024-02-25',
        time: '15:00',
        description: 'Barista eğitmenimizden kahve yapımının püf noktalarını öğrenin.',
        capacity: 15,
        registered: 8
    }
];
const eventsModal = document.getElementById('eventsModal');
const showEventsBtn = document.getElementById('showEvents');
const eventRegistrationForm = document.getElementById('eventRegistrationForm');
const eventSelect = document.getElementById('eventSelect');

// Yorumları Göster
function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div>
                        <h4>${review.name}</h4>
                        <div class="review-rating">
                            ${getStarRating(review.rating)}
                        </div>
                    </div>
                </div>
                <span class="review-date">${formatDate(review.date)}</span>
            </div>
            <p class="review-text">${review.text}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Yorum Ekle
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newReview = {
        name: document.getElementById('reviewName').value,
        rating: parseInt(document.querySelector('.stars-input .fas')?.dataset.rating || '5'),
        text: document.getElementById('reviewText').value,
        date: new Date().toISOString()
    };
    
    reviews.unshift(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    displayReviews();
    reviewForm.reset();
    showNotification('Yorumunuz başarıyla eklendi!', 'success');
});

// Sadakat Puanlarını Göster
function displayLoyaltyInfo() {
    document.getElementById('totalPoints').textContent = loyaltyPoints.points;
    document.getElementById('loyaltyLevel').textContent = loyaltyPoints.level.toUpperCase();
    document.getElementById('loyaltyLevel').className = `level-badge ${loyaltyPoints.level}`;
    
    // Puan geçmişini göster
    const historyContainer = document.getElementById('pointsHistory');
    historyContainer.innerHTML = '';
    loyaltyPoints.history.slice(0, 5).forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <span>${item.description}</span>
            <span>${item.points > 0 ? '+' : ''}${item.points} puan</span>
        `;
        historyContainer.appendChild(historyItem);
    });
    
    // Kullanılabilir ödülleri göster
    const rewardsContainer = document.getElementById('availableRewards');
    rewardsContainer.innerHTML = '';
    const rewards = getAvailableRewards();
    rewards.forEach(reward => {
        const rewardCard = document.createElement('div');
        rewardCard.className = 'reward-card';
        rewardCard.innerHTML = `
            <h4>${reward.name}</h4>
            <p class="reward-points">${reward.points} Puan</p>
            <button class="claim-reward-btn" onclick="claimReward(${reward.points}, '${reward.name}')"
                    ${loyaltyPoints.points < reward.points ? 'disabled' : ''}>
                Ödülü Al
            </button>
        `;
        rewardsContainer.appendChild(rewardCard);
    });
}

// Ödül Talep Et
function claimReward(points, rewardName) {
    if (loyaltyPoints.points >= points) {
        loyaltyPoints.points -= points;
        loyaltyPoints.history.unshift({
            description: `${rewardName} ödülü kullanıldı`,
            points: -points,
            date: new Date().toISOString()
        });
        localStorage.setItem('loyaltyPoints', JSON.stringify(loyaltyPoints));
        displayLoyaltyInfo();
        showNotification('Ödülünüz başarıyla kullanıldı!', 'success');
    }
}

// Etkinlikleri Göster
function displayEvents() {
    const upcomingEvents = document.getElementById('upcomingEvents');
    upcomingEvents.innerHTML = '';
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-date">${formatDate(event.date)} ${event.time}</div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${event.description}</p>
            <div class="event-capacity">
                <span>${event.registered}/${event.capacity} katılımcı</span>
                <div class="capacity-bar">
                    <div class="capacity-fill" style="width: ${(event.registered/event.capacity)*100}%"></div>
                </div>
            </div>
        `;
        upcomingEvents.appendChild(eventCard);
    });
    
    // Etkinlik seçeneklerini güncelle
    eventSelect.innerHTML = '<option value="">Etkinlik Seçin</option>';
    events.forEach(event => {
        if (event.registered < event.capacity) {
            eventSelect.innerHTML += `
                <option value="${event.id}">${event.title} - ${formatDate(event.date)} ${event.time}</option>
            `;
        }
    });
}

// Etkinlik Kaydı
eventRegistrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventId = parseInt(eventSelect.value);
    const guests = parseInt(document.getElementById('eventGuests').value);
    const email = document.getElementById('eventEmail').value;
    
    const event = events.find(e => e.id === eventId);
    if (event && event.registered + guests <= event.capacity) {
        event.registered += guests;
        showNotification('Etkinlik kaydınız başarıyla alındı!', 'success');
        eventRegistrationForm.reset();
        displayEvents();
    } else {
        showNotification('Üzgünüz, etkinlik kapasitesi dolu!', 'error');
    }
});

// Yardımcı Fonksiyonlar
function getStarRating(rating) {
    return Array(5).fill(0).map((_, i) => 
        `<i class="${i < rating ? 'fas' : 'far'} fa-star"></i>`
    ).join('');
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getAvailableRewards() {
    return [
        { name: 'Ücretsiz Tatlı', points: 100 },
        { name: 'İkinci İçecek Bedava', points: 150 },
        { name: '%10 İndirim', points: 200 },
        { name: 'Özel Şef Menüsü', points: 500 }
    ];
}

// Event Listeners
showReviewsBtn.addEventListener('click', () => {
    reviewsModal.style.display = 'block';
    displayReviews();
});

showLoyaltyBtn.addEventListener('click', () => {
    loyaltyModal.style.display = 'block';
    displayLoyaltyInfo();
});

showEventsBtn.addEventListener('click', () => {
    eventsModal.style.display = 'block';
    displayEvents();
});

// Yıldız Derecelendirme Sistemi
document.querySelectorAll('.stars-input i').forEach(star => {
    star.addEventListener('mouseover', function() {
        const rating = this.dataset.rating;
        document.querySelectorAll('.stars-input i').forEach((s, index) => {
            if (index < rating) {
                s.classList.remove('far');
                s.classList.add('fas');
            } else {
                s.classList.remove('fas');
                s.classList.add('far');
            }
        });
    });
    
    star.addEventListener('click', function() {
        const rating = this.dataset.rating;
        document.querySelectorAll('.stars-input i').forEach((s, index) => {
            if (index < rating) {
                s.classList.remove('far');
                s.classList.add('fas');
            } else {
                s.classList.remove('fas');
                s.classList.add('far');
            }
        });
    });
});

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    displayReviews();
    displayLoyaltyInfo();
    displayEvents();
});

// Menü öğelerini oluşturan fonksiyon
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-content">
            <h3>${item.name}</h3>
            <p class="description">${item.description}</p>
            <div class="item-footer">
                <span class="price">${item.price} ₺</span>
                <button class="detail-btn">Detaylar</button>
            </div>
        </div>
    `;

    // Detay butonuna tıklama olayı ekle
    const detailBtn = menuItem.querySelector('.detail-btn');
    detailBtn.addEventListener('click', () => showItemDetails(item));

    return menuItem;
}

// Detayları göster fonksiyonu
function showItemDetails(item) {
    const modal = document.getElementById('itemModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalIngredients = document.getElementById('modalIngredients');
    const nutritionInfo = document.getElementById('nutritionInfo');

    // Debug için resim URL'sini konsola yazdır
    console.log('Resim URL:', item.image);

    // Resim yüklenmeden önce loading göster
    modalImage.style.opacity = '0';
    
    // Resmi yükle
    const img = new Image();
    img.onload = function() {
        modalImage.src = this.src;
        modalImage.style.opacity = '1';
    };
    
    img.onerror = function() {
        console.error('Resim yüklenemedi:', item.image);
        modalImage.src = 'img/default-food.jpg';
        modalImage.style.opacity = '1';
    };
    
    // Resim URL'sini ayarla
    if (item.image.startsWith('http')) {
        // Eğer tam URL ise doğrudan kullan
        img.src = item.image;
    } else {
        // Göreceli yol ise düzelt
        img.src = `./${item.image}`;
    }

    modalImage.alt = item.name;
    modalTitle.textContent = item.name;
    modalPrice.textContent = `${item.price} ₺`;
    modalDescription.textContent = item.description || "Bu ürün için henüz detaylı açıklama eklenmemiştir.";

    // Modal'ı göster
    modal.style.display = 'block';

    // İçindekiler listesini oluştur
    modalIngredients.innerHTML = '';
    if (item.ingredients && item.ingredients.length > 0) {
        item.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            modalIngredients.appendChild(li);
        });
    } else {
        modalIngredients.innerHTML = '<li>İçindekiler listesi henüz eklenmemiştir.</li>';
    }

    // Besin değerleri
    nutritionInfo.innerHTML = item.nutrition ? `
        <div class="nutrition-item">
            <span>Kalori</span>
            <span>${item.nutrition.calories || 0} kcal</span>
        </div>
        <div class="nutrition-item">
            <span>Protein</span>
            <span>${item.nutrition.protein || 0}g</span>
        </div>
        <div class="nutrition-item">
            <span>Karbonhidrat</span>
            <span>${item.nutrition.carbs || 0}g</span>
        </div>
        <div class="nutrition-item">
            <span>Yağ</span>
            <span>${item.nutrition.fat || 0}g</span>
        </div>
    ` : '<p>Besin değerleri bilgisi henüz eklenmemiştir.</p>';
}

// Modal kapatma işlemi
function setupModalClose(modalId) {
    const modal = document.getElementById(modalId);
    const closeModal = modal.querySelector('.close-modal');

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Sayfa yüklendiğinde modal kapatma işlemlerini ayarla
document.addEventListener('DOMContentLoaded', () => {
    setupModalClose('itemModal');
    setupModalClose('reservationModal');
    setupModalClose('favoritesModal');
    setupModalClose('orderTrackingModal');
    setupModalClose('cartModal');
    setupModalClose('reviewsModal');
    setupModalClose('loyaltyModal');
    setupModalClose('eventsModal');
});

// Kar yağışı efekti
function createSnowflakes() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const snowflakes = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 1 + 0.5
    }));

    function updateSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach(snowflake => {
            snowflake.y += snowflake.speed;
            if (snowflake.y > canvas.height) {
                snowflake.y = 0;
                snowflake.x = Math.random() * canvas.width;
            }
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        });
        requestAnimationFrame(updateSnowflakes);
    }

    updateSnowflakes();
}

document.addEventListener('DOMContentLoaded', createSnowflakes);
