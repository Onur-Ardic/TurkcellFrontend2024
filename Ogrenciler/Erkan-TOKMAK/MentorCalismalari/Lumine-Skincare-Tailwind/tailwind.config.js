/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'botox': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRej-_Su52lf1gpCC3h0pU3YhZjdPMHQES7Vg&s')",
        'lips': "url('https://b2339429.smushcdn.com/2339429/wp-content/uploads/2020/10/shutterstock_1747230821-758x830.jpg?lossy=2&strip=1&webp=1')",
        'laser': "url('https://sa1s3optim.patientpop.com/assets/images/provider/photos/2405577.jpg')"
      }
    },
  },
  plugins: [],
}

