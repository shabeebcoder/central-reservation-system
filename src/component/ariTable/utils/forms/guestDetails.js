import React from "react";
import { TextField, Grid, Typography } from "@material-ui/core";

const GuestDetailsForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Guest details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="roomtype"
            name="roomtype"
            label="Room type"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numberOfGuest"
            name="numberOfGuest"
            label="Number of guest"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="arrivalDate"
            name="arrivalDate"
            label="Arrival date"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="departureDate"
            name="departureDate"
            label="Departure date"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line "
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="country" name="country" label="Country" fullWidth />
        </Grid>

        <Grid item xs={12} />
      </Grid>
    </React.Fragment>
  );
};

export default GuestDetailsForm;
