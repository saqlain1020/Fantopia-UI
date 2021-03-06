import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useLang } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    objectFit: "cover",
    background: theme.palette.secondary.main,
  },
  btn: {
    borderRadius: 360,
    marginTop: 10,
  },
}));

const ImageUpload = ({ image, setImage, setFile, required }) => {
  const lang = useLang();
  const classes = useStyles();
  const ref = React.createRef();

  const handleClick = () => {
    ref.current.click();
  };

  const fileInputEvent = (e) => {
    let file = e.target.files[0];
    setFile(file);
    setImage(URL.createObjectURL(file));
  };

  React.useEffect(() => {
    ref.current.onchange = fileInputEvent;
  }, [ref.current]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4} className="flex">
          <img
            src={image}
            width="100px"
            height="100px"
            className={classes.img}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography>{LOCALE.RECOMMENDED_IMAGE_TEXT[lang]}</Typography>
          <Button
            color="secondary"
            variant="contained"
            className={classes.btn}
            onClick={handleClick}
          >
            {LOCALE.CHOOSE_FILE[lang]}
          </Button>
        </Grid>
      </Grid>
      <input
        required={required}
        style={{ display: "block", height: 1, opacity: 0 }}
        type="file"
        accept="image/*"
        ref={ref}
      />
    </div>
  );
};

export default ImageUpload;
