import React from "react";
import useStyles from "./styles";
import { Box, Paper, Typography } from "@material-ui/core";
import formatDate from './dateFormat'
function Message(props) {
  const classes = useStyles();
  const date = props.date;
  
  return (
    
   
    <div style={{ width: "100%" }}>
    <Box
      display="flex"
      flexDirection="column"
      p={1}
      m={1}
      bgcolor="background.paper"
      alignItems="flex-start"
    >
      <Paper
        className={props.sent ? classes.contentSent : classes.contentRecived}
      >
        <Box m={2}>
          <Typography variant="subtitle1" gutterBottom>
            {props.content}
          </Typography>
        </Box>
      </Paper>
      <Box
        className={props.sent ? classes.sentDate : classes.RecivedDate}
        m={2}
      >
        {date}
      </Box>
    </Box>
  </div>
   
  );

}
export default function Chat({messageData}) {

   return(
      <div>
        {
          messageData.Messages.map((message,index) => {
            var date_string = formatDate(message.date);
            return(
              <Message
              key = {index.toString()}
              date={date_string}
              content={message.content}
              sent={message.sent}
            />
            )
}
          )
        }
      </div>
    )

}
