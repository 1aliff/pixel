import React from 'react'
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import useStyles from './style';

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Pixels 
                    {/* Maybe i can add logo here  */}
                </Typography>
                <Button color="inherit">Saved Photos</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
