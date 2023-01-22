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
        <AppBar elevation={0} position='static' sx={{}}>
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
                    >
                    <MenuItem sx={{padding: 0, display: 'block', marginTop: '-8px' /* negative margin for first element*/}}>
                        <Accordion color='secondary' sx={{color: 'black', backgroundColor: '#2D5E6E' }} square={true} disableGutters={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary' fontWeight='bold' fontSize='14px'>POLICE RESOURCES</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                {/* <div className="buttonPadding">
                                    <Link href='../lilo/infopage' color='secondary' underline='none'>
                                        Closest Police Station
                                    </Link>
                                </div> */}
                                <Divider className="menuDivider"/>
                                <div className="buttonPadding">
                                    <Link href='../lilo/reportcrime' color='secondary' underline='none'>
                                        Reporting Crime & What To Do
                                    </Link>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem sx={{padding: 0, display: 'block'}}>
                        <Accordion sx={{ backgroundColor: '#2D5E6E' }} square={true} disableGutters={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary' fontWeight='bold' fontSize='14px'>LEGAL RESOURCES</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                {/* <div className="buttonPadding">
                                    <Link href='../lilo/infopage' color='secondary' underline='none'>
                                        Closest Legal Aid and Lawyers
                                    </Link>
                                </div> */}
                                <Divider className={"menuDivider"}/>
                                <div className="buttonPadding">
                                    <Link href='../lilo/legalresources' color='secondary' underline='none'>
                                        Local Laws
                                    </Link>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem sx={{padding: 0, display: 'block', marginBottom: '-8px' /* negative margin for last element*/}}>
                        <Accordion color='secondary' sx={{ color: 'black', backgroundColor: '#2D5E6E' }} square={true} disableGutters={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary' fontWeight='bold' fontSize='14px'>COMMUNITY RESOURCES</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                <div className="buttonPadding">
                                    <Link href='../lilo/communityresources' color='secondary' underline='none'>
                                        Support Groups & Hotlines
                                    </Link>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;