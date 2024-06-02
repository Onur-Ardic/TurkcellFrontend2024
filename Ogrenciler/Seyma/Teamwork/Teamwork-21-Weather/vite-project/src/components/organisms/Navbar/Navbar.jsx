import React from 'react'
import './Navbar.module.css'

export const Navbar = () => {

  // const [input, setInput] = useState("");

  // const submitCity = () => {
  //   setPlace(input);
  //   setInput("");
  // };

  return (
    <nav className='border, bg-dark'>
        <h1 className='text-white'>Weather App</h1>
        {/* <SearchBar
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCity();
            }
          }}
          placeholder="Search city"
          onSubmit={submitCity}
        /> */}
      </nav>
  )
}
