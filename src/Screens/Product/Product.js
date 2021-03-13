import React from "react";
import { makeStyles } from "@material-ui/core";
import ProductInfo from "src/Components/ProductInfo/ProductInfo";
import ProductInfoBar from "src/Components/ProductInfoBar/ProductInfoBar";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    marginTop: 20,
    gridTemplateColumns:
      "minmax(10px,1fr) minmax(min-content,1400px) minmax(10px,1fr)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

const Product = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div></div>
      <div className={classes.grid}>
        <div style={{ margin: 5 }}>
          <ProductInfo />
        </div>
        <div style={{ margin: 5 }}>
          <ProductInfoBar />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Product;
