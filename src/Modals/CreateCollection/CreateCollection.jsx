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
import { useLang } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";

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
  const lang = useLang();
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
      setError(LOCALE.FILL_FORM[lang]);
    }
  };
  console.log(payload);
  return (
    <div className={classes.root}>
      <form onSubmit={handleCreate}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          <b>{LOCALE.CREATE_COLLECTION[lang]}</b>
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
              <b>{LOCALE.DISPLAY_NAME[lang]} </b>
              <small>({LOCALE.REQUIRED[lang]})</small>
            </Typography>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="small"
              // variant="outlined"
              placeholder={LOCALE.DISPLAY_NAME_HINT[lang]}
              required
              fullWidth
            />
            <Typography>
              <small>{LOCALE.NAME_CANNOT_CHANGE[lang]}</small>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>{LOCALE.SYMBOL[lang]} </b>
              <small>({LOCALE.REQUIRED[lang]})</small>
            </Typography>
            <TextField
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              size="small"
              // variant="outlined"
              placeholder={LOCALE.SYMBOL_HINT[lang]}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>{LOCALE.DESCRIPTION[lang]} </b>
              <small>({LOCALE.OPTIONAL[lang]})</small>
            </Typography>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              size="small"
              // variant="outlined"
              placeholder={LOCALE.DESCRIPTION_HINT[lang]}
              multiline
              rows={3}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ marginBottom: "10px" }}>
              <b>{LOCALE.ROYALTY[lang]} </b>
              <small>({LOCALE.OPTIONAL[lang]})</small>
            </Typography>
            <Autocomplete
              options={["0", "1", "2", "5", "10", "15", "20", "30"]}
              getOptionLabel={(option) => option}
              value={royalty}
              onChange={(e, value) => {
                setRoyalty(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="secondary"
                  placeholder={LOCALE.CHOOSE_ROYALTY[lang]}
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>{LOCALE.SHORT_URL[lang]}</b>
              <small></small>
            </Typography>
            <TextField
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
              size="small"
              // variant="outlined"
              placeholder={LOCALE.SHORT_URL_DES[lang]}
              fullWidth
            />
            <Typography>
              <small>{LOCALE.SHORT_URL_HINT[lang]}</small>
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
              {LOCALE.CREATE_COLLECTION[lang]}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateCollection;
