export async function getProduct(id) {
  try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
          cache: 'no-store',
          method: 'GET',
          headers: {
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0',
          },
      });

      if (!res.ok) {
          console.error("Failed to fetch product", res.status);
          return null;
      }

      const product = await res.json();
      console.log("Fetched product:", product);
      return product;
  } catch (error) {
      console.error("Error fetching product:", error);
      return null;
  }
}
