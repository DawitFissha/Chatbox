import React,{useState} from 'react'
import useStyles from './styles'
import {Box,TextField} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send';
function NewMessage({addMessage,ind}){
    const classes = useStyles();
    const [newMessage,setMessage] = useState(""); 
    const handleSubmit = e => {
      e.preventDefault();
      if(!newMessage) return;
      addMessage(newMessage,ind);
      //newMessage.date = new Date();
      setMessage("");
    };
    return(
      
        <form onSubmit = {handleSubmit}>
         <div style = {{width:'100%'}}>
           <Box display = "flex" flexDirection = "row" p={1} m={1}
      bgcolor = "background.paper" alignItems = "center">
          <Box>
        <TextField className = {classes.root} id = "outlined-basic" variant = "outlined" 
        value = {newMessage} label = "send message"
        onChange = {e => setMessage(e.target.value)}/>
      
      </Box>   
      <Box>
        <IconButton>
          <SendIcon sytle = {{color:"pink"}} onClick = {handleSubmit}/>
        </IconButton>
        </Box>
        </Box>
        </div> 
      </form>
      
      
    );
  }
export default function SendForm({addMessage,index}){
 
    return(
      <React.Fragment>
   
        <div>
      <NewMessage addMessage = {addMessage} ind={index}/>
    </div>
    </React.Fragment>
    );
    }