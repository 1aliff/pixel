import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import makeStyles from './style.js'

import NavBar from '../Components/Navbar/Navbar'
import CardPhotos from '../Components/CardPhotos/CardPhotos'
import SearchBar from '../Components/SearchBar/SearchBar'

import getData from '../API/index.js'

function App() {
  const classes = makeStyles();

  const [images, setImages] = useState([]) // to get images data
  const [query, setQuery] = useState('people') // initial query to API
  const [parameter, setParameter] = useState('') // to compare


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
      <div className={classes.gridWrapper}>
        <Typography variant="h4" className={classes.gridWrapper}> Get stock photos. </Typography>
        { parameter !== '' ?
          <Typography variant="h7" className={classes.gridWrapper}> Showing result of '{parameter}' </Typography>
          : ''
        }
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {
            images.map((image, id) => (
              <CardPhotos
                key={id}
                image={image}
              />
              ))
            }
        </Grid>
      </div>
    </div>
  );
}

export default App;
