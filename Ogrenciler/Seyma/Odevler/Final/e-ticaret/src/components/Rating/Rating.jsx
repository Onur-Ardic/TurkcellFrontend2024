// "use client";

// import { useState, useEffect } from 'react';
// import { Rating, Star } from '@smastrom/react-rating';

// const includedShapesStyles = [Star].map(
//   (itemShapes) => ({ itemShapes, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' })
// );

// async function getRating() {
//   const res = await fetch('http://localhost:8000/products/rating');
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
  
//   return res.json();
// }
// export default function Page() {
//     const ratingInfo = await getRating()
 
//   const [rating, setRating] = useState(3);

//   return (
//     <div className='rating-container'>
//       {includedShapesStyles.map((itemStyles, index) => (
//         <Rating
//           key={`shape_${index}`}
//           value={rating}
//           onChange={setRating}
//           itemStyles={itemStyles}
//         />
//       ))}
//     </div>
//   );
// }
