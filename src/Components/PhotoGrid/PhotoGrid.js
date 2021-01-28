import React from 'react'
import CardPhotos from './Photo/CardPhotos'

import { Typography, Grid } from '@material-ui/core'

import makeStyles from './style'

const PhotoGrid = ({ images, parameter }) => {
    const classes = makeStyles();

    return (
        <div className={classes.gridWrapper}>
            <Typography variant="h4" className={classes.gridWrapper}> Get stock photos. </Typography>
            { 
                parameter !== ''
                ? <Typography variant="h7" className={classes.gridWrapper}> Showing result of '{parameter}' </Typography>
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
                    <CardPhotos
                        image={image}
                    />
                    ))
            }
            </Grid>
      </div>
    )
}

export default PhotoGrid