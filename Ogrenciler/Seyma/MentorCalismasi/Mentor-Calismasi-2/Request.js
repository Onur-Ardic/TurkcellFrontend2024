// const getMovies = async () =>  {
//   const response = await fetch("http://localhost:3000/movies")
//     if (!response.ok) {
//       throw new Error(`HTTP hatası! Durum: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//  }

 const getMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/movies")
    return await response.json()
  } catch (error) {
    console.log(error)
  }
  
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error(`HTTP hatası! Durum: ${response.status}`);
    //   }
    //   return await response.json();
    // });
};
