import React, { useState, useEffect } from 'react'

import NavBar from '../Components/Navbar/Navbar'
import SearchBar from '../Components/SearchBar/SearchBar'
import PhotoGrid from '../Components/PhotoGrid/PhotoGrid'

import getData from '../API/index.js'

function App() {

  const [images, setImages] = useState([]) // to get images data
  const [query, setQuery] = useState('people') // set the initial query for API
  const [parameter, setParameter] = useState('') // for searchBar


  useEffect(async() => {
    const result = await getData(query);
    setImages(result)
  }, [parameter])

  // for submit/search
  const handleSubmit = (e) => {
    e.preventDefault()
    setParameter(query)    
  }
  
  // for onChange Input
  const handleOnChange = (e) => setQuery(e.target.value)

  return (
    <div>
      <NavBar />
      <SearchBar 
        onSubmit={handleSubmit}
        onChange={handleOnChange}
      />
      <PhotoGrid 
        images={images}
        parameter={parameter}
      />
    </div>
  );
}

export default App;
