import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PhotoGridRow from './PhotoGridRow';


const useStyles = makeStyles(theme => ({
    mainGrid: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: "60%"
    },  
  }));

const PhotoGrid = () => {
    const classes = useStyles();
    return (
            <Grid container columns={{ md: 12 }} className={classes.mainGrid} justifyContent="center">
                {Array.from(Array(3)).map((_, index) => (
                    <PhotoGridRow key={"grid-"+index} index={2-index} />
                ))}
            </Grid>
    )
}

export default PhotoGrid;