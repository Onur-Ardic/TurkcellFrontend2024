export async function getProductByCategory(category) {
    const res = await fetch(`http://localhost:3000/products?category=${category}`, {
        cache: 'no-store',
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
    if (!res.ok) {
        console.error("Failed to fetch products", res.status);
        return [];
    }
    const products = await res.json();
    console.log("Fetched products:", products);
    return products;
}
