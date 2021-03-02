import React from 'react'
import { Avatar,Box} from '@material-ui/core';
export default function ProfileInfo({Uname,Ppic}){
return(
  
  <div style ={{width:'100%'}}>
  <Box display ="flex" flexDirection="row" p={1} m={1} bgcolor = "background.paper"
   alignItems="center">  
<Box>
<Avatar alt="profile pic" src = {Ppic}/>
</Box>
<Box m={2} fontWeight="fontWeightBold" fontSize = "h6.fontSize"> 
     {Uname}
</Box>
</Box>
</div>
);
}
