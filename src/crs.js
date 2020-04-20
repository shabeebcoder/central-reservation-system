import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Button,
  Container,
  AppBar,
  MenuItem,
  Typography,
  Toolbar,
  Drawer
} from "@material-ui/core";
import AriTable from "./component/ariTable/ariTable";

const useStyle = makeStyles(theme => ({
  paper: {
    width: 40,
    height: 40,
    borderRight: "none",
    borderTop: "none"
  },

  chartContainer: {
    width: "90%",
    transform: "translateZ(0)"
  },
  tableWidth: {
    width: "90%"
  }
}));

const Crs = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid container>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              hotelierPro
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Drawer width={200} open={true} docked={false}>
        <AppBar title="App bar" />
        <MenuItem>hello</MenuItem>
      </Drawer>
      <Grid container justify="center" alignItems="center">
        <AriTable />
      </Grid>
    </div>
  );
};

export default Crs;
