import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    root:{
        background: theme.customColors.white,
        borderRadius: 15,
        padding:16,
        boxShadow: theme.customShadows.light,
    }
}))

const ProductInfoBar = () => {
    const classes = useStyles();

     return (
        <div className={classes.root}>
            
        </div>
    )
}

export default ProductInfoBar