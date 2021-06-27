import {
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React from "react";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.customColors.bgGrey,
    paddingTop: 70,
    paddingBottom: 70,
    color: theme.customColors.lightBlack,
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
    // background: "rgba(255,255,255,0.3)",
    height: 40,
    width: 300,
    color: theme.palette.secondary.main,
    "& fieldset": {
      // borderWidth: "0px !important",
      borderColor: `${theme.palette.secondary.main} !important`,
    },
    "& input": {
      // borderWidth: "0px !important",
    },
  },
  socialIconsContainer: {
    marginTop: 20,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    "& button": {
      color: theme.customColors.lightBlack,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LanguageSelect/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={10}>
            <Grid item>
              <div>
                <Typography>
                  <b>Fantopia</b>
                </Typography>
                <Typography>Marketplace</Typography>
                <Typography>How it works</Typography>
                <Typography>FAQ</Typography>
                <Typography>Support</Typography>
                <Typography>Get verified</Typography>
              </div>
            </Grid>

            <Grid item>
              <div>
                <Typography>
                  <b>Governance</b>
                </Typography>
                <Typography>Terms of Service</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Report Content</Typography>
                <Typography>Suggest Features</Typography>
                <Typography>Voting</Typography>
                <Typography>Join Us</Typography>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Typography>
                  <b>Community</b>
                </Typography>
                <Typography>Governance Token</Typography>
                <Typography>Telegram</Typography>
                <Typography>Discord</Typography>
                <Typography>Medium</Typography>
                <Typography>Instagram</Typography>
                <Typography>Twitter</Typography>
                <Typography>Youtube</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography align="center" style={{ fontWeight: 700, fontSize: 20 }}>
            Get the latest updates from Fantopia
          </Typography>
          <div className={classes.inputContainer}>
            <OutlinedInput
              className={classes.input}
              placeholder="Your - Email"
            />
            <Button variant="contained" color="secondary">
              Subscribe
            </Button>
          </div>
          <div className={classes.socialIconsContainer}>
            <IconButton>
              <i className="fab fa-facebook-f"></i>
            </IconButton>
            <IconButton>
              <i className="fab fa-twitter"></i>
            </IconButton>
            <IconButton>
              <i className="fab fa-instagram"></i>
            </IconButton>
            <IconButton>
              <i className="fab fa-linkedin-in"></i>
            </IconButton>
            <IconButton>
              <i className="fab fa-telegram-plane"></i>
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
