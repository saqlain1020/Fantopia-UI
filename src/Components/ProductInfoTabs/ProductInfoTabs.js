import React, { useState } from "react";
import {
  CircularProgress,
  Divider,
  makeStyles,
  Tab,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import UserName from "../UserName/UserName";
import { useOrderHistory } from "src/Hooks/useOrderHistory";
import { convertToLowerValue, getTokenSymbol } from "src/Utils";
import { useParams } from "react-router-dom";
import { useComments, usePostComment } from "src/Hooks/useSocialInfo";
import CustomButton from "../CustomButton/CustomButton";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
    // background: theme.customColors.white,
    boxShadow: theme.customShadows.light,
    padding: 20,
    color: theme.customColors.whiteBtn,
  },
  tabsContainer: {
    display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  tabActive: {
    borderBottom: "none !important",
    background: `${theme.palette.secondary.main} !important`,
  },
  comment: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px 10px",
  },
  pagination: {
    fontWeight: 700,
    color: theme.customColors.lightBlack,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
}));

const commentData = [
  { msg: "#131/271 on sale for $14000000.00 30m ago", rating: 23 },
  { msg: "#131/271 on sale for $14000000.00 30m ago", rating: 20 },
  { msg: "#131/271 on sale for $14000000.00 30m ago", rating: 33 },
];

const ProductInfoTabs = ({ order }) => {
  const classes = useStyles();
  const [tab, setTab] = useState(1);
  const [comment, setComment] = useState("");
  const { address, tokenId } = useParams();
  const { orders, loading } = useOrderHistory(address, tokenId);

  const { comments, loadingComments, fetchComments } = useComments(
    address,
    tokenId
  );
  const { postComment, postingComment } = usePostComment(address, tokenId);

  const handleOnSend = async () => {
    if (postingComment) return;
    await postComment(comment);
    setComment("");
    await fetchComments();
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <Tab
          style={{
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(0,0,0,0.05)",
          }}
          fullWidth
          label="Bids"
          className={tab === 0 ? classes.tabActive : ""}
          onClick={() => setTab(0)}
        />
        <Tab
          style={{
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(0,0,0,0.05)",
          }}
          fullWidth
          label="Comments"
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
          label="Owner History"
          className={tab === 2 ? classes.tabActive : ""}
          onClick={() => setTab(2)}
        />
        {/* <Tab
          style={{
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(0,0,0,0.05)",
          }}
          fullWidth
          label="Transaction History"
          className={tab === 3 ? classes.tabActive : ""}
          onClick={() => setTab(3)}
        /> */}
      </div>
      <div>
        {tab === 1 && (
          <>
            {order?.bids?.map((item, index) => (
              <div key={index}>
                <div className={classes.comment}>
                  <div style={{ position: "relative", width: 45, height: 45 }}>
                    <UserName noName level={item.rating} />
                  </div>
                  <Typography style={{ marginLeft: 20 }}>
                    {`Bid of ${convertToLowerValue(
                      item.order.basePrice
                    )} ${getTokenSymbol(item.order.paymentToken)} by ${
                      item.order.maker
                    }`}
                  </Typography>
                </div>
                <Divider />
              </div>
            ))}
          </>
        )}
        {tab === 1 &&
          (loadingComments ? (
            <CircularProgress />
          ) : (
            <>
              {comments?.map((item, index) => (
                <div key={index}>
                  <div className={classes.comment}>
                    <div
                      style={{ position: "relative", width: 45, height: 45 }}
                    >
                      <UserName name={item.userName} />
                    </div>
                    <Typography style={{ marginTop: 20, marginLeft: 20 }}>
                      {item.comment}
                    </Typography>
                  </div>
                  <Divider />
                </div>
              ))}
              <TextField
                multiline
                rows={2}
                variant="standard"
                color="secondary"
                placeholder="Comment"
                style={{ marginTop: 10 }}
                fullWidth
                disabled={postingComment}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div>
                <CustomButton
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: 20 }}
                  onClick={handleOnSend}
                  disabled={postingComment}
                  loading={postingComment}
                >
                  Send
                </CustomButton>
              </div>
            </>
          ))}
        {tab === 3 && (
          <>
            {loading ? (
              <CircularProgress />
            ) : (
              orders?.results?.map((item, index) => (
                <div key={index}>
                  <div className={classes.comment}>
                    <div
                      style={{ position: "relative", width: 45, height: 45 }}
                    >
                      <UserName noName level={item.rating} />
                    </div>
                    <Typography style={{ marginLeft: 20 }}>
                      {item.order.maker}
                    </Typography>
                  </div>
                  <Divider />
                </div>
              ))
            )}
          </>
        )}

        <Typography className={classes.pagination}>
          <ChevronLeftIcon />
          Displaying 1 of 20 of 20,000 <ChevronRightIcon />
        </Typography>
      </div>
    </div>
  );
};

export default ProductInfoTabs;
