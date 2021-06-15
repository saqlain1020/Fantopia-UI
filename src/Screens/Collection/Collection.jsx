import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Tabs,
  Tab,
  Grid,
} from "@material-ui/core";
import UserName from "./../../Components/UserName/UserName";
import CopyAddress from "src/Components/CopyAddress/CopyAddress";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CreationCard from "src/Components/CreationCard/CreationCard";
import { useParams } from "react-router-dom";
import { useCollection, useCollectionTokens } from "src/Hooks/useCollection";
import image from "src/Assets/Images/ad-1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.dark,
    borderRadius: 20,
    // overflow:"hidden",
    paddingBottom: 20,
  },
  bg: {
    background: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 250,
    marginBottom: 50,
  },
  value: {
    textAlign: "center",
    fontWeight: 700,
    color: theme.customColors.lightBlack,
  },
  para: {
    textAlign: "center",
    fontWeight: 700,
    color: theme.customColors.veryLightBlack,
    marginBottom: 20,
  },
  tabs: {
    marginTop: 20,
    marginBottom: 20,
    background: theme.palette.primary.dark,
    maxWidth: 1150,
    color: theme.palette.secondary.main,
    marginRight: "auto",
    marginLeft: "auto",

    borderRadius: 10,
  },
  dropIcon: {
    transform: "translateY(5px) scale(1.4)",
    marginRight: 5,
  },
}));

const Collection = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const { address } = useParams();
  const { collection, loading: loadingCollection } = useCollection(address);
  const { tokens, loading } = useCollectionTokens(address);

  return (
    <div className={classes.root}>
      <div className={classes.bg}>
        <div
          style={{
            position: "relative",
            width: 45,
            height: 45,
            transform: "scale(3)",
          }}
        >
          <UserName noName media={collection?.image} />
        </div>
      </div>
      <Container maxWidth="lg">
        <Typography variant="h4" className={classes.value}>
          {collection?.name}
        </Typography>
        <CopyAddress
          text={`${collection?.address.substring(
            0,
            6
          )}...${collection?.address.substring(
            collection?.address.length - 6,
            collection?.address.length
          )}`}
        />
        <Typography
          className={classes.para}
          style={{ maxWidth: 700, margin: "auto" }}
        >
          {collection?.description}
        </Typography>
      </Container>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        className={classes.tabs}
        indicatorColor="secondary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab icon="All" />
        <Tab icon="On Sale" />
        <Tab icon="On Auction" />
      </Tabs>
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          {tokens?.map((e) => {
            if (e.image.startsWith("http://res.cloudinary.com"))
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <CreationCard data={{ ...e, media: e.image }} />
                </Grid>
              );
          })}

          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              <ChevronLeftIcon className={classes.dropIcon} />{" "}
              {/* <b>Displaying 1 of 20 of 2,000</b>{" "} */}
              <ChevronRightIcon className={classes.dropIcon} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Collection;
