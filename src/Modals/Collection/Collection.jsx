import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import ImageUpload from "./ImageUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    maxWidth: 350,
  },
  btn:{
      borderRadius:360
  }
}));

const Collection = () => {
  const classes = useStyles();
  const [image, setImage] = React.useState(null);

  return (
    <div className={classes.root}>
      <form>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          <b>Collection</b>
        </Typography>
        {/* image choose */}
        <ImageUpload required={true} image={image} setImage={setImage} />
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12}>
            <Typography>
              <b>Display name </b>
              <small>(required)</small>
            </Typography>
            <TextField
              size="small"
              // variant="outlined"
              placeholder="Enter token name"
              required
              fullWidth
            />
            <Typography>
              <small>Token name cannot be changed in future</small>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Symbol </b>
              <small>(required)</small>
            </Typography>
            <TextField
              size="small"
              // variant="outlined"
              placeholder="Enter token symbol"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Description </b>
              <small>(optional)</small>
            </Typography>
            <TextField
              size="small"
              // variant="outlined"
              placeholder="Spread some words about your token collection"
              multiline
              rows={3}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Short url </b>
              <small></small>
            </Typography>
            <TextField
              size="small"
              // variant="outlined"
              placeholder="Enter short url phrase"
              fullWidth
            />
            <Typography>
              <small>Will be used as public URL</small>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" variant="contained" type="submit" fullWidth className={classes.btn}>
              Create Collection
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Collection;
