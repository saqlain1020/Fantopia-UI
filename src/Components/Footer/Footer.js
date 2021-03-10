import {
  Button,
  Container,
  Grid,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.customColors.bgGrey,
    paddingBottom: 70,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    height: 40,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    background: "rgba(255,255,255,0.3)",
    height: 40,
    width: 300,

    "& fieldset": {
      borderWidth: "0px !important",
    },
    "& input": {
      borderWidth: "0px !important",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" style={{ fontWeight: 700, fontSize: 20 }}>
        Get the latest updates happening on Kelekshen
      </Typography>
      <div className={classes.inputContainer}>
        <OutlinedInput className={classes.input} placeholder="Your - Email" />
        <Button variant="contained" color="secondary">
          Subscribe
        </Button>
      </div>
      <Container style={{ marginTop: 50 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography align="center">
                <b>Kelekshen</b>
              </Typography>
              <Typography align="center">Marketplace</Typography>
              <Typography align="center">How it works</Typography>
              <Typography align="center">FAQ</Typography>
              <Typography align="center">Support</Typography>
              <Typography align="center">Get verified</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography align="center">
                <b>Community</b>
              </Typography>
              <Typography align="center">Governance Token</Typography>
              <Typography align="center">Telegram</Typography>
              <Typography align="center">Discord</Typography>
              <Typography align="center">Medium</Typography>
              <Typography align="center">Instagram</Typography>
              <Typography align="center">Twitter</Typography>
              <Typography align="center">Youtube</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography align="center">
                <b>Governance</b>
              </Typography>
              <Typography align="center">Terms of Service</Typography>
              <Typography align="center">Privacy Policy</Typography>
              <Typography align="center">Report Content</Typography>
              <Typography align="center">Suggest Features</Typography>
              <Typography align="center">Voting</Typography>
              <Typography align="center">Join Us</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
