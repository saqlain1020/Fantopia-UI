import React from "react";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    marginBottom: 20,
  },
  dropIcon: {
    transform: "translateY(5px) scale(1.4)",
    marginRight: 5,
  },
  grid: {
    marginTop: 10,
    maxWidth: 1300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  productsGrid: {
    display: "grid",
    marginTop: 20,
    gridTemplateColumns: "350px 1fr",
    gap: 10,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

const PageSelector = ({ pages, selectedPage, selectPage }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" align="center">
        <Button
          color="secondary"
          style={{
            margin: "auto",
            fontSize: 30,
            paddingBottom: 15,
          }}
          onClick={() => {
            if (selectedPage >= 2) selectPage((_p) => _p - 1);
          }}
        >
          <ChevronLeftIcon className={classes.dropIcon} />
        </Button>
        <b>
          {pages < 10 ? (
            Array.from({ length: pages }, (_, i) => (
              <Button
                color="secondary"
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: selectedPage === i + 1 ? "white" : "inherit",
                  background: selectedPage === i + 1 ? "black" : "inherit",
                }}
                onClick={() => selectPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))
          ) : (
            <>
              {Array.from({ length: 5 }, (_, i) => (
                <Button
                  color="secondary"
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: 15,
                    fontWeight: "bold",
                    color: selectedPage === i + 1 ? "white" : "inherit",
                    background: selectedPage === i + 1 ? "black" : "inherit",
                  }}
                  onClick={() => selectPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              ...
              {Array.from({ length: 3 }, (_, i) => (
                <Button
                  color="secondary"
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: 15,
                    fontWeight: "bold",
                    color: selectedPage === pages - 2 + i ? "white" : "inherit",
                    background:
                      selectedPage === pages - 2 + i ? "black" : "inherit",
                  }}
                  onClick={() => selectPage(pages - 2 + i)}
                >
                  {pages - 2 + i}
                </Button>
              ))}
            </>
          )}
        </b>
        <Button
          color="secondary"
          style={{
            margin: "auto",
            fontSize: 30,
            paddingBottom: 15,
          }}
          onClick={() => {
            if (selectedPage < pages) selectPage((_p) => _p + 1);
          }}
        >
          <ChevronRightIcon className={classes.dropIcon} />
        </Button>
      </Typography>
    </div>
  );
};

export default PageSelector;
