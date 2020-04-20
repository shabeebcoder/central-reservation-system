import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

export default function RoomsDetails({
  setRoomTypes,
  roomTypes,
  setRoomTypeQuantity,
  roomTypeQuantity,
  roomTypesQuantityError,
  roomTypesError
}) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Add room types
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="outlined" color="default" fullWidth>
            Add new room type
          </Button>
        </Grid>

        {[1].map((type, index) => (
          <>
            <Grid item xs={12} md={6}>
              <TextField
                error={roomTypesError}
                required
                id="cardName"
                label="Room type name"
                value={roomTypes}
                onChange={event => {
                  setRoomTypes(event.target.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-label">
                  Number of rooms
                </InputLabel>
                <Select
                  error={roomTypesQuantityError}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  onChange={event => {
                    setRoomTypeQuantity(event.target.value);
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </>
        ))}
      </Grid>
    </React.Fragment>
  );
}
