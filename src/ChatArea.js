import React from "react";
import { Box, Divider } from "@material-ui/core";
import SimpleMessage from './simpleMes'
import ProfileInfo from './userInfo'
import Chat from "./chatScreen";
import SendForm from './sendMessage'
export default function ChatArea({bigData,addMessage,mesIndex}) {
  if(bigData.simpleMessage){
    return(
      <SimpleMessage simpleMes= {bigData.simpleMessage}/>
    )
  }
  else {
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" flexDirection="column" p={1} bgcolor="grey.300">
        <div>
          <Box
            p={1}
            bgcolor="background.paper"
            alignSelf="flex-center"
            style={{ background: "#fff5ee" }}
          >
            <ProfileInfo Uname = {bigData.Uname} Ppic = {bigData.Ppic}/>
          </Box>
        </div>
        <Divider variant="middle" />
        <div>
          <Box p={1} bgcolor="background.paper">
            <Chat messageData={bigData}/>
          </Box>
        </div>
        <Divider variant="middle" />
        <div>
          <Box
            p={1}
            bgcolor="background.paper"
            style={{ background: "	#f5f5f5" }}
          >
            <SendForm addMessage={addMessage} index={mesIndex}/>
          </Box>
        </div>
      </Box>
    </div>
  );
}
}
