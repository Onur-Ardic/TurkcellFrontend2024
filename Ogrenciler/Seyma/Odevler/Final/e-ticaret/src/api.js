export async function getData() {
    const res = await fetch('http://localhost:8000/products')
  console.log(res);
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }