import React, { useState } from "react";
import { Paper, Button, Typography, Tooltip } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  paper: {
    width: 44,
    height: 32,
    marginTop: 8,
    borderRight: "none",
    textAlign: "center",
    paddingTop: 16,
    "&:hover": {
      backgroundColor: "#f9f9fa",
      cursor: "pointer"
    }
  },
  paperHover: {
    width: 44,
    height: 32,
    marginTop: 8,
    borderRight: "none",
    textAlign: "center",
    backgroundColor: "#f9f9fa",
    paddingTop: 16,
    "&:hover": {
      backgroundColor: "#f9f9fa"
    }
  },
  paperBooked: {
    width: 44,
    height: 32,
    marginTop: 8,
    borderRight: "none",
    textAlign: "center",
    backgroundColor: "#D0F0C0",
    paddingTop: 16,
    "&:hover": {
      backgroundColor: "#D0F0C0",
      cursor: "pointer"
    }
  }
}));

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const AvailabilityRow = ({
  availabilityInfo,
  dateHover,
  reservations,
  roomId,
  handleReservationDialogOpen
}) => {
  const [toolTipOpen, setToolTipOpen] = useState(true);
  const [toolTipReservationInfo, setToolTipReservationInfo] = useState({});
  const checkIsBooked = (dateRow, roomId) => {
    var isBooked = false;
    reservations.forEach(reservation => {
      if (
        reservation.arrivalDate === dateRow ||
        reservation.departureDate === dateRow
      ) {
        if (reservation.id === roomId) {
          isBooked = true;
        }
      }
    });
    return isBooked;
  };

  const getReservationInfo = (date, roomId) => {
    reservations.forEach(reservation => {
      if (
        reservation.arrivalDate === date ||
        (reservation.departureDate === date && reservation.id === roomId)
      ) {
        const guestInformation = {
          guestName: reservation.guestName,
          numberOfGuests: reservation.numberOfGuests,
          numberOfAdults: reservation.numberOfAdults,
          numberOChildren: reservation.numberOChildren,
          arrivalDate: reservation.arrivalDate,
          departureDate: reservation.departureDate,
          currencyCode: reservation.currencyCode,
          reservationId: reservation.reservationId
        };
        setToolTipReservationInfo(guestInformation);
      }
    });
  };
  const paperAppearance = (dateInfo, roomId) => {
    if (checkIsBooked(dateInfo.date, roomId)) return classes.paperBooked;
    if (dateHover === dateInfo.date) return classes.paperHover;

    return classes.paper;
  };
  const handleToolTip = (date, roomId) => {
    let isBookedForToolTip = true;
    if (checkIsBooked(date, roomId)) {
      getReservationInfo(date, roomId);
      isBookedForToolTip = false;
    }
    setToolTipOpen(isBookedForToolTip);
  };
  const classes = useStyle();
  return (
    <>
      {availabilityInfo.map(dateInfo => (
        <HtmlTooltip
          id="1"
          disableHoverListener={toolTipOpen}
          onMouseOver={() => {
            handleToolTip(dateInfo.date, roomId);
          }}
          title={
            <React.Fragment>
              <Typography color="inherit">
                {toolTipReservationInfo.guestName}
              </Typography>
              <b>{"Arrival Date: "}</b>
              {toolTipReservationInfo.arrivalDate}
              <br />
              <b>{"Departure Date: "}</b>
              {toolTipReservationInfo.departureDate}
              <br />
              <b>{"numberOfGuests: "}</b>
              {toolTipReservationInfo.numberOfGuests}
              <br />
              <b>{"numberOfAdults: "}</b>
              {toolTipReservationInfo.numberOfAdults}
              <br />
              <b>{"numberOChildren: "}</b>
              {toolTipReservationInfo.numberOChildren}
              <br />
              <b>{"currencyCode: "}</b>
              {toolTipReservationInfo.currencyCode}
              <br />
              <b>{"reservationId: "}</b>
              {toolTipReservationInfo.reservationId}
              <br />
              <b>{"source: "}</b>
              {"Booking.com "}
              <br />
            </React.Fragment>
          }
        >
          <Paper
            elevation={0}
            variant="outlined"
            square
            button
            onMouseLeave={() => setToolTipOpen(true)}
            className={paperAppearance(dateInfo, roomId)}
            onClick={() => {
              handleReservationDialogOpen();
            }}
          >
            <Typography variant="caption">
              {dateInfo.availability}/10
            </Typography>
          </Paper>
        </HtmlTooltip>
      ))}
    </>
  );
};

export default AvailabilityRow;
