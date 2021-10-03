import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Skeleton from '@mui/material/Skeleton';
import { Link } from '@material-ui/core';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Link)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: "1rem",
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#1d2124',
    borderColor: '#0063cc',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1d2124',
      borderColor: '#1d2124',
      boxShadow: 'none',
      textDecoration: "none"
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#1d2124',
      borderColor: '#1d2124',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    textDecoration: 'none'
  });


const PhotoGridCell = (props) => {
    const { link="", isLoading } = props
    const [shadow, setShadow] = useState(1)
    const [visi, setVisi] = useState(0)

    const onMouseOver = () => { setShadow(0.3);  setVisi(1); };
    const onMouseOut = () => { setShadow(1); setVisi(0)};


    const downloadPic = () => {
        window.location.href = link
    }
    

    if (isLoading ) 
        return (<Grid item md={4} >
            <Skeleton  animation="wave"  variant="rectangular" width={"100%"} height={400}  style={{ padding: "2px"}} />
        </Grid>)


    return ( <Grid item md={4} >
            {!link ? null  : 
                        <Card sx={{ maxWidth: 345 }} 
                            onMouseOver={onMouseOver}
                            onMouseOut={onMouseOut}
                        >
                            <CardActionArea sx={{  }}>
                                <CardMedia
                                    component="img"
                                    height="400px"
                                    style={{ padding: "10px", opacity: shadow}}
                                    image={link}
                                />
                                <Box component="span" sx={{ 
                                        transition: ".5s ease",
                                        opacity: visi,
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        msTransform: "translate(-50%, -50%)",
                                        textAlign: "center",


                                }}>
                                    <BootstrapButton color="inherit" style={{ padding: "10px", opacity: visi }} onClick={downloadPic}>DOWNLOAD</BootstrapButton>
                                </Box>
                                
                            </CardActionArea>
                        </Card>}
                </Grid>
    )
}

export default PhotoGridCell;