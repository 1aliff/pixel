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
      '&:hover': {
        // visibility: 'visible',
        transition: 'transform 1s ease',
        opacity: '5',
        background: '#fee',
        transform: 'scale(1.1)'
     },
    },
    // hoverable: {
    //   '&:hover' : {
    //     visibility: 'visible'
    //   }
    // },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
      height: 'auto'
    },
    paper: {
      height: 'auto',
      width: '70%',
      outline: 'none',
      backgroundColor:'#fff',
      border: '0px solid #EEE',
      borderRadius: '6px',
      boxShadow: theme.shadows[6],
      padding: '20px',
      marginBottom: '1.15rem',
      marginTop: '2.3rem',
    },
    actionWrapper: {
      display: 'inline-block',
      width: '100%',
    },
    photographer : {
      float : 'left',
      fontSize: '13'
    },
    button: {
      backgroundColor: '#14BA8B',
      color : '#fff', 
      float: 'right',
    },
    imageWrapper: {
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'center',
      margin: '20px',
    },
    image: {
      maxWidth: '100%',
      maxHeight: '100%',
      display: 'block',
      paddingTop: '10px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));