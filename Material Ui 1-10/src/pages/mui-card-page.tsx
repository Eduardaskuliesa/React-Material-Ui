import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

const MuiCardPage = () => (
  <Box width="300px">
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="unslpash image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">React</Typography>
        <Typography variant="body2" color="text.secondary">
          React is a JavaScript libary....
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">LearnMOre</Button>
      </CardActions>
    </Card>
  </Box>
);

export default MuiCardPage;
