import React,{useEffect, useState} from 'react';
import { Container, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import { UseDispatch, useDispatch } from 'react-redux'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import {getPosts} from './actions/posts.js'

import { CustomAppBar, CustomTypography, CustomImage } from './styles';

const App = () => {
  const[currentId,setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())

  },[dispatch])
  return (
    <Container maxWidth="lg">
      <CustomAppBar position='static'>
        <CustomTypography variant='h2' align='center'>Memories</CustomTypography>
        <CustomImage src={memories} alt='memories' height={60} />
      </CustomAppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent={'space-between'} direction={{ xs: 'column-reverse', sm: 'row' }} alignItems={'stretch'} spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
