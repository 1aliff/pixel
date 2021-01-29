import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../Assets/header.jpg';

export default makeStyles((theme) => ({
    header: {
      margin: '0 auto',
      width: '100%',
      height: '550px',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 20%', // elegant way i found to stitch this image
      backgroundSize: 'cover', // also this, thanks stackoverflow ;)
      objectFit: 'cover',
      paddingTop: '10px'
    },
    typography: {
      margin: 'auto',
      width: '30%',
      paddingTop: '150px',
      paddingBottom: '10px',
      fontWeight: 'bold',
      color: '#eee',
    },
    searchBar: {
      margin: 'auto',
      width: '30%',
      padding: 10
    },
    inputSearch: {
      paddingLeft: '20px', // for placeholder
      paddingRight: '20px', // for placeholder
      width: '100%',
      height: '60px',
      marginBottom: 20, // between searchbox and chips
      color: 'black',
      background: '#eee',
      borderRadius: '10px',
    },
    suggestion: {      
      paddingLeft: '20px',
      paddingRight: '5px',
      width: '100%',
      height: '60px',
      color: '#eee'
    },
    chips: {
      margin: '1px',
      backgroundColor: '#696969',
      color: '#fff',
    }
  }))