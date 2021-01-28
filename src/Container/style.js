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
  }));