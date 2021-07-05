import React from "react";
import {
  Badge,
  CircularProgress,
  IconButton,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Noti from "./Noti";
import { useNotifications } from "src/State/hooks";

const useStyles = makeStyles((theme) => ({
  notiContainer: {
    padding: "16px 20px",
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main,
  },
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
  },
  allNotiBtn: {
    color: theme.customColors.white,
    background: theme.palette.secondary.dark,
    padding: "15px 0px",
    cursor: "pointer",
  },
  notiScroll: {
    maxHeight: 300,
    marginTop: 10,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: "360px",
    },
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const { notifications, loading } = useNotifications();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Badge variant="dot" color="primary">
          {loading && <CircularProgress />}
          <NotificationsNoneOutlinedIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            borderRadius: 15,
          },
        }}
      >
        <>
          <div className={classes.notiContainer}>
            <div className={`flex ${classes.headingContainer}`}>
              <Typography variant="h6">
                <b>Notifications</b>
              </Typography>
              <div className={`flex ${classes.headingContainer}`}>
                <Typography>Mark all as read&nbsp;</Typography>
                <Typography>Settings</Typography>
              </div>
            </div>
            <div className={classes.notiScroll}>
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="love"
              />
              <Noti userName="Nick Grisson" variant="photo" />
              <Noti userName="Nick Grisson" variant="status" />
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="love"
              />
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="like"
              />
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="love"
              />
              <Noti userName="Nick Grisson" variant="reaction" reaction="sad" />
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="love"
              />
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="angry"
              />
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="love"
              />
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="love"
              />
              <Noti userName="Nick Grisson" variant="status" reaction="love" />
              <Noti userName="Nick Grisson" variant="reaction" />
              <Noti userName="Nick Grisson" variant="photo" />
              <Noti
                userName="Nick Grisson"
                variant="reaction"
                reaction="love"
              />
            </div>
          </div>
          <div className={`flex ${classes.allNotiBtn}`}>
            <Typography style={{ fontWeight: 500 }}>
              View all Notifications
            </Typography>
          </div>
        </>
      </Popover>
    </div>
  );
};

export default Notifications;
