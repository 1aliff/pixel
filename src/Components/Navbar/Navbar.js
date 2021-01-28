import React from 'react'
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import useStyles from './style';
import CameraRollTwoToneIcon from '@material-ui/icons/CameraRollTwoTone';

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: 'white' }}>
                <Typography variant="h6" className={classes.title} color="textSecondary" gutterBottom> <CameraRollTwoToneIcon style={{color: 'black'}}/> | Pixels </Typography>
                {/* <Button color="inherit">Saved Photos</Button> */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
