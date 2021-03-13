import React from "react";
import { Divider, makeStyles, Tab, Typography } from "@material-ui/core";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
    background: theme.customColors.white,
    boxShadow: theme.customShadows.light,
    padding: 20,
  },
  tabsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  tabActive: {
    borderBottom: "none !important",
    background: `${theme.customColors.white} !important`,
  },
  comment: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px 10px",
  },
}));

const commentData = [
  { msg: "#131/271 on sale for $14000000.00 30m ago", rating: 23 },
  { msg: "#131/271 on sale for $14000000.00 30m ago", rating: 20 },
  { msg: "#131/271 on sale for $14000000.00 30m ago", rating: 33 },
];

const ProductInfoTabs = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(1);

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <Tab
          style={{
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(0,0,0,0.05)",
          }}
          fullWidth
          label="Owner History"
          className={tab === 1 ? classes.tabActive : ""}
          onClick={() => setTab(1)}
        />
        <Tab
          style={{
            border: "1px solid rgba(0,0,0,0.1)",
            borderTop: "none",
            background: "rgba(0,0,0,0.05)",
          }}
          fullWidth
          label="Market Stats"
          className={tab === 2 ? classes.tabActive : ""}
          onClick={() => setTab(2)}
        />
        <Tab
          style={{
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(0,0,0,0.05)",
          }}
          fullWidth
          label="Transaction History"
          className={tab === 3 ? classes.tabActive : ""}
          onClick={() => setTab(3)}
        />
      </div>
      <div>
        {commentData.map((item, index) => (
          <div key={index}>
            <div className={classes.comment}>
              <div style={{ position: "relative", width: 45, height: 50 }}>
                <img
                  alt=""
                  src={HexPng}
                  width="45px"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <div
                  style={{
                    background: "#615DFA",
                    position: "absolute",
                    width: "37px",
                    height: "38px",
                    margin: 5,
                    top: 0,
                    left: 0,
                    clipPath:
                      "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                    transform: "rotate(90deg)",
                  }}
                ></div>
                <img
                  alt=""
                  src={SmallHexPng}
                  width="28px"
                  style={{
                    position: "absolute",
                    left: "53%",
                    transform: "translateY(25px)",
                  }}
                />
                <Typography
                  style={{
                    position: "absolute",
                    fontSize: 12,
                    color: "white",
                    left: "70%",
                    top: "62%",
                    fontWeight: 600,
                  }}
                >
                  {item.rating}
                </Typography>
              </div>
              <Typography style={{ marginLeft: 20 }}>{item.msg}</Typography>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfoTabs;
