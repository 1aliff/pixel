import React, { useState }from 'react'
import { Backdrop, Modal, Fade, Card, CardMedia, CardActions, Button, CardActionArea, CardContent, Typography } from '@material-ui/core'

import makeStyles from './style'

// This component for each card control
const CardPhotos = ({ image }) => {
    const classes = makeStyles()
    const [open, setOpen]= useState(false);

    const url = image.src.large;
    const originalPhoto = image.src.original;
    const photographer = image.photographer;

    const handleOpenModal = () => {
        setOpen(true)
        console.log('yo')
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea onClick={handleOpenModal}>
                    <CardMedia
                        className={classes.media}
                        image={url}
                        title={`Photo By ${photographer}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h7" align="center">
                            Photo By : {photographer}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
            </Card>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        Photo By : {photographer}
                        {/* <Card> */}
                            <CardMedia
                                className={classes.originalMedia}
                                image={originalPhoto}
                                title={`Photo By ${photographer}`}
                            />
                        {/* </Card> */}
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default CardPhotos
