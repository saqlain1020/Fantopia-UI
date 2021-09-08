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
import SmileAddIcoDark from "src/Assets/Icons/smileadd_dark.png";
import SmileAddIcoLight from "src/Assets/Icons/smileadd.png";
import LogoLight from "src/Assets/Images/logo_light.png";
import LogoDark from "src/Assets/Images/logo_filled.png";
import IOSSwitch from "../IOSSwitch/IOSSwitch";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import {
  useCreateCollectionModal,
  useLoadingModal,
} from "../../Hooks/useModal";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import TimelapseOutlinedIcon from "@material-ui/icons/TimelapseOutlined";
import AllInclusiveOutlinedIcon from "@material-ui/icons/AllInclusiveOutlined";
import { Autocomplete } from "@material-ui/lab";
import DateTimePicker from "react-datetime-picker";
import { useCollectionList } from "src/Hooks/useCollection";
import { COLLECTION_TYPE } from "src/Config/enums";
import { useMintTokenModal } from "src/Hooks/useModal";
import { NATIVE_ERC721_ADDRESS, ZERO_ADDRESS } from "../../Config/contracts";
import { useWeb3 } from "@react-dapp/wallet";
import { useHistory } from "react-router";
import tokenList from "src/Config/paymentTokens.json";
import { NATIVE_ERC721_NAME } from "src/Config/constants";
import PutOnSale from "../PutOnSale/PutOnSale";
import { useRequestMintApproval } from "src/Hooks/useMintToken";
import { useLang } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";

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
      background: theme.palette.primary.mainWhite,
      border: "none",
    },
  },
}));

const CreateSingleItem = () => {
  const lang = useLang();
  const classes = useStyles();
  const { openModal } = useCreateCollectionModal();
  const {
    userCollections,
    celebrityCollections,
    fetchUserCollection,
    loading,
  } = useCollectionList();
  const { openModal: openMintModal } = useMintTokenModal();
  const [media, setMedia] = useState(null);
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [royalty, setRoyalty] = useState(0);
  const [category, setCategory] = useState("digitalArt");

  const [saleState, setSaleState] = React.useState({});
  const [collectionAddress, setCollectionAddress] = useState(
    NATIVE_ERC721_ADDRESS
  );
  const [selectedCollection, setSelectedCollection] = useState(
    COLLECTION_TYPE.NATIVE
  );
  const [collectionName, setCollectionName] = useState("Fantopia");
  const { sending, sendRequest } = useRequestMintApproval(collectionAddress);

  const history = useHistory();
  const { account } = useWeb3();

  useLoadingModal(loading);

  const handleFilePick = async (e) => {
    const filename = e.target.files[0];
    if (filename) {
      setMedia(URL.createObjectURL(filename));
      setFile(filename);
    }
  };

  const handleCreateItem = async (e) => {
    e.preventDefault();
    if (!media) {
      alert(LOCALE.SELECT_NFT_MEDIA[lang]);
      return;
    }
    const metadata = {
      name,
      description,
      image: file,
      address: collectionAddress,
      fees:
        royalty && royalty !== "0"
          ? [{ recipient: account, value: royalty }]
          : [],
      category: category,
      minter: account,
      owner: account,
      shouldSignMint: COLLECTION_TYPE.NATIVE === selectedCollection,
    };

    if (selectedCollection === COLLECTION_TYPE.CELEB) {
      const tokenId = await sendRequest(metadata);
      history.push(`/collection/${collectionAddress}/${tokenId}`);
    } else {
      let order;
      if (saleState.putOnSale) {
        order = {
          name,
          category,
          collectionName,
          verified: false,
          address: collectionAddress,
          account,
          saleKind: saleState.saleKind,
          price: saleState.price,
          paymentToken:
            saleState.currency === "BNB" ? null : saleState.currency,
          listingTime:
            !saleState.startDate || saleState.startDate === ""
              ? parseInt(Date.now() / 1000)
              : parseInt(saleState.startDate.getTime() / 1000),
          expirationTime:
            !saleState.endDate || saleState.endDate === ""
              ? 0
              : parseInt(saleState.endDate.getTime() / 1000),
        };
      }
      console.log({ metadata, order });
      openMintModal({ metadata, order }, (tokenId) => {
        if (tokenId)
          history.push(`/collection/${collectionAddress}/${tokenId}`);
      });
    }
  };
  return (
    <form className={classes.root} onSubmit={handleCreateItem}>
      <div className={classes.left}>
        <CreationCard
          order={{
            order: {
              expirationTime:
                !saleState.endDate || saleState.endDate === ""
                  ? 0
                  : parseInt(saleState.endDate.getTime() / 1000),
            },
          }}
          data={{
            media,
            name,
            category,
            price: saleState.price,
            currency: saleState.currency,
          }}
        />
        <Divider />
        <div style={{ padding: 10 }}>
          <PutOnSale
            disabled={selectedCollection === COLLECTION_TYPE.CELEB}
            getState={setSaleState}
          />
          {/* <div className={classes.switches}>
            <Typography variant="h6">Unlock upon purchase</Typography>
            <IOSSwitch />
          </div> */}
          <div className={classes.switches}>
            <Typography variant="h6">{LOCALE.ROYALTY[lang]}</Typography>
            <TextField
              select
              defaultValue="0"
              style={{ width: 70 }}
              value={royalty}
              onClick={(e) => setRoyalty(e.target.value)}
              required
            >
              <MenuItem value="0">{LOCALE.ZERO[lang]}</MenuItem>
              <MenuItem value="1">{LOCALE.ONE[lang]}</MenuItem>
              <MenuItem value="2">{LOCALE.TWO[lang]}</MenuItem>
              <MenuItem value="5">{LOCALE.FIVE[lang]}</MenuItem>
              <MenuItem value="10">{LOCALE.TEN[lang]}</MenuItem>
              <MenuItem value="15">{LOCALE.FIFTEEN[lang]}</MenuItem>
              <MenuItem value="20">{LOCALE.TWENTY[lang]}</MenuItem>
              <MenuItem value="25">{LOCALE.TWENTY_FIVE[lang]}</MenuItem>
              <MenuItem value="30">{LOCALE.THIRTY[lang]}</MenuItem>
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
              {LOCALE.CHOOSE_FILE[lang]}
            </Typography>
            <Typography style={{ fontSize: 12, fontWeight: 600 }}>
              PNG,GIF,WEBP,MP4 or MP3, Max 30mb
            </Typography>
          </div>
        </label>
        <CustomButton
          wallet
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.createBtn}
          loading={sending}
        >
          {LOCALE.CREATE_ITEM[lang]}
        </CustomButton>
      </div>
      <div className={classes.right}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          <b>{LOCALE.CREATE_SINGLE_NFT[lang]}</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              placeholder={LOCALE.ITEM_NAME[lang]}
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
              defaultValue="digitalArt"
              fullWidth
              value={category}
              onClick={(e) => setCategory(e.target.value)}
              required
            >
              {/* <MenuItem value="disabled" disabled>
                Category
              </MenuItem> */}
              <MenuItem value="digitalArt">
                {LOCALE.DIGITAL_ART[lang]}
              </MenuItem>
              <MenuItem value="photos">{LOCALE.PHOTOS[lang]}</MenuItem>
              <MenuItem value="videos">{LOCALE.VIDEOS[lang]}</MenuItem>
              <MenuItem value="music">{LOCALE.MUSIC[lang]}</MenuItem>
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
              placeholder={LOCALE.ITEM_DES[lang]}
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
                setCollectionName(value?.name);
              }}
              options={celebrityCollections}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="secondary"
                  placeholder={LOCALE.CHOOSE_CELEB_COLLECTION[lang]}
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
              onClick={(e, value) => {
                setSelectedCollection(COLLECTION_TYPE.USER);
              }}
              disabled={selectedCollection !== COLLECTION_TYPE.USER}
              onChange={(e) => {
                console.log(e.target.value);
                setCollectionAddress(e.target.value.address);
                setCollectionName(e.target.value.name);
              }}
            >
              <MenuItem value="disabled" disabled>
                {LOCALE.CHOOSE_YOUR_COLLECTION[lang]}
              </MenuItem>
              {userCollections.map((e) => (
                <MenuItem value={e}>{e.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} className="flex">
            <CustomButton
              variant="outlined"
              color="secondary"
              className={classes.btns}
              onClick={() =>
                openModal(() => () => {
                  console.log("RELOADING...");
                  fetchUserCollection();
                })
              }
            >
              <div>
                <img src={SmileAddIcoDark} width="20px" alt="" />
                <span>{LOCALE.CREATE_BEP721[lang]}</span>
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
                setCollectionAddress(NATIVE_ERC721_ADDRESS);
                setSelectedCollection(COLLECTION_TYPE.NATIVE);
                setCollectionName(NATIVE_ERC721_NAME);
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
                <span>{NATIVE_ERC721_NAME}</span>
              </div>
            </CustomButton>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default CreateSingleItem;
