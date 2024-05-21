document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
    setupFilters();
    loadCategories(); // Yeni kategori yükleme fonksiyonunu çağırın
  });
  
  function loadCategories() {
    const categories = ['Korku', 'Aksiyon', 'Aşk', 'Oyun']; // Burada kategorileri manuel olarak belirledik
    const categorySelect = document.getElementById('filter-category');
  
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  }
  
  // Diğer mevcut fo