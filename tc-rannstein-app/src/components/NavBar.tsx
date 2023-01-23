import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AppBar,
    Box,
    Button,
    Divider, FormControl,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Select, SelectChangeEvent,
    Stack,
    Toolbar,
    Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import logo from '../assets/logoWithName.svg'
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import states from "../data/states.json";

const NavBar = () => {
    const { t, i18n } = useTranslation();

    const [gerState, setGerState] = useState(localStorage.getItem("state") ?? 'BY');
    const [language, setLanguage] = useState(localStorage.getItem("language") ?? 'en');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar elevation={0} position='static' sx={{height:'56px'}}>
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
                    <MenuItem key={1} sx={{padding: 0, paddingBottom: "2px", display: 'block', marginTop: '-8px' /* negative margin for first element*/}}>
                        <Accordion color='secondary' sx={{ color: 'black', backgroundColor: '#2D5E6E' }} square={true} disableGutters={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary' fontWeight='bold' fontSize='14px'>{t('navbar.lilo.key')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                <Link href='../../lilo/assessment' color='secondary' underline='none'>
                                    <div className="buttonPadding">
                                        {t('navbar.lilo.l1')}
                                    </div>
                                </Link>
                            </AccordionDetails>
                            <Divider className={"menuDivider"}/>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                <Link href='../../lilo/seekHelp' color='secondary' underline='none'>
                                    <div className="buttonPadding">
                                        {t('navbar.lilo.l2')}
                                    </div>
                                </Link>
                            </AccordionDetails>
                            <Divider className={"menuDivider"}/>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                <Link href='../../lilo/infopage' color='secondary' underline='none'>
                                    <div className="buttonPadding">
                                        {t('navbar.lilo.l3')}
                                    </div>
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem key={2} sx={{padding: 0, paddingBottom: "2px", display: 'block'}}>
                        <Accordion color='secondary' sx={{color: 'black', backgroundColor: '#2D5E6E' }} square={true} disableGutters={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary' fontWeight='bold' fontSize='14px'>{t('navbar.police.key')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                <Link href='../lilo/notimplemented' color='secondary' underline='none'>
                                    <div className="buttonPadding">
                                    {t('navbar.police.l1')}
                                    </div>
                                </Link>
                                <Divider className="menuDivider"/>
                                <Link href='../../lilo/reportcrime' color='secondary' underline='none'>
                                    <div className="buttonPadding">
                                        {t('navbar.police.l2')}
                                    </div>
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem key={3} sx={{padding: 0, paddingBottom: "2px", display: 'block'}}>
                        <Accordion sx={{ backgroundColor: '#2D5E6E' }} square={true} disableGutters={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary' fontWeight='bold' fontSize='14px'>{t('navbar.legal.key')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                <Link href='../lilo/notimplemented' color='secondary' underline='none'>
                                    <div className="buttonPadding">
                                        {t('navbar.legal.l1')}
                                    </div>
                                </Link>
                                <Divider className={"menuDivider"}/>
                                    <Link href='../../lilo/legalresources' color='secondary' underline='none'>
                                        <div className="buttonPadding">
                                            {t('navbar.legal.l2')}
                                        </div>
                                    </Link>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem key={4} sx={{padding: 0, paddingBottom: '2px', display: 'block'  /* negative margin for last element*/}}>
                        <Accordion color='secondary' sx={{ color: 'black', backgroundColor: '#2D5E6E' }} square={true} disableGutters={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography color='primary' fontWeight='bold' fontSize='14px'>{t('navbar.community.key')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                <div className="buttonPadding">
                                    <Link href='../../lilo/communityresources' color='secondary' underline='none'>
                                        {t('navbar.community.l1')}
                                    </Link>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </MenuItem>
                    <MenuItem key={5} sx={{padding: 0, display: 'block', marginBottom: '-8px' /* negative margin for last element and no padding*/}}>
                        <Accordion sx={{ backgroundColor: '#455A64' }} square={true} disableGutters={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}>
                                <Typography color='primary' fontWeight='bold' fontSize='14px'>{t('navbar.settings.key')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'white', padding: "0" }}>
                                <div style={{padding: '8px', display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
                                    {t('navbar.settings.l1')}
                                    <FormControl size={"small"}>
                                        <Select
                                            value={gerState}
                                            variant={"outlined"}
                                            onChange={(event: SelectChangeEvent) => {
                                                let state: string = event.target.value
                                                setGerState(state);
                                                localStorage.setItem("state", state);
                                                window.location.reload();
                                            }}
                                            sx={{
                                                fontSize: '14px',
                                                '.MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#455A64',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#455A64',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#455A64',
                                                }
                                            }}
                                        >
                                            {states.map((value) => {
                                                return <MenuItem value={value} key={value}>{t(`states.${value}`)}</MenuItem>
                                            })}
                                        </Select>
                                    </FormControl>
                                </div>
                                <Divider className={"menuDivider"}/>
                                <div style={{padding: '8px', display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
                                    {t('navbar.settings.l2')}
                                    <FormControl size={"small"}>
                                        <Select
                                            value={language}
                                            onChange={(event: SelectChangeEvent) => {
                                                let language: string = event.target.value
                                                //set language for local state, storage (chatbot translation) and other translations.
                                                setLanguage(language);
                                                localStorage.setItem("language", language);
                                                window.location.reload();
                                            }}
                                            sx={{
                                                fontSize: '14px',
                                                '.MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#455A64',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#455A64',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#455A64',
                                                }
                                            }}
                                        >
                                            <MenuItem value={'en'}>English</MenuItem>
                                            <MenuItem value={'de'}>Deutsch</MenuItem>
                                        </Select>
                                    </FormControl>
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