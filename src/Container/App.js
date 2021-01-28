import React, { useState, useEffect } from 'react'
import { Button, Grid, Input, InputAdornment, Typography, FormControl, InputLabel, FilledInput} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import makeStyles from './style.js'

import Navbar from '../Components/Navbar/Navbar'
import CardPhotos from '../Components/CardPhotos/CardPhotos'

const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;

function App() {
  const classes = makeStyles();

  const [images, setImages] = useState([]) // to get images data
  const [query, setQuery] = useState('people') // initial query to API
  const [parameter, setParameter] = useState('') // to compare


  useEffect(() => {
    getData();
  }, [parameter])
  
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

  // for submit/search
  const handleSubmit = (e) => {
    e.preventDefault()
    
    setParameter(query)    
  }
  
  // for onChange Input
  const handleOnChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <Navbar />
      <div className={classes.searchBar}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <Input
              className={classes.inputSearch}
              disableUnderline={true}
              placeholder="Search for free photos and videos"
              id="input-with-icon-adornment"
              onChange={handleOnChange}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon onClick={handleSubmit} />
                </InputAdornment>
              }
            />
          </form>
      </div>
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
