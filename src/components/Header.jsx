import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import Logo from '../image/game of thrones.jfif';

const StyleHeader = styled(AppBar)`
background: #000;
`

function Header() {
  return (
    <StyleHeader position='static'>
        <Toolbar>
        <img src={Logo} alt='logo' style={{width: 200, marginLeft: 640}}/>
        </Toolbar>
    </StyleHeader>
  )
}

export default Header