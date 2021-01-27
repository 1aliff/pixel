import React, { useState, useEffect } from 'react'
import { Button, Grid, Input, InputAdornment, Typography, FormControl, InputLabel, FilledInput} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import makeStyles from './style.js'

import Navbar from '../Components/Navbar/Navbar'
import CardPhotos from '../Components/CardPhotos/CardPhotos'

const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;

function App() {
  const classes = makeStyles();

  const [images, setImages] = useState([]) // for data images
  const [query, setQuery] = useState('people') // initial query


  useEffect(() => {
    getData();
  }, [])
  
  const getData = async (e) => {
    const url = `https://api.pexels.com/v1/search?query=${query}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization : AUTHORIZATION,
          'Content-Type' : 'application/json;charset=UTF-8'
        }
      })
      
      const { photos } = await response.json()
      setImages(photos)

    } catch(error){
      alert(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // setQuery(e.target.value)

  }

  const handleSearch = (e) => {
    setQuery(e.target.value)
    console.log('whats being queried: ', query)
  }
  
  return (
    <div>
      <Navbar />
      <div className={classes.searchBar}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <Input
              className={classes.inputSearch}
              disableUnderline={true}
              placeholder="Search images.."
              id="input-with-icon-adornment"
              onChange={handleSearch}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon/>
                </InputAdornment>
              }
            />
          </form>
      </div>
      <div className={classes.gridWrapper}>
        <Typography variant="h5"> Get stock photos. </Typography>
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
