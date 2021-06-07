import React from "react";
import { makeStyles } from "@material-ui/core";
import ProductInfo from "src/Components/ProductInfo/ProductInfo";
import ProductInfoBar from "src/Components/ProductInfoBar/ProductInfoBar";
import { useParams } from "react-router-dom";
import { useMetadata } from "src/Hooks/useToken";
import { useOrder } from "src/Hooks/useOrder";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    marginTop: 20,
    marginBottom: 20,
    gridTemplateColumns:
      "minmax(10px,1fr) minmax(min-content,1400px) minmax(10px,1fr)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

const Product = () => {
  const classes = useStyles();
  const { address, tokenId } = useParams();
  const { metadata, loading } = useMetadata(address, tokenId);
  const { order } = useOrder(address, tokenId);
  return (
    <div className={classes.container}>
      <div></div>
      <div className={classes.grid}>
        <div style={{ margin: 5 }}>
          <ProductInfo media={metadata?.image} order={order} />
        </div>
        <div style={{ margin: 5 }}>
          <ProductInfoBar metadata={metadata} order={order} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Product;
