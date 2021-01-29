import React from 'react'
import { AppBar, Toolbar, Typography} from '@material-ui/core'
import CameraRollTwoToneIcon from '@material-ui/icons/CameraRollTwoTone';
import useStyles from './style';

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: 'black' }}>
                <Typography variant="h6" className={classes.title} color="textSecondary" gutterBottom> <CameraRollTwoToneIcon style={{color: 'white'}}/> | Pixels </Typography>
                {/* <Button color="inherit">Saved Photos</Button> */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
