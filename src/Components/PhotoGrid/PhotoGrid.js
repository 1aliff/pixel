import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import makeStyles from './style'

import Photo from './Photo/Photo'

const PhotoGrid = ({ images, parameter }) => {
    const classes = makeStyles();

    return (
        <div>
            <Typography variant="h5" color="textSecondary" className={classes.gridTypo} gutterBottom> Get stock photos. </Typography>
            { 
                parameter !== ''
                ? <Typography variant="h8" color="textSecondary" className={classes.gridTypo}> Displaying result for '{parameter}'</Typography>
                : ''
            }
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
            {
                images.map((image) => (
                    <Photo image={image} />
                ))
            }
            </Grid>
      </div>
    )
}

export default PhotoGrid
