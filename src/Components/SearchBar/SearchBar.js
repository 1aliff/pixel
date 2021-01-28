import React from 'react'
import { Input, Chip, Typography, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import makeStyles from './style.js'

const CHIPS_LABEL = ['Mountain', 'Night', 'Coffee', 'Cars', 'Travel', 'Love'];

const SearchBar = ({ onSubmit, onChange, handleChips }) => {
    const classes = makeStyles()

    return (
    <div className={classes.searchBar}>
      <div className={classes.headerTypo}>
        <Typography variant="h3" color="textSecondary" gutterBottom>The best free stock photos & videos shared by talented creators.</Typography>
      </div>
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
          <Typography variant="h7" color="textSecondary" gutterBottom>Suggestion: </Typography> {
            CHIPS_LABEL.map(chip => (
              <Chip 
                label={chip}
                className={classes.chips}
                // onClick={handleChips(chip)}
              />
            ))
          }
    </div>
    )
}

export default SearchBar
