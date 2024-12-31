// DOM Elements
const navLinks = document.querySelectorAll('.sidebar nav a');
const pages = document.querySelectorAll('.page-content');
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');
const addProductBtn = document.querySelector('.add-product-btn');
const newProductBtn = document.querySelector('.new-product-btn');
const productForm = document.getElementById('productForm');
const productsTableBody = document.getElementById('productsTableBody');
const categoryFilter = document.getElementById('categoryFilter');
const productSearch = document.getElementById('productSearch');

// Get products from localStorage
let products = JSON.parse(localStorage.getItem('menuItems')) || [];

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.dataset.page;
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Show target page
        pages.forEach(page => {
            if (page.id === targetPage) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });

        // If products page is shown, refresh the table
        if (targetPage === 'products') {
            displayProducts(products);
        }
    });
});

// Modal Functions
function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    productForm.reset();
}

// Event Listeners for Modal
addProductBtn.addEventListener('click', openModal);
newProductBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Product Form Submission
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newProduct = {
        id: Date.now(),
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: Number(document.getElementById('productPrice').value),
        stock: Number(document.getElementById('productStock').value),
        image: document.getElementById('productImage').value,
        description: document.getElementById('productDescription').value,
        status: document.getElementById('productStatus').value
    };
    
    products.push(newProduct);
    localStorage.setItem('menuItems', JSON.stringify(products));
    
    displayProducts(products);
    closeModalFunc();
    showNotification('Ürün başarıyla eklendi!', 'success');
});

// Display Products in Table
function displayProducts(productsToShow) {
    productsTableBody.innerHTML = '';
    
    productsToShow.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${product.id}</td>
            <td>
                <img src="${product.image || 'https://via.placeholder.com/50'}" 
                     alt="${product.name}" 
                     style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
            </td>
            <td>${product.name}</td>
            <td>${getCategoryName(product.category)}</td>
            <td>${product.price} ₺</td>
            <td>${product.stock || 'N/A'}</td>
            <td>
                <span class="status-badge ${product.status || 'active'}">
                    ${product.status || 'Aktif'}
                </span>
            </td>
            <td>
                <button class="edit-btn" data-id="${product.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn" data-id="${product.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        productsTableBody.appendChild(tr);
    });
}

// Filter Products
categoryFilter.addEventListener('change', filterProducts);
productSearch.addEventListener('input', filterProducts);

function filterProducts() {
    const category = categoryFilter.value;
    const searchQuery = productSearch.value.toLowerCase();
    
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === category
        );
    }
    
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery) ||
            product.description?.toLowerCase().includes(searchQuery)
        );
    }
    
    displayProducts(filteredProducts);
}

// Delete Product
productsTableBody.addEventListener('click', (e) => {
    if (e.target.closest('.delete-btn')) {
        const id = Number(e.target.closest('.delete-btn').dataset.id);
        if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
            products = products.filter(product => product.id !== id);
            localStorage.setItem('menuItems', JSON.stringify(products));
            displayProducts(products);
            showNotification('Ürün başarıyla silindi!', 'success');
        }
    }
    
    if (e.target.closest('.edit-btn')) {
        const id = Number(e.target.closest('.edit-btn').dataset.id);
        const product = products.find(p => p.id === id);
        if (product) {
            openEditModal(product);
        }
    }
});

// Edit Product
function openEditModal(product) {
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock || '';
    document.getElementById('productImage').value = product.image || '';
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productStatus').value = product.status || 'active';
    
    productForm.dataset.editId = product.id;
    openModal();
}

// Helper Functions
function getCategoryName(category) {
    const categories = {
        breakfast: 'Kahvaltı',
        soups: 'Çorba',
        meat: 'Et Yemeği',
        chicken: 'Tavuk Yemeği',
        pasta: 'Makarna',
        salads: 'Salata',
        pizza: 'Pizza',
        burger: 'Burger',
        gozleme: 'Gözleme',
        drinks: 'İçecek',
        desserts: 'Tatlı'
    };
    return categories[category] || category;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Update Dashboard Stats
function updateDashboardStats() {
    document.querySelector('.total-products').textContent = products.length;
    
    // Simulate other stats (in a real app, these would come from a backend)
    const dailyOrders = Math.floor(Math.random() * 50) + 10;
    const dailyRevenue = dailyOrders * Math.floor(Math.random() * 100) + 50;
    const totalCustomers = Math.floor(Math.random() * 300) + 100;
    
    document.querySelector('.daily-orders').textContent = dailyOrders;
    document.querySelector('.daily-revenue').textContent = `${dailyRevenue} ₺`;
    document.querySelector('.total-customers').textContent = totalCustomers;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateDashboardStats();
}); 