import React from 'react'
import Photo from './Photo/Photo'

import { Typography, Grid } from '@material-ui/core'

import makeStyles from './style'

const PhotoGrid = ({ images, parameter }) => {
    const classes = makeStyles();

    return (
        <div>
            <Typography variant="h5" color="textSecondary" className={classes.gridTypo} gutterBottom> Get stock photos. </Typography>
            { 
                parameter !== ''
                ? <Typography variant="h8" className={classes.gridTypo} gutterBottom> Displaying result of '{parameter}' </Typography>
                : ''
            }
            <Grid
                // className={classes.gridWrapper}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
            {
                images.map((image) => (
                    <Photo
                        image={image}
                    />
                    ))
            }
            </Grid>
      </div>
    )
}

export default PhotoGrid
