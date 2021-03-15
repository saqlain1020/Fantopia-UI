import React from "react";
import { Button, CircularProgress } from "@material-ui/core";

const CustomButton = ({ loading, ...props }) => {
  return (
    <div>
      <Button {...props}>
        {loading && <CircularProgress color="inherit" />}
        {!loading && props.children}
      </Button>
    </div>
  );
};

export default CustomButton;
