import React, { useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import ImageUpload from "./ImageUpload";
import { useCreateCollectionStepsModal } from "../../Hooks/useModal";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    maxWidth: 350,
  },
  btn: {
    borderRadius: 360,
  },
  error: {
    color: "red",
  },
}));

const CreateCollection = ({ payload }) => {
  const classes = useStyles();
  const { openModal } = useCreateCollectionStepsModal();

  const [image, setImage] = React.useState(null);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [royalty, setRoyalty] = useState("1");
  const [shortUrl, setShortUrl] = useState("");
  const [symbol, setSymbol] = useState("");

  const [error, setError] = useState(undefined);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (name !== undefined && symbol !== undefined && image !== undefined) {
      openModal(
        { name, symbol, royalty, image: file, shortUrl, description },
        payload // payload is the function to reload collections
      );
    } else {
      setError("Fill out the form properly!");
    }
  };
  console.log(payload);
  return (
    <div className={classes.root}>
      <form onSubmit={handleCreate}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          <b>Collection</b>
        </Typography>
        {/* image choose */}
        <ImageUpload
          required={true}
          image={image}
          setImage={setImage}
          setFile={setFile}
        />
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12}>
            <Typography>
              <b>Display name </b>
              <small>(required)</small>
            </Typography>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              size="small"
              // variant="outlined"
              placeholder="Spread some words about your token collection"
              multiline
              rows={3}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ marginBottom: "10px" }}>
              <b>Royalty </b>
              <small>(optional)</small>
            </Typography>
            <Autocomplete
              options={["1", "2", "5", "10", "15", "20", "30"]}
              getOptionLabel={(option) => option}
              value={royalty}
              onChange={(e, value) => {
                setRoyalty(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="secondary"
                  placeholder="Choose Royalty"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Short url </b>
              <small></small>
            </Typography>
            <TextField
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
              size="small"
              // variant="outlined"
              placeholder="Enter short url phrase"
              fullWidth
            />
            <Typography>
              <small>Will be used as public URL</small>
            </Typography>
          </Grid>
          {error ? <small className={classes.error}>{error}</small> : null}
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              fullWidth
              className={classes.btn}
            >
              Create Collection
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateCollection;
