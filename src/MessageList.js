import React from "react";
import Header from "./Header";
import LatestMessages from "./LatestMessage";
import { Box, Divider } from "@material-ui/core";
export default function MessageList({clickFunc,textMes}) {
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" flexDirection="column" p={1}>
        <div>
          <Box p={1} bgcolor="background.paper" alignSelf="flex-start">
            <Header />
          </Box>
        </div>
        <Divider variant="middle" />
        <div>
          <Box p={1} bgcolor="background.paper">
            <LatestMessages textMessage={textMes} clickFunction={clickFunc}/>
          </Box>
        </div>
      </Box>
    </div>
  );
}
