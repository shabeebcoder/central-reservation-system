import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Typography, CircularProgress, Grid } from "@material-ui/core";
import AddressForm from "./AddressForm";
import RoomDetails from "./RoomDetails";
import Review from "./Review";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://hotelierPro.com/">
        hotelierPro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

export default function PropertyMapping() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  //Property details
  const [propertyName, setPropertyName] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [propertyAddress, setPropertyAddress] = useState(null);
  const [propertyUrl, setPropertyUrl] = useState(null);
  const [propertyCity, setPropertyCity] = useState(null);
  const [propertyState, setPropertyState] = useState(null);
  const [propertyZip, setPropertyZip] = useState(null);
  const [propertyCountry, setPropertyCountry] = useState(null);
  //error
  const [propertyNameError, setPropertyNameError] = useState(false);
  const [propertyTypeError, setPropertyTypeError] = useState(false);
  const [propertyAddressError, setPropertyAddressError] = useState(false);
  const [propertyUrlError, setPropertyUrlError] = useState(false);
  const [propertyCityError, setPropertyCityError] = useState(false);
  const [propertyStateError, setPropertyStateError] = useState(false);
  const [propertyCountryError, setPropertyCountryError] = useState(false);
  const [propertyZipError, setPropertyZipError] = useState(false);
  // roomDetails
  const [roomTypes, setRoomTypes] = useState("");
  const [roomTypeQuantity, setRoomTypeQuantity] = useState("");
  const [roomTypesError, setRoomtypesError] = useState(false);
  const [roomTypesQuantityError, setRoomtypesQuantityError] = useState(false);
  // All details of the property to send to API
  const [propertyDetails, setPropertyDetails] = useState("");
  const steps = ["Property address", "Room details", "Confirmation"];
  const [registerProgressBar, setRegisterProgressBar] = useState(false);

  useEffect(() => {
    const updatePropertyDetailsApi = async () => {
      setRegisterProgressBar(true);
      await axios
        .post(
          "https://gnm50.sse.codesandbox.io/api/partner/property/registration",
          propertyDetails
        )
        .then(response => {
          console.log(response.data);
          setTimeout(() => {
            setRegisterProgressBar(false);
          }, 1000);
        })
        .catch(error => {
          alert(error.data);
        });
    };
    if (activeStep === 2) {
      updatePropertyDetailsApi();
    }
    console.log("registration success", activeStep);
  }, [propertyDetails, activeStep]);
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            propertyName={propertyName}
            propertyType={propertyType}
            propertyAddress={propertyAddress}
            propertyUrl={propertyUrl}
            propertyCity={propertyCity}
            propertyState={propertyState}
            propertyZip={propertyZip}
            propertyCountry={propertyCountry}
            setPropertyName={setPropertyName}
            setPropertyType={setPropertyType}
            setPropertyAddress={setPropertyAddress}
            setPropertyUrl={setPropertyUrl}
            setPropertyCity={setPropertyCity}
            setPropertyState={setPropertyState}
            setPropertyZip={setPropertyZip}
            setPropertyCountry={setPropertyCountry}
            //erroe
            propertyNameError={propertyNameError}
            propertyTypeError={propertyTypeError}
            propertyAddressError={propertyAddressError}
            propertyUrlError={propertyUrlError}
            propertyCityError={propertyCityError}
            propertyStateError={propertyStateError}
            propertyCountryError={propertyCountryError}
            propertyZipError={propertyZipError}
          />
        );
      case 1:
        return (
          <RoomDetails
            roomTypeQuantity={roomTypeQuantity}
            setRoomTypeQuantity={setRoomTypeQuantity}
            roomTypes={roomTypes}
            setRoomTypes={setRoomTypes}
            roomTypesQuantityError={roomTypesQuantityError}
            roomTypesError={roomTypesError}
          />
        );
      case 2:
        console.log(roomTypes);
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }
  const handleNext = () => {
    if (activeStep === 0) {
      if (propertyName === null) {
        setPropertyNameError(true);
        return false;
      } else {
        setPropertyNameError(false);
      }
      if (propertyType === null) {
        setPropertyTypeError(true);
        return false;
      } else {
        setPropertyTypeError(false);
      }
      if (propertyAddress === null) {
        setPropertyAddressError(true);
        return false;
      } else {
        setPropertyAddressError(false);
      }
      if (propertyUrl === null) {
        setPropertyUrlError(true);
        return false;
      } else {
        setPropertyUrlError(false);
      }
      if (propertyCity === null) {
        setPropertyCityError(true);
        return false;
      } else {
        setPropertyCityError(false);
      }
      if (propertyState === null) {
        setPropertyStateError(true);
        return false;
      } else {
        setPropertyStateError(false);
      }
      if (propertyZip === null) {
        setPropertyZipError(true);
        return false;
      } else {
        setPropertyZipError(false);
      }
      if (propertyCountry === null) {
        setPropertyCountryError(true);
        return false;
      } else {
        setPropertyCountryError(false);
      }
    }

    if (activeStep === 1) {
      if (roomTypes === "") {
        setRoomtypesError(true);
        return false;
      } else {
        setRoomtypesError(false);
      }
      if (roomTypeQuantity === "") {
        setRoomtypesQuantityError(true);
        return false;
      } else {
        setRoomtypesQuantityError(false);
      }
    }

    const propertyDetail = {
      propertyName: propertyName,
      propertyType: propertyType,
      propertyAddress: propertyAddress,
      propertyUrl: propertyUrl,
      propertyCity: propertyCity,
      propertyState: propertyState,
      propertyZip: propertyZip,
      propertyCountry: propertyCountry,
      rooms: [
        {
          roomType: roomTypes,
          quantity: roomTypeQuantity
        }
      ]
    };
    // call api function to update details, set state and pass to review component
    if (activeStep === 2) {
      setPropertyDetails(propertyDetail);
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            hotelierPro
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Property Information
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length - 1 ? (
              <React.Fragment>
                {registerProgressBar ? (
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    direction="column"
                  >
                    <Grid item>
                      <CircularProgress />
                    </Grid>
                    <br />
                    <Grid item>
                      <Typography variant="h5" gutterBottom>
                        Registering new property
                      </Typography>
                    </Grid>
                  </Grid>
                ) : (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Welcome to hotelierPro !
                    </Typography>
                    <Typography variant="subtitle1">
                      We have emailed you login link, please check you'r email
                      to get unique login id for your property
                    </Typography>
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
