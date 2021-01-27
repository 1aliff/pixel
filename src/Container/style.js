import { makeStyles } from '@material-ui/core/styles';
import SearchBackground from '../Assets/search-bg.jpg'

export default makeStyles((theme) => ({
    app : {
      background: 'f1f1ea',
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    gridWrapper: {
      padding: 15
    },
    grid: {
      flexGrow: 1,
    },
    searchBar: {
      margin: 'auto',
      width: '50%',
      // backgroundImage: "url(https://d2jv9003bew7ag.cloudfront.net/uploads/Photographer-at-work.jpg)",
      padding: '10px'
    },
    inputSearch: {
      paddingLeft: '20px',
      paddingRight: '20px',
      width: '100%',
      height: '60px',
      margin: 20,
      border: '3px solid #e5e5e5',
      borderRadius: '10px',
    }
  }));