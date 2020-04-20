import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DateRow from "./daterow";
import AvailabilityRow from "./availabilityRow";
import LeftRoomName from "./leftRoomName";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, GridList, List, ListItem } from "@material-ui/core";
import InfoTable from "./infoTable";
import axios from "axios";
import moment from "moment";
import io from "socket.io-client";
import NewReservationDialog from "./utils/newBookingDialog";
import RateCalanderDailog from "./utils/rateCalanderDialog";
import AvailabilityCalanderDailog from "./utils/availabilityCalanderDialog";

const useStyle = makeStyles(theme => ({
  paper: {
    width: 40,
    height: 40,
    borderRight: "none",
    borderTop: "none"
  },

  chartContainer: {
    width: "90%",
    transform: "translateZ(0)",
    height: "100vh"
  },
  tableWidth: {
    width: "90%"
  }
}));

const AriTable = () => {
  const classes = useStyle();
  const [skeleton, setSkeleton] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [dates, setDates] = useState([]);
  const [datePeriod, setDatePeriod] = useState([
    moment(new Date()).format("YYYY-MM-DD"),
    moment(new Date())
      .add(30, "d")
      .format("YYYY-MM-DD")
  ]);
  const [dateHover, setDateHover] = useState("1234");
  const [reservations, setReservations] = useState([]);
  const [reservationDialogOpen, setReservationDialogOpen] = useState(false);
  const handleReservationDialogOpen = () => {
    setReservationDialogOpen(true);
  };
  const handleReservationDialogClose = () => {
    setReservationDialogOpen(false);
  };
  const [rateCalanderDailogOpen, setRateCalanderDailogOpen] = useState(false);
  const handleRateCalanderDialogClose = () => {
    setRateCalanderDailogOpen(false);
  };
  const [
    availabilityCalanderDailogOpen,
    setHandleAvailabilityCalanderDailogOpen
  ] = useState(false);
  const handleAvailabilityCalanderDialogClose = () => {
    setHandleAvailabilityCalanderDailogOpen(false);
  };
  var fakeReservations = [
    {
      arrivalDate: "2020-04-15",
      currencyCode: "EUR",
      departureDate: "2020-04-18",
      guestName: "Jorge Mendes",
      id: "77701",
      name: "Suite - Single Use",
      numberOChildren: 0,
      numberOfAdults: 0,
      numberOfGuests: 1,
      reservationId: "9846",
      status: "1",
      totalPrice: "260"
    },
    {
      arrivalDate: "2020-04-13",
      currencyCode: "EUR",
      departureDate: "2020-04-17",
      guestName: "Jorge Mendes",
      id: "77701",
      name: "Suite - Single Use",
      numberOChildren: 0,
      numberOfAdults: 0,
      numberOfGuests: 1,
      reservationId: "9846",
      status: "1",
      totalPrice: "260"
    }
  ];
  useEffect(() => {
    const fetchAvailability = async () => {
      setSkeleton(true);
      let [dateFrom, dateTo] = datePeriod;
      const req_arg = {
        params: {
          dateFrom: "2020-04-13",
          dateTo: "2020-05-13"
        }
      };
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyIjoic2hhYmVlYmNvZGVyQGdtYWlsLmNvIiwicHJvcGVydHkiOiIxMjM0MzQ1IiwiaWF0IjoxNTg2NjEyMzMyfQ.zS1NG-QZGHG_B5o76-LsLttHFq9RD14fKEP-mhaAnyk";
      await axios
        .post(
          "https://gnm50.sse.codesandbox.io/api/availability?dateFrom1=2020-04-13&dateTo2=2020-05-13",

          { dateFrom: dateFrom, dateTo: dateTo },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(response => {
          const { status, data } = response;
          const { availability, reservations } = data;

          if (status === 200) {
            if (availability.status.returnCode !== 200) {
              alert(data.status.returnMessage);
            }
            if (availability.rooms) {
              if (availability.status.returnCode === 200) {
                setSkeleton(false);
              }
              const { rooms } = availability;
              const reservation = reservations;
              //set reservations and availability to localState
              setReservations(reservation);
              setRooms(rooms);
              console.log(reservations);
              setDates(rooms[0].dates);
            }
          }
        })
        .catch(error => {
          console.log(error);
          alert("something went wrong", error.status);
        });
    };
    fetchAvailability();
  }, [datePeriod]);

  const handleDatePeriod = (dateFrom, dateTo) => {
    setDatePeriod([
      moment(dateFrom).format("YYYY-MM-DD"),
      moment(dateTo).format("YYYY-MM-DD")
    ]);
  };

  const handleDateHover = hoverDate => {
    setDateHover(hoverDate);
  };
  return (
    <>
      <button
        onClick={() => {
          setHandleAvailabilityCalanderDailogOpen(true);
          fakeReservations.map(fakereservation => {
            setReservations([...reservations, fakereservation]);
          });
          console.log(reservations);
        }}
      >
        make fake reservation
      </button>
      <InfoTable handleDatePeriod={handleDatePeriod} />

      <GridList
        justify="center"
        alignItems="center"
        container
        spacing={0}
        className={classes.chartContainer}
      >
        <Grid container wrap="nowrap">
          <Grid item style={{ width: "500px" }} />
          <Grid item>
            <Grid container wrap="nowrap" direction="row">
              {skeleton ? (
                <Skeleton variant="rect" width={180} height={25} />
              ) : (
                <List
                  style={{ width: "180px", height: 0 }}
                  component="nav"
                  aria-label="main mailbox folders"
                >
                  <ListItem button>All Rooms</ListItem>
                </List>
              )}
              {!skeleton ? (
                <DateRow handleDateHover={handleDateHover} dates={dates} />
              ) : (
                // DateRow goes here

                <Skeleton variant="rect" width={1200} height={25} />
              )}
            </Grid>

            {//availability row goes here and leftRoom name
            !skeleton
              ? rooms.map(room => (
                  <Grid container wrap="nowrap">
                    <LeftRoomName roomId={room.id} />
                    {/*    Availability row    */}
                    <AvailabilityRow
                      dateHover={dateHover}
                      reservations={reservations}
                      availabilityInfo={room.dates}
                      roomId={room.id}
                      handleReservationDialogOpen={handleReservationDialogOpen}
                    />
                  </Grid>
                ))
              : [1, 2, 3, 4].map(() => (
                  <Skeleton
                    variant="rect"
                    width={1400}
                    height={50}
                    style={{ marginTop: 10 }}
                  />
                ))}
          </Grid>
        </Grid>
      </GridList>

      <NewReservationDialog
        reservationDialogOpen={reservationDialogOpen}
        handleReservationDialogClose={handleReservationDialogClose}
      />
      <RateCalanderDailog
        rateCalanderDailogOpen={rateCalanderDailogOpen}
        handleRateCalanderDialogClose={handleRateCalanderDialogClose}
      />
      <AvailabilityCalanderDailog
        setHandleAvailabilityCalanderDailogOpen={
          setHandleAvailabilityCalanderDailogOpen
        }
        handleAvailabilityCalanderDialogClose={
          handleAvailabilityCalanderDialogClose
        }
        availabilityCalanderDailogOpen={availabilityCalanderDailogOpen}
      />
    </>
  );
};

export default AriTable;
