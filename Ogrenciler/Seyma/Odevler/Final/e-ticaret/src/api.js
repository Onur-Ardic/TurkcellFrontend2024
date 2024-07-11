export async function getData() {
    const res = await fetch('http://localhost:8000/products')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }

  export async function getProduct(params) {
    const res = await fetch(`http://localhost:8000/products/${params.id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }