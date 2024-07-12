'use client'

import { useState } from 'react'
import { Rating as ReactRating } from '@smastrom/react-rating'

export function Rating({value}) {
  const [rating, setRating] = useState(0)

  return <ReactRating style={{ width: "50%" }} value={value} onChange={setRating} />
}