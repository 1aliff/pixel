import React from 'react'
import { Input, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import makeStyles from './style.js'

const SearchBar = ({ onSubmit, onChange }) => {
    const classes = makeStyles()

    return (
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
      </div>
    )
}

export default SearchBar
