'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const BlogElement = ({ params }) => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const router = useRouter()

  const getItem = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setItem(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getItem()
  }, [])

  if (loading) {
    return <div className="text-center mt-10">Yükleniyor...</div>
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Hata: {error}</div>
  }

  if (!item) {
    return <div className="text-center mt-10">Veri bulunamadı</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="w-full h-[300px] relative mb-6">
        <Image
          src={`https://picsum.photos/id/${params.id}/800`}
          alt="Blog image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
      <p className="text-lg text-gray-700">{item.body}</p>
      <button
        onClick={() => router.back()}
        className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Geri Dön
      </button>
    </div>
  )
}

export default BlogElement
