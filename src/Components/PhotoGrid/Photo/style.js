import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    divRoot: {
      flexGrow: 1,
    },
    root: {
      maxWidth: 320,
      margin: 10,
      marginBottom: 20,
    },
    media: {
      width: 320,
      height: 550,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
      height: 'auto'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '0px solid #EEE',
        boxShadow: theme.shadows[6],
        padding: theme.spacing(2, 4, 3),
    },
    originalMedia : {
      width: 1200,
      height: 650,
    }
  }));