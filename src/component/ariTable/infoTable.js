import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Button, Grid } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

const useStyle = makeStyles(theme => ({
  actionBar: {
    height: 100,
    width: "90%",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#f5f5f5"
  }
}));
const InfoTable = ({ handleDatePeriod }) => {
  const [dateFrom, setdateFrom] = useState(moment(new Date()));
  const [dateTo, setdateTo] = useState(moment(new Date()).add(30, "d"));
  const classes = useStyle();

  const dateChangeHandle = (date, period) => {
    const momentObj = moment(date);
    if (period === "dateFrom") {
      setdateFrom(momentObj.format("YYYY/MM/DD").toString());
      setdateTo(
        momentObj
          .add(30, "d")
          .format("YYYY/MM/DD")
          .toString()
      );
    }
    if (period === "dateTo") {
      setdateTo(momentObj.format("YYYY/MM/DD").toString());
      setdateFrom(
        momentObj
          .subtract(30, "d")
          .format("YYYY/MM/DD")
          .toString()
      );
    }
  };
  return (
    <Grid container justify="center" alignItems="center">
      <Paper elevation={0} variant="outlined" className={classes.actionBar}>
        <Grid
          container
          alignItems="center"
          direction="row"
          style={{ height: "100px", paddingLeft: "20px" }}
        >
          <Grid item>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                disablePast
                label="From"
                value={dateFrom}
                animateYearScrolling
                onChange={date => dateChangeHandle(date, "dateFrom")}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item style={{ marginLeft: "10px" }}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                disablePast
                minDateMessage
                label="Up to and including"
                value={dateTo}
                onChange={date => dateChangeHandle(date, "dateTo")}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px", marginLeft: 10 }}
            disableElevation
            onClick={() => handleDatePeriod(dateFrom, dateTo)}
          >
            set period
          </Button>
          <Grid items selfAlign="center">
            <Box
              style={{
                backgroundColor: "green",
                fontSize: "10px",
                color: "white",
                float: "right",
                marginLeft: 520
              }}
              component="div"
              p={1}
              m={1}
              display="inline"
            />
          </Grid>
          Booked
          <Grid items selfAlign="center">
            <Box
              style={{
                backgroundColor: "red",
                fontSize: "10px",
                color: "white",
                float: "right"
              }}
              component="div"
              p={1}
              m={1}
              display="inline"
            />
          </Grid>
          blocked
          <Grid items selfAlign="center">
            <Box
              style={{
                backgroundColor: "white",
                fontSize: "10px",
                color: "white",
                float: "right"
              }}
              component="div"
              p={1}
              m={1}
              display="inline"
            />
          </Grid>
          available
        </Grid>
      </Paper>
    </Grid>
  );
};

export default InfoTable;
