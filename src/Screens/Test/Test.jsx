import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import InstagramLogin from "react-instagram-login";
import Vid from "src/Assets/Videos/vid.mp4";
import Audio from "src/Assets/Audio/kuch.mp3";
import WaveBg from "src/Assets/Images/audio-wave.png";


const useStyles = makeStyles((theme) => ({
  root: {}, bg: {
    width: "calc(100% - 16px)",
    objectFit: "cover",
    backgroundColor: theme.palette.secondary.vibrant,
    backgroundImage: `url(${WaveBg})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    height: "90vh",
    maxHeight: 750,
    borderRadius: 15,
  },
}));

const appId = "4112240085533620";

const Test = () => {
  const classes = useStyles();
  const handleClick = () => {
    alert("click");
    window.location = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=google.com&scope=user_profile,user_media&response_type=code`
  };
  const responseInstagram = (response) => {
    console.log(response);
  };
  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Click here
      </Button>
      <InstagramLogin
        clientId={appId}
        buttonText="Login"
        onSuccess={responseInstagram}
        onFailure={responseInstagram}
      />
      <video controls={true} controlsList="nodownload" autoPlay loop src={Audio}className={classes.bg}/>

    </div>
  );
};

export default Test;
