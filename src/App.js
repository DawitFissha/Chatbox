import React, { useState } from "react";
import MessageList from "./MessageList";
import ChatArea from "./ChatArea";
import useStyles from "./styles";
import { Grid, Paper } from "@material-ui/core";
import Data from "./Data";
var mesIndex =0;
export default function App() {
  
  const [myMessages, setMyMessages] = useState(Data);
  const [messages2,setMessages2]= useState(
     {simpleMessage:"Select a chat to start Messaging"}
  );
  const classes = useStyles();
  
   function clickMessage(id){
      let newMyMessags=[...myMessages];
      let newMessages2 = {...messages2}
      newMessages2 = newMyMessags[id]
      setMessages2(newMessages2);
      mesIndex = id;
      //alert(mesIndex)
      }
    function addMessage(message,index) {
      var mes = myMessages[index]
      var copy = [...mes.Messages,{content:message,date:new Date(),sent:false}];
      var copy1 = {...mes,Messages:copy}
      
      var dataCopy = [...myMessages]
	    dataCopy[index]=copy1		
      //console.log(dataCopy)
     // let newMes = [...myMessages[index].Messages,{content:message,sent:false,date:new Date()}]
      //let newNewMes = [myMessages,newMes]
      setMyMessages(dataCopy)
      //alert(dataCopy[index].Messages[3].content)
      setMessages2(copy1);
  }
 
  return (
    <div className={classes.Approot}>
      <Grid container spacing={1} className={classes.grid}>
       
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <MessageList textMes={myMessages} clickFunc={clickMessage}/>
            </Paper>
          </Grid>
          
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ChatArea className = {classes.chatArea} bigData = {messages2} addMessage = {addMessage} mesIndex={mesIndex}/>
            </Paper>
          </Grid>
        
      </Grid>
    </div>
  );
}
