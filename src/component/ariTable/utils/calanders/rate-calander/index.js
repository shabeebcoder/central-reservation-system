import React, { useState } from "react";
import {
  Grid,
  Divider,
  Typography,
  TextField,
  InputAdornment
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./style.css";

export default function RateCalander() {
  const [value, setValue] = useState(200);
  let [click, setClick] = useState(false);
  const handleOnclickToEdit = () => {
    if (!click) {
      setClick(true);
    }
  };

  const handleOnChangeRate = event => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Grid xs={12} container direction="row">
        <Grid
          container
          alignItems="flex-start"
          direction="column"
          style={{
            width: "20%",
            backgroundColor: "#7c80cd",
            padding: 10
          }}
        >
          <Typography
            variant="subtitle2"
            style={{ color: "#D3D3D3", fontWeight: 300 }}
            gutterBottom
          >
            2020
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", fontWeight: 300 }}
            gutterBottom
          >
            Tue, Apr
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", fontWeight: 300 }}
            gutterBottom
          >
            14
          </Typography>
          <Divider />
          <Typography
            variant="subtitle2"
            style={{ color: "#D3D3D3", fontWeight: 300 }}
            gutterBottom
          >
            Channel
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", fontWeight: 100 }}
            gutterBottom
          >
            booking.com
          </Typography>
        </Grid>
        <table id="calander" class="grid-container">
          <caption>
            <ChevronLeftIcon />
            <div>April 2020</div>
            <ChevronRightIcon />
          </caption>
          <tr>
            <th>
              <Typography>Su</Typography>
            </th>
            <th>
              <Typography>Mo</Typography>
            </th>
            <th>
              <Typography>Tu</Typography>
            </th>
            <th>
              <Typography>We</Typography>
            </th>
            <th>
              <Typography>Th</Typography>
            </th>
            <th>
              <Typography>Fr</Typography>
            </th>
            <th>
              <Typography>Sa</Typography>
            </th>
          </tr>
          <tbody>
            <tr>
              <td>
                <span class="date">01</span>
                <span class="rate">&#x20B9;1900</span>
              </td>
              <td onClick={handleOnclickToEdit}>
                <span class="date">02</span>
                <span class="rate">
                  {click ? (
                    <TextField
                      label="Edit rate"
                      fullWidth
                      onChange={() => handleOnChangeRate(event)}
                      value={value}
                    />
                  ) : (
                    value
                  )}
                </span>
              </td>
              <td>
                <span class="date">03</span>
                <span class="rate">&#x20B9;1800 </span>
              </td>
              <td>
                <span class="date">04</span>
                <span class="rate">&#x20B9;1300</span>
              </td>
              <td>
                <span class="date">05</span>
                <span class="rate">&#x20B9;1000</span>
              </td>
              <td>
                <span class="date">06</span>
                <span calss="rate">&#x20B9;1900</span>
              </td>
              <td>
                <span class="date">07</span>
                <span class="rate">1435</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="date">08</span>
                <span class="rate">1400</span>
              </td>
              <td>
                <span class="date">09</span>
                <span class="rate">1400</span>
              </td>
              <td>
                <span class="date">10</span>
                <span class="rate">1300</span>
              </td>
              <td>
                <span class="date">11</span>
                <span class="rate">1300</span>
              </td>
              <td>
                <span class="date">13</span>
                <span class="rate">1300</span>
              </td>
              <td>
                <span class="date">14</span>
                <span class="rate">1300</span>
              </td>
              <td>
                <span class="date">14</span>
                <span class="rate">1300</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="date">15</span>
                <span class="rate">1100</span>
              </td>
              <td>
                <span class="date">16</span>
                <span class="rate">1900</span>
              </td>
              <td>
                <span class="date">17</span>
                <span class="rate">1200</span>
              </td>
              <td>
                <span class="date">18</span>
                <span class="rate">1300</span>
              </td>
              <td>
                <span class="date">19</span>
                <span class="rate">1200</span>
              </td>
              <td>
                <span class="date">20</span>
                <span class="rate">1900</span>
              </td>
              <td>
                <span class="date">21</span>
                <span class="rate">1800</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="date">22</span>
                <span class="rate">1400</span>
              </td>
              <td>
                <span class="date">23</span>
                <span class="rate">1400</span>
              </td>
              <td>
                <span class="date">24</span>
                <span class="rate">1400</span>
              </td>
              <td>
                <span class="date">25</span>
                <span class="rate">1000</span>
              </td>
              <td>
                <span class="date">26</span>
                <span class="rate">100</span>
              </td>
              <td>
                <span class="date">27</span>
                <span class="rate">1200</span>
              </td>
              <td>
                <span class="date">28</span>
                <span class="rate">1300</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="date">29</span>
                <span class="rate">1300</span>
              </td>
              <td>
                <span class="date">30</span>
                <span class="rate">1300</span>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </div>
  );
}
