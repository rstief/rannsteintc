import { AppBar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg'
import React from 'react';


const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='static' sx={{}}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ flexDirection: 'row', flexWrap: 'nowrap', display: 'flex' }}>
                    <img src={logo} className='App-logo' alt='logo' />
                    <Typography variant='h6' sx={{ ml: '10px', color: '#2D5E6E' }}>
                        Lilo
                    </Typography>
                </Box>
                <IconButton color='secondary' aria-label='menu' aria-controls={open ? 'basic-menu' : undefined} aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}>
                    <MenuItem sx={{ backgroundColor: '#2D5E6E' }} onClick={undefined}>Police Resources</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Typography>
                            Closest Police Stations
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Typography>
                            Reporting Crime & What To Do
                        </Typography>
                    </MenuItem>
                    <Divider />

                    <MenuItem sx={{ backgroundColor: '#2D5E6E' }} onClick={undefined}>Legal Resources</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Typography>
                            Closest Police Stations
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Typography>
                            Reporting Crime & What To Do
                        </Typography>
                    </MenuItem>
                    <Divider />

                    <MenuItem sx={{ backgroundColor: '#2D5E6E' }} onClick={undefined}>Community Resources</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Typography>
                            Support Groups & Hotlines
                        </Typography>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;