import React from "react";
import {
  Divider,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import CreationCard from "../CreationCard/CreationCard";
import CustomButton from "../CustomButton/CustomButton";
import SmileAddIco from "src/Assets/Icons/smileadd.png";
import Logo from "src/Assets/Images/logo.png";
import IOSSwitch from "../IOSSwitch/IOSSwitch";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ModalManager from "../ModalManager/ModalManager";
import Collection from "src/Modals/Collection/Collection";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    borderRadius: 15,
    background: theme.palette.primary.dark,
    padding: 16,
    boxShadow: theme.customShadows.light,
    width: "80%",
    maxWidth: 1000,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  left: {
    borderRight: `1px solid ${theme.customColors.veryLightBlack}`,
    [theme.breakpoints.down("sm")]: {
      borderRight: "none",
    },
  },
  right: {
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  select: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    "&::before": {
      display: "none",
    },
  },
  btns: {
    margin: 5,
    height: 70,
    fontWeight: 600,
    fontSize: 12,
    "& div": {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  switches: {
    display: "flex",
    justifyContent: "space-between",
  },
  createBtn: {
    color: theme.customColors.white,
    borderRadius: 15,
    width: "calc(100% - 20px)",
    marginRight: "auto",
    height: 60,
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  dropArea: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    flexFlow: "column",
    justifyContent: "center",
    color: theme.customColors.veryLightBlack,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    boxShadow: theme.customShadows.medium,
  },
  dropHeading: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
}));

const CreateSingleItem = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <CreationCard />
        <Divider />
        <div style={{ padding: 10 }}>
          <div className={classes.switches}>
            <Typography variant="h6">Put on Sale</Typography>
            <IOSSwitch />
          </div>
          <div className={classes.switches}>
            <Typography variant="h6">Instant Sale</Typography>
            <IOSSwitch />
          </div>
          <div className={classes.switches}>
            <Typography variant="h6">Unlock upon purchase</Typography>
            <IOSSwitch />
          </div>
          <div className={classes.switches}>
            <Typography variant="h6">Royalty (Sug: 5-30%)</Typography>
            <TextField
              style={{ width: 70 }}
              variant="outlined"
              InputProps={{
                endAdornment: <Typography>%</Typography>,
                style: {
                  height: 30,
                },
              }}
            />
          </div>
        </div>
        <Divider />
        <div className={`flex ${classes.dropArea}`}>
          <ImageOutlinedIcon />
          <Typography variant="h6" className={classes.dropHeading}>
            Choose File
          </Typography>
          <Typography style={{ fontSize: 12, fontWeight: 600 }}>
            PNG,GIF,WEBP,MP4 or MP3, Max 30mb
          </Typography>
        </div>
        <CustomButton
          variant="contained"
          color="secondary"
          className={classes.createBtn}
          onClick={() => setOpen(true)}
        >
          Create Item
        </CustomButton>
      </div>
      <div className={classes.right}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          <b>Create a single NFT item</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              placeholder="Item Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              variant="outlined"
              defaultValue="disabled"
              fullWidth
            >
              <MenuItem value="disabled" disabled>
                Category
              </MenuItem>
              <MenuItem value="comicbook">Comic Book</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <TextField
              fullWidth
              InputProps={{
                endAdornment: (
                  <Select
                    variant="standard"
                    color="secondary"
                    defaultValue="bnb"
                    className={classes.select}
                  >
                    <MenuItem value="bnb">BNB</MenuItem>
                  </Select>
                ),
              }}
              variant="outlined"
              placeholder="Enter price for one piece"
            />
            <Typography>
              Service Fee <b>2.5%</b> You will recieve <b>0.29 BNB</b>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5} className="flex">
            <CustomButton
              variant="contained"
              color="secondary"
              className={classes.btns}
            >
              <div>
                <img src={SmileAddIco} width="20px" alt="" />
                <span>Create BEP-721</span>
              </div>
            </CustomButton>
            <CustomButton
              variant="outlined"
              color="secondary"
              className={classes.btns}
            >
              <div>
                <img src={Logo} width="30px" alt="" />
                <span>Fantopia</span>
              </div>
            </CustomButton>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              placeholder="properties i.e. size (Optional)"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={5}
              variant="outlined"
              placeholder="Items Description"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              placeholder="Digital key, code to redeem or link to a file for buyer"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
      <ModalManager open={open} close={() => setOpen(false)}>
        <Collection />
      </ModalManager>
    </div>
  );
};

export default CreateSingleItem;
