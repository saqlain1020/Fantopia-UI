import React from "react";
import {
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import IOSSwitch from "src/Components/IOSSwitch/IOSSwitch";
import CustomButton from "src/Components/CustomButton/CustomButton";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    width: 600,
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.down("lg")]: {
      width: 500,
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  lightColor: {
    color: theme.customColors.veryLightBlack,
  },
  select: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    "&::before": {
      display: "none",
    },
  },
  btn: {
    color: theme.customColors.white,
    fontSize: 20,
    padding: "10px 40px",
    borderRadius: 15,
    marginTop: 20,
  },
  tokenTextfield:{
    "& input":{

      color:theme.palette.secondary.main,
    }
  }
}));

const EditItem = () => {
  const classes = useStyles();
    const [loading,setLoading] = React.useState(false)

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        align="center"
        className="acmeFont"
        style={{ marginBottom: 20 }}
      >
        Edit Item
      </Typography>
      <Typography
        className={classes.lightColor}
        variant="h6"
        align="center"
        style={{ marginBottom: 5 }}
      >
        Change price for your existing item.
      </Typography>
      <center>
        <TextField
          InputProps={{
            endAdornment: (
              <Select variant="standard" defaultValue='' className={classes.select}>
                <MenuItem value="bnb">BNB</MenuItem>
              </Select>
            ),
          }}
          variant="outlined"
          placeholder="Change Price"
          
        />
      </center>
      <Typography
        align="center"
        className={classes.lightColor}
        variant="h6"
        style={{ marginBottom: 10 }}
      >
        Service Fee <b>2.5%</b> You will receive <b>0.29BNB</b>
      </Typography>
      <Typography
        variant="h5"
        align="center"
        className="acmeFont"
        style={{ marginBottom: 10 }}
      >
        Transfer Token
      </Typography>
      <center>
        <TextField
          variant="outlined"
          placeholder="Enter quantity to transfer"
          style={{ marginBottom: 10 }}
        />
      </center>
      <br />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Paste recieving address here"
        style={{ marginBottom: 10 }}
      />
      <Typography variant="h5" align="center" className="acmeFont">
        Remove from sale <IOSSwitch />
      </Typography>
      <center>
        <Typography style={{ maxWidth: 300 }}>
          <b>
            Are you sure you want to remove your item for sale? You can put it
            on sale anytime.
          </b>
        </Typography>
      </center>
      <Typography variant="h5" align="center" className="acmeFont">
        Burn Token <IOSSwitch />
      </Typography>
      <center>
        <Typography style={{ maxWidth: 300 }}>
          <b>
            Are you sure you want to burn this token? This action cannot be
            undone. Token will transfered to zero address.
          </b>
        </Typography>
      </center>
      <TextField fullWidth color="secondary" className={classes.tokenTextfield} placeholder="Enter amount of tokens to be burned" />
      <center>
        <CustomButton
          variant="outlined"
          color="secondary"
          className={`acmeFont ${classes.btn}`}
          loading={loading}
          onClick={()=>setLoading(true)}
        >
          Process updates
        </CustomButton>
      </center>
    </div>
  );
};

export default EditItem;
