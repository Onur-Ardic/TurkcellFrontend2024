export const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  