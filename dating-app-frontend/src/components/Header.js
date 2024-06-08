import React from 'react'
import './Header.css'
import IconButton from '@mui/material/IconButton';
import PersonsIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import { Icon } from '@mui/material';

const Header = () => {

    return (
        <div className="header">
            <IconButton>
                <PersonsIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header_logo" src="logo192.png" alt="header" style={{ width: "50px", height: "50px" }} />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header