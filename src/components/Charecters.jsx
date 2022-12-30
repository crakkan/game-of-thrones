import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { data } from '../constant/data';
import Charecter from './Charecter';

function Charecters() {
  return (
    <Box style={{margin: '10px 35px'}}>
        <Grid container>
        {
            data.characters.map(value => (
                <Grid item>
<Charecter value={value}/>
</Grid>
            ))
        }
        </Grid>
    </Box>
  )
}

export default Charecters