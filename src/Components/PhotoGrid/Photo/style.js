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
      // height: '900px',
      // width: '500px',
        maxWidth: '100%',
        maxHeight: '900px',
        outline: 'none',
        backgroundColor:'#fff',
        border: '0px solid #EEE',
        borderRadius: '6px',
        boxShadow: theme.shadows[6],
        padding: '25px',
        marginBottom: '1.15rem',
        marginTop: '2.3rem',
    },
    photographer : {
      float : 'left'
    },
    button: {
      backgroundColor: '#14BA8B',
      float: 'right',
      margin: '10px',
    },
    // action: {
    // }
  }));