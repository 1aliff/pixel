import React, { useState }from 'react'
import { Paper, Backdrop, Modal, Fade, Card, CardMedia, CardActions, Button, CardActionArea, CardContent, Typography } from '@material-ui/core'
import makeStyles from './style'
import GetAppIcon from '@material-ui/icons/GetApp';
// import fileDownload from 'js-file-download'
import FileSaver, { saveAs } from 'file-saver';

// This component for each card control
const CardPhotos = ({ image }) => {
    const classes = makeStyles()
    const [open, setOpen]= useState(false);
    const [showInfo, setShowInfo] = useState(true);

    const urlOriginalSize = image.src.original;
    const urlLargeSize = image.src.large;
    const photographer = image.photographer;

    console.log('let me see it: ',image)
    
    const handleOpenModal = () => setOpen(true)
    const handleCloseModal = () => setOpen(false)

    const onDownload = (url, fileName) => {
        fetch(url, { 
            method: 'GET',
            responseType: 'blob',
        }).then (res => {
            FileSaver.saveAs(url, fileName);
        })
    }
    
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea onClick={handleOpenModal}>
                    <CardMedia
                        className={classes.media}
                        image={urlLargeSize}
                        title={`Photo By ${photographer}`}
                    />
                    {/* <p>Photo By: {photographer}</p> */}
                    {/* <CardContent>
                        <Typography gutterBottom variant="h7" align="center">
                            Photo By : {photographer}
                        </Typography>
                    </CardContent> */}
                </CardActionArea>
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
                        <div className={classes.actionWrapper}>
                            <Typography variant="h5" className={classes.photographer} color="textSecondary" gutterBottom>By: {photographer}</Typography>
                            <Button variant="contained" className={classes.button} onClick={() => onDownload(urlOriginalSize, 'image.jpg')}>Free Download<GetAppIcon/></Button>
                        </div>
                        <img
                            className={classes.image}
                            alt={`Photo By: ${photographer}`}
                            src={urlLargeSize}
                        />
                        <br />
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default CardPhotos
