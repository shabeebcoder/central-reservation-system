import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyle = makeStyles(theme => ({
  paperDate2: stylePaper
}));

const stylePaper = () => {
  return {
    width: 44,
    height: 25,
    marginTop: 8,
    borderRight: "none",
    fontStyle: "italic",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#f9f9fa",
      cursor: "pointer"
    }
  };
};

const DateRow = ({ dates, handleDateHover }) => {
  const classes = useStyle();
  const dateFormat = (datetoFormat, query) => {
    const momentObj = moment(datetoFormat);
    if (query === "ddd") {
      return momentObj.format("ddd").toString();
    }
    if (query === "D") {
      return momentObj.format("D").toString();
    }
  };
  return (
    <>
      {dates.map(date => (
        <Paper
          elevation={0}
          variant="outlined"
          square
          button
          className={classes.paperDate2}
          onMouseOver={() => {
            handleDateHover(date.date);
          }}
          onMouseLeave={() => {
            handleDateHover("");
          }}
        >
          <Typography variant="caption">
            <b>
              {" "}
              {dateFormat(date.date, "D")}
              <sup>{dateFormat(date.date, "ddd")}</sup>
            </b>
          </Typography>
        </Paper>
      ))}
    </>
  );
};

export default DateRow;
