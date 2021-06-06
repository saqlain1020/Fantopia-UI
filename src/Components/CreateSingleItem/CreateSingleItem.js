import React, { useState, useEffect } from "react";
import {
  Divider,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import CreationCard from "../CreationCard/CreationCard";
import CustomButton from "../CustomButton/CustomButton";
import SmileAddIco from "src/Assets/Icons/smileadd_dark.png";
import LogoLight from "src/Assets/Images/logo_light.png";
import LogoDark from "src/Assets/Images/logo_filled.png";
import IOSSwitch from "../IOSSwitch/IOSSwitch";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { useCreateCollectionModal } from "../../Hooks/useModal";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import TimelapseOutlinedIcon from "@material-ui/icons/TimelapseOutlined";
import AllInclusiveOutlinedIcon from "@material-ui/icons/AllInclusiveOutlined";
import { Autocomplete } from "@material-ui/lab";
import DateTimePicker from "react-datetime-picker";
import { useCollectionList } from "src/Hooks/useCollectionList";
import { COLLECTION_TYPE } from "src/Config/enums";
import { useMintTokenModal } from "src/Hooks/useModal";
import { FANTOPIA_COLLECTION } from "../../Config/contracts";
import { useWeb3 } from "@react-dapp/wallet";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    borderRadius: 15,
    background: theme.palette.primary.dark,
    padding: 16,
    boxShadow: theme.customShadows.light,
    width: "80%",
    maxWidth: 1000,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  left: {
    borderRight: `1px solid ${theme.customColors.veryLightBlack}`,
    [theme.breakpoints.down("sm")]: {
      borderRight: "none",
    },
  },
  right: {
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  select: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    "&::before": {
      display: "none",
    },
  },
  btns: {
    margin: 5,
    height: 70,
    fontWeight: 600,
    fontSize: 12,
    "& div": {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  switches: {
    display: "flex",
    justifyContent: "space-between",
  },
  createBtn: {
    color: theme.customColors.white,
    borderRadius: 15,
    width: "calc(100% - 20px)",
    marginRight: "auto",
    height: 60,
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  dropArea: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    flexFlow: "column",
    justifyContent: "center",
    color: theme.customColors.veryLightBlack,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    boxShadow: theme.customShadows.medium,
    cursor: "pointer",
  },
  dropHeading: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
  chooseFileLabel: {
    cursor: "pointer",
  },
  // https://stackoverflow.com/questions/572768/styling-an-input-type-file-button
  fileInput: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: "0",
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
      border: "none",
    },
  },
}));

const CreateSingleItem = () => {
  const classes = useStyles();
  const { openModal } = useCreateCollectionModal();
  const { userCollections, celebrityCollections } = useCollectionList();
  const { openModal: openMintModal } = useMintTokenModal();
  const [media, setMedia] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [royalty, setRoyalty] = useState(0);
  const [category, setCategory] = useState("artwork");

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [putOnSale, setPutOnSale] = useState(false);
  const [saleBtn, setSaleBtn] = React.useState(1);
  const [collectionAddress, setCollectionAddress] =
    useState(FANTOPIA_COLLECTION);
  const [selectedCollection, setSelectedCollection] = useState(
    COLLECTION_TYPE.NATIVE
  );

  const { account } = useWeb3();

  const handleFilePick = async (e) => {
    const filename = e.target.files[0];
    if (filename) {
      setMedia(URL.createObjectURL(filename));
    }
  };

  const handleCreateItem = (e) => {
    e.preventDefault();
    if (!media) {
      alert("Please Select NFT media!");
      return;
    }
    const data = {
      name,
      description,
      image: media,
      address: collectionAddress,
      fees: royalty ? [{ recipient: account, value: royalty }] : [],
    };
    console.log(data);
    openMintModal(data);
  };

  return (
    <form className={classes.root} onSubmit={handleCreateItem}>
      <div className={classes.left}>
        <CreationCard media={media} />
        <Divider />
        <div style={{ padding: 10 }}>
          <div
            onClick={() => setPutOnSale(!putOnSale)}
            className={classes.switches}
          >
            <Typography variant="h6">Put on Sale</Typography>
            <IOSSwitch />
          </div>
          <Grid container spacing={1}>
            {putOnSale && (
              <>
                <Grid item xs={4}>
                  <div
                    className={
                      saleBtn === 1 ? classes.saleBtnsActive : classes.saleBtns
                    }
                    onClick={() => setSaleBtn(1)}
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
                      saleBtn === 2 ? classes.saleBtnsActive : classes.saleBtns
                    }
                    onClick={() => setSaleBtn(2)}
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
                      saleBtn === 3 ? classes.saleBtnsActive : classes.saleBtns
                    }
                    onClick={() => setSaleBtn(3)}
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
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <Select
                          variant="standard"
                          color="secondary"
                          defaultValue="bnb"
                          className={classes.select}
                        >
                          <MenuItem value="bnb">BNB</MenuItem>
                        </Select>
                      ),
                    }}
                    variant="outlined"
                    placeholder="Enter price for one piece"
                  />
                  <Typography>
                    Service Fee <b>2.5%</b> You will recieve <b>0.29 BNB</b>
                  </Typography>
                </Grid>
              </>
            )}
            {saleBtn === 2 && (
              <>
                <Grid item xs={12}>
                  <Typography>
                    <b>Starting date </b>{" "}
                    <small> (Don't pick to start after listing)</small>
                  </Typography>
                  <DateTimePicker
                    value={startDate}
                    onChange={(e) => setStartDate(e)}
                    className={classes.datePicker}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <b>Expiration date </b>{" "}
                  </Typography>
                  <DateTimePicker
                    value={endDate}
                    onChange={(e) => setEndDate(e)}
                    className={classes.datePicker}
                  />
                </Grid>
              </>
            )}
          </Grid>
          {/* <div className={classes.switches}>
            <Typography variant="h6">Unlock upon purchase</Typography>
            <IOSSwitch />
          </div> */}
          <div className={classes.switches}>
            <Typography variant="h6">Royalty (Sug: 5-30%)</Typography>
            <TextField
              select
              defaultValue="disabled"
              style={{ width: 70 }}
              value={royalty}
              onClick={(e) => setRoyalty(e.target.value)}
              required
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="30">30</MenuItem>
            </TextField>
            {/* <TextField
              value={royalty}
              onChange={(e) => setRoyalty(e.target.value)}
              style={{ width: 70 }}
              variant="outlined"
              InputProps={{
                endAdornment: <Typography>%</Typography>,
                style: {
                  height: 30,
                },
              }}
            /> */}
          </div>
        </div>
        <Divider />
        <label for="file-upload" className={classes.chooseFileLabel}>
          <div className={`flex ${classes.dropArea}`}>
            <ImageOutlinedIcon />
            <Typography variant="h6" className={classes.dropHeading}>
              <input
                className={classes.fileInput}
                id="file-upload"
                type="file"
                name="file"
                onChange={handleFilePick}
              />
              Choose File
            </Typography>
            <Typography style={{ fontSize: 12, fontWeight: 600 }}>
              PNG,GIF,WEBP,MP4 or MP3, Max 30mb
            </Typography>
          </div>
        </label>
        <CustomButton
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.createBtn}
        >
          Create Item
        </CustomButton>
      </div>
      <div className={classes.right}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          <b>Create a single NFT item</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              placeholder="Item Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              variant="outlined"
              defaultValue="disabled"
              fullWidth
              value={category}
              onClick={(e) => setCategory(e.target.value)}
              required
            >
              {/* <MenuItem value="disabled" disabled>
                Category
              </MenuItem> */}
              <MenuItem value="artwork">Artwork</MenuItem>
              <MenuItem value="fancam">FanCam</MenuItem>
            </TextField>
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              variant="outlined"
              placeholder="properties i.e. size (Optional)"
              fullWidth
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              multiline
              rows={5}
              variant="outlined"
              placeholder="Items Description"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              variant="outlined"
              placeholder="Digital key, code to redeem or link to a file for buyer"
              fullWidth
            />
          </Grid> */}
          <Grid item xs={12} sm={12} md={6}>
            <Autocomplete
              onChange={(e, value) => {
                setCollectionAddress(value?.address);
              }}
              options={celebrityCollections}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="secondary"
                  placeholder="Choose collection"
                  variant="outlined"
                  disabled={selectedCollection !== COLLECTION_TYPE.CELEB}
                  onClick={() => setSelectedCollection(COLLECTION_TYPE.CELEB)}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              select
              variant="outlined"
              defaultValue="disabled"
              fullWidth
              disabled={selectedCollection !== COLLECTION_TYPE.USER}
              onClick={(e, value) => {
                setSelectedCollection(COLLECTION_TYPE.USER);
              }}
              onChange={(e) => setCollectionAddress(e.target.value?.address)}
            >
              <MenuItem value="disabled" disabled>
                Choose Your Collection
              </MenuItem>
              {userCollections.map((e) => (
                <MenuItem value={e.address}>{e.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} className="flex">
            <CustomButton
              variant="outlined"
              color="secondary"
              className={classes.btns}
              onClick={() => openModal()}
            >
              <div>
                <img src={SmileAddIco} width="20px" alt="" />
                <span>Create BEP-721</span>
              </div>
            </CustomButton>
            <CustomButton
              variant={
                selectedCollection === COLLECTION_TYPE.NATIVE
                  ? "contained"
                  : "outlined"
              }
              color="secondary"
              className={classes.btns}
              onClick={() => {
                setCollectionAddress(FANTOPIA_COLLECTION);
                setSelectedCollection(COLLECTION_TYPE.NATIVE);
              }}
            >
              <div>
                <img
                  src={
                    selectedCollection === COLLECTION_TYPE.NATIVE
                      ? LogoLight
                      : LogoDark
                  }
                  width="30px"
                  alt=""
                />
                <span>Fantopia</span>
              </div>
            </CustomButton>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default CreateSingleItem;
