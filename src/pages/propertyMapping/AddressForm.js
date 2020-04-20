import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm({
  propertyName,
  propertyType,
  propertyAddress,
  propertyUrl,
  propertyCity,
  propertyZip,
  propertyCountry,
  setPropertyCountry,
  setPropertyZip,
  setPropertyState,
  setPropertyCity,
  setPropertyUrl,
  setPropertyAddress,
  setPropertyType,
  setPropertyName,
  //error
  propertyNameError,
  propertyTypeError,
  propertyAddressError,
  propertyUrlError,
  propertyCityError,
  propertyStateError,
  propertyCountryError,
  propertyZipError
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Property address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="propertyName"
            error={propertyNameError}
            name="firstName"
            label="Property name"
            fullWidth
            value={propertyName}
            onChange={event => {
              setPropertyName(event.target.value);
            }}
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Property Type"
            fullWidth
            value={propertyType}
            error={propertyTypeError}
            onChange={event => {
              setPropertyType(event.target.value);
            }}
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            value={propertyAddress}
            error={propertyAddressError}
            onChange={event => {
              setPropertyAddress(event.target.value);
            }}
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="website url"
            fullWidth
            value={propertyUrl}
            error={propertyUrlError}
            onChange={event => {
              setPropertyUrl(event.target.value);
            }}
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
            value={propertyCity}
            error={propertyCityError}
            onChange={event => {
              setPropertyCity(event.target.value);
            }}
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            error={propertyStateError}
            onChange={event => {
              setPropertyState(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            value={propertyZip}
            error={propertyZipError}
            onChange={event => {
              setPropertyZip(event.target.value);
            }}
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value={propertyCountry}
            error={propertyCountryError}
            onChange={event => {
              setPropertyCountry(event.target.value);
            }}
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
