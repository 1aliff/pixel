import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
    },
    suggestion: {      
      paddingLeft: '20px',
      paddingRight: '20px',
      width: '100%',
      height: '60px',
    },
    headerTypo: {
      margin: '25px'
    },
    chips: {
      // padding: '5px',
      margin: '1px',
      backgroundColor: '#aca8a8',
      color: '#fff',
    }
  }))