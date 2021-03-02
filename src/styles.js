import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) =>(
    {
      root: {
        padding: '2px 2px',
        display: 'flex',
        
        width: 500,
      },
      icon: {
        
        margin:'10px',
        color:'green'
      },
      contentSent:{
        maxWidth: 500,
        marginLeft:'200px',
        background:"#a9a9a9",
        borderRadius:"25px"
      },
      sentDate:{
        maxWidth: 500,
        marginLeft:'200px',
        
      },
      contentRecived:{
        maxWidth:500,
        borderRadius:"25px",
        background:"#afeeee"
      },
      RecivedDate: {
        maxWidth:500,
      },
      Approot: {
        flexGrow: 1,
      },
      grid:{
          marginTop:"4px"
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height:'100%'
      },
      chatArea:{
        height:'50%'
      }
    }
  )
  )
  export default useStyles;