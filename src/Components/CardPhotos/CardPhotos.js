import React from 'react'
import { Grid, Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core'

import makeStyles from './style'

const CardPhotos = ({ image, key }) => {

    // const { photographer } = {image}

    const classes = makeStyles()

    const url = image.src.large;
    const photographer = image.photographer;

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={url}
                        title={`Photo By ${photographer}`}
                    />
                    <CardContent>
                        {/* alig center this typography */}
                        <Typography gutterBottom variant="h7">
                            Photo By : {photographer}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions> */}
            </Card>
        </>
    )
}

export default CardPhotos
