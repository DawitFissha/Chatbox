import React from "react";

import {
  Avatar,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider
} from "@material-ui/core";
import formatDate from './dateFormat'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },

  header: {
    width: "100%"
  }
}));
function ListM(props) {
  const handleClick = () => {
    //e.preventDefault();
    props.clickMessage(props.index);
    
  };
  const classes = useStyles();
  return (
    
    <ListItem alignItems="flex-start" button component="a" onClick={handleClick}>
      <ListItemAvatar>
        <Avatar alt="Profile picture" src={props.avatarSrc} />
      </ListItemAvatar>
      <ListItemText
        primary={props.User_name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            ></Typography>
            {props.latestMessage}

            {"\t" + props.date}
          </React.Fragment>
        }
      />
    </ListItem>

  );
}
export default function LatestMessages({textMessage,clickFunction}) {
  const classes = useStyles();
  return (
    
      <List className={classes.root}>
        {
          textMessage.map((chats, index) => (
            <div key={chats.id.toString()}>
              
              <ListM
                
                clickMessage = {clickFunction}
                index={index}
                User_name = {chats.Uname}
                avatarSrc={chats.Ppic}
                latestMessage={
                  chats.Messages[chats.Messages.length - 1 ].content
                }
                date={formatDate(chats.Messages[chats.Messages.length - 1].date)}
              ></ListM>
                  
              <Divider variant="inset" component="li"></Divider>
            </div>
          )
        
        
            
            )
          }
          
        
      </List>
    
  );
}
