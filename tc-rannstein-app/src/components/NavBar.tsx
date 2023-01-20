import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Divider, IconButton, Link, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../assets/logoWithName.svg'
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
                    <img src={logo} alt='logo' />
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
                    }}
                    sx={{ alignContent: 'start' }}>
                    <MenuItem>
                        <Accordion color='secondary' sx={{ color: 'black', backgroundColor: '#2D5E6E' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary'>Police Resources</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{ backgroundColor: 'white' }}>
                                <Link href='../lilo/infopage' color='secondary' underline='none'>
                                    Closest Police Station
                                </Link>
                                <Divider />
                                <Link href='../lilo/infopage' color='secondary' underline='none'>
                                    Reporting Crime & What To Do
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem>
                        <Accordion color='secondary' sx={{ color: 'black', backgroundColor: '#2D5E6E' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary'>Legal Resources</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white' }}>
                                <Link href='../lilo/infopage' color='secondary' underline='none'>
                                    Closest Legal Aid and Lawyers
                                </Link>
                                <Divider />
                                <Link href='../lilo/infopage' color='secondary' underline='none'>
                                    Local Laws
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>

                    <MenuItem>
                        <Accordion color='secondary' sx={{ color: 'black', backgroundColor: '#2D5E6E' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary'>Community Resources</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white' }}>
                                <Link href='../lilo/communityresources' color='secondary' underline='none'>
                                    Support Groups & Hotlines
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>



                    {/* <MenuItem sx={{ backgroundColor: '#2D5E6E' }} onClick={undefined}>
                        Police Resources
                    </MenuItem>
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
                            Closest Legal Aid and Lawyers
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Typography>
                            Local Laws
                        </Typography>
                    </MenuItem>
                    <Divider />

                    <MenuItem sx={{ backgroundColor: '#2D5E6E' }} onClick={undefined}>Community Resources</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Typography>
                            Support Groups & Hotlines
                        </Typography>
                    </MenuItem> */}
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;