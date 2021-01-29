import React from 'react'
import { Input, Chip, Typography, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from './style.js'

const CHIPS_LABEL = ['Mountain', 'Night', 'Coffee', 'Cars', 'Travel', 'Love'];

const SearchBar = ({ onSubmit, onChange, handleChips }) => {
    const classes = makeStyles()

    return (
    <div className={classes.header}>
        <Typography variant="h4" className={classes.typography} gutterBottom>The best free stock photos & videos shared by talented creators around the world.</Typography>
      <div className={classes.searchBar}>
        <form autoComplete="off" onSubmit={onSubmit}>
            <Input
              className={classes.inputSearch}
              disableUnderline={true}
              placeholder="Search for free photos and videos"
              id="input-with-icon-adornment"
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon onClick={onSubmit} />
                </InputAdornment>
              }
            />
          </form>
          <Typography variant="h7" className={classes.suggestion} gutterBottom>Suggestion: </Typography> {
            CHIPS_LABEL.map(chip => (
              <Chip 
                label={chip}
                className={classes.chips}
                onClick={() => handleChips(chip)}
              />
            ))
          }
        </div>
    </div>
    )
}

export default SearchBar
