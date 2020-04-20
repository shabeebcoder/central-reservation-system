import React from "react";
import { List, ListItem, ListItemText, Grid, Divider } from "@material-ui/core";

const LeftRoomName = ({ roomId }) => {
  return (
    <div>
      <List
        style={{ width: "180px" }}
        component="nav"
        aria-label="main mailbox folders"
      >
        <Divider />
        <ListItem button style={{ borderLeft: "solid 1px #eae0e0" }}>
          <ListItemText primary={`delux room ${roomId}`} />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default LeftRoomName;
