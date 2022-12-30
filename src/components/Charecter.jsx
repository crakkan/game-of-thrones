import React, { useState } from 'react';
import { Card, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { hover } from '@testing-library/user-event/dist/hover';

const Image = styled('img')({
    width: '100%',
    height: 300
});

const Component = styled(Card)`
width: 200px;
margin: 10px;
position: relative;
`;
const Container = styled(Box)`
position: absolute;
top: 0;
color: #fff;
height: 300px;
width: 100%;
background: #000;
opacity: 0.5
`;

function Charecter({value}) {
    const [toggle, setToggle] = useState(false);

    const toggleHover = () =>{
        setToggle(!toggle);
    }
  return (
    value.characterImageFull ?
    <Component onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <Image src={value.characterImageFull} alt='picture'/>
        {
            toggle ?
        <Container>
            <Typography>Name:{value.characterName}</Typography>
            <Typography>Actor Name:{value.actorName}</Typography>
            <Typography>House:{value.houseName}</Typography>
            <Typography>Nick Name:{value.nickname}</Typography>
        </Container>
        : ''
        }
    </Component>
    : ''
  )
}

export default Charecter