import React, { useState, useEffect } from 'react'
import { NavBar, SearchBar, PhotoGrid } from '../Components/'
import getData from '../API/'

function App() {
  const [images, setImages] = useState([]) // to get images data
  const [query, setQuery] = useState('people') // set the initial query for API
  const [parameter, setParameter] = useState('') // for searchBar

  useEffect(() => {
    fetchData()
  }, [parameter])
  
  const fetchData = async() => {
    const result = await getData(query);
    setImages(result)
  }

  // for submit/search
  const handleSubmit = (e) => {
    e.preventDefault()
    if(query === '') return alert('type something ;)')
    setParameter(query)    
  }
  
  // for onChange Input
  const handleOnChange = (e) => setQuery(e.target.value)
  
  // to handle all the tag below search bar
  const handleChips = (chipValue) => {
    setQuery(chipValue)
    setParameter(chipValue)
  }

  return (
    <div>
      <NavBar />
      <SearchBar 
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        handleChips={handleChips}
      />
      <PhotoGrid 
        images={images}
        parameter={parameter}
      />
    </div>
  );
}

export default App;
