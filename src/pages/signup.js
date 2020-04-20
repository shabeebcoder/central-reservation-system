import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Snackbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://hotelierpro.com/">
        hotelierPro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  let history = useHistory();
  const classes = useStyles();
  const [errorFirstname, setErrorFirstName] = useState(false);
  const [errorLastname, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("loging...");

  const axiosRegister = async registationData => {
    setSnackBarMessage("registering ...");
    setOpen(true);
    await axios
      .post(
        "https://gnm50.sse.codesandbox.io/api/partner/registration",
        registationData
      )
      .then(response => {
        if (response.status === 200) {
          setSnackBarMessage("registration success");
          setTimeout(() => {
            setOpen(false);
            history.push("/property/registration");
          }, 1000);
          console.log(response.data);
        }
      })
      .catch(err => {
        setSnackBarMessage(err.response.data);
      });
  };
  const handleSubmit = () => {
    if (firstName === "") {
      setErrorFirstName(true);
      return false;
    } else {
      setErrorFirstName(false);
    }
    if (lastName === "") {
      setErrorLastName(true);
      return false;
    } else {
      setErrorLastName(false);
    }
    if (email === "") {
      setErrorEmail(true);
      return false;
    } else {
      setErrorEmail(false);
    }
    if (password === "") {
      setErrorPassword(true);
      return false;
    } else {
      setErrorPassword(false);
    }

    const userInfo = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    };

    axiosRegister(userInfo);
    //Send registration information to the server
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar open={open} message={snackBarMessage} />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={errorFirstname}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={errorLastname}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errorEmail}
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errorPassword}
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
