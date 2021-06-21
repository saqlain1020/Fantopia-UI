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
import IOSSwitch from "src/Components/IOSSwitch/IOSSwitch";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import TimelapseOutlinedIcon from "@material-ui/icons/TimelapseOutlined";
import AllInclusiveOutlinedIcon from "@material-ui/icons/AllInclusiveOutlined";
import DateTimePicker from "react-datetime-picker";
import tokenList from "src/Config/paymentTokens.json";

const useStyles = makeStyles((theme) => ({
  root: {},
  switches: {
    display: "flex",
    justifyContent: "space-between",
  },
  saleBtnsActive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: 10,
    padding: "15px 0px",
    width: "100%",
    cursor: "pointer",
  },
  saleBtns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    border: `1px solid ${theme.customColors.lightBlack}`,
    borderRadius: 10,
    padding: "15px 0px",
    width: "100%",
    cursor: "pointer",
  },
  datePicker: {
    color: theme.palette.secondary.main,
    display: "block",
    margin: "auto",
    zIndex: 9,
    "& select": {
      color: theme.palette.secondary.main,
    },
    "& input": {
      color: theme.palette.secondary.main,
    },
    "& button": {
      color: theme.palette.secondary.main,
    },
    "& svg": {
      stroke: theme.palette.secondary.main,
    },
    "& div": {
      background: theme.palette.primary.mainWhite,
      border: "none",
    },
  },
  select: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    "&::before": {
      display: "none",
    },
  },
}));

const PutOnSale = ({ getState }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    price: "0",
    currency: "BNB",
    saleKind: 0,
  });
  React.useEffect(() => {
    getState(state);
  }, [state]);
  return (
    <div className={classes.root}>
      <div className={classes.switches}>
        <Typography variant="h6">Put on Sale</Typography>
        <IOSSwitch
          onClick={() => setState({ ...state, putOnSale: !state.putOnSale })}
        />
      </div>
      <Grid container spacing={1}>
        {state.putOnSale && (
          <>
            <Grid item xs={4}>
              <div
                className={
                  state.saleKind === 0
                    ? classes.saleBtnsActive
                    : classes.saleBtns
                }
                onClick={() => setState({ ...state, saleKind: 0 })}
              >
                <LocalOfferOutlinedIcon />
                <Typography align="center">
                  <b>
                    Fixed
                    <br />
                    price
                  </b>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className={
                  state.saleKind === 1
                    ? classes.saleBtnsActive
                    : classes.saleBtns
                }
                onClick={() => setState({ ...state, saleKind: 1 })}
              >
                <TimelapseOutlinedIcon />
                <Typography align="center">
                  <b>
                    Timed
                    <br />
                    auction
                  </b>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className={
                  state.saleKind === 2
                    ? classes.saleBtnsActive
                    : classes.saleBtns
                }
                onClick={() => setState({ ...state, saleKind: 2 })}
              >
                <AllInclusiveOutlinedIcon />
                <Typography align="center">
                  <b>
                    Unlimited
                    <br />
                    auction
                  </b>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={state.price}
                onChange={(e) => setState({ ...state, price: e.target.value })}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <Select
                      required
                      variant="standard"
                      color="secondary"
                      defaultValue="bnb"
                      className={classes.select}
                      value={state.currency}
                      onChange={(e) =>
                        setState({ ...state, currency: e.target.value })
                      }
                    >
                      {state.saleKind === 0 ? (
                        <MenuItem value="BNB">BNB</MenuItem>
                      ) : null}
                      {tokenList.map((e) => {
                        return (
                          <MenuItem value={e.address}>{e.symbol}</MenuItem>
                        );
                      })}
                    </Select>
                  ),
                }}
                variant="outlined"
                placeholder="Enter price"
              />
              <Typography>
                Service Fee <b>2.5%</b>
                {/* You will recieve <b>0.29 BNB</b> */}
              </Typography>
            </Grid>
            {state.saleKind === 1 && (
              <>
                <Grid item xs={12}>
                  <Typography>
                    <b>Starting date </b>{" "}
                    <small> (Don't pick to start after listing)</small>
                  </Typography>
                  <DateTimePicker
                    value={state.startDate}
                    onChange={(e) => setState({ ...state, startDate: e })}
                    className={classes.datePicker}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <b>Expiration date </b>{" "}
                  </Typography>
                  <DateTimePicker
                    value={state.endDate}
                    onChange={(e) => setState({ ...state, endDate: e })}
                    className={classes.datePicker}
                  />
                </Grid>
              </>
            )}
          </>
        )}
      </Grid>
    </div>
  );
};

export default PutOnSale;
