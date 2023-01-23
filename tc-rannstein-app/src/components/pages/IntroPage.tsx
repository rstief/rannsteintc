// noinspection HtmlUnknownTarget
// So no warning for routing links

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Link,
    IconButton,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent
} from '@mui/material';
import logo from '../../assets/logoWithName.svg'
import introassessment from '../../assets/introassessment.svg'
import introexplore from '../../assets/introexplore.svg'
import introseekhelp from '../../assets/introseekhelp.svg'
import introassessmentDe from '../../assets/introassessment_de.svg'
import introexploreDe from '../../assets/introexplore_de.svg'
import introseekhelpDe from '../../assets/introseekhelp_de.svg'
import {useTranslation} from "react-i18next";
import {useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import states from '../../data/states.json';

const IntroPage = () => {
    const {t, i18n} = useTranslation();
    const [currentPage, setPage] = useState(0);
    const [gerState, setGerState] = useState(localStorage.getItem("state") ?? 'BY');
    const [language, setLanguage] = useState(localStorage.getItem("language") ?? 'en');

    if (currentPage === 1) {
        return (
            <><AppBar elevation={0} position='static' sx={{}}>
                <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Box sx={{flexDirection: 'row', flexWrap: 'nowrap', display: 'flex'}}>
                        <img src={logo} alt='logo'/>
                    </Box>
                </Toolbar>
            </AppBar>
                <Box display={'flex'} sx={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '700px',
                    alignItems: 'center'
                }}>
                    <Box display={'flex'}
                         sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography align='left' mb={'10px'} sx={{fontSize: '16px', fontWeight: 'bold'}}>
                            {t("introPages.page3.header")}
                        </Typography>
                        <Link href='../lilo/assessment' sx={{color: 'black'}}>
                            <AssessmentImage/>
                        </Link>
                    </Box>

                    <Link href='../lilo/seekhelp' sx={{color: 'black'}}>
                        <SeekhelpImage/>
                    </Link>

                    <Link href='../lilo/infopage' sx={{color: 'black'}}>
                        <ExploreImage/>
                    </Link>

                    <IconButton
                        onClick={() => {
                            setPage(0)
                        }}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Box>
            </>
        )
    }
    return (
        <><AppBar elevation={0} position='static' sx={{}}>
            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box sx={{flexDirection: 'row', flexWrap: 'nowrap', display: 'flex'}}>
                    <img src={logo} alt='logo'/>
                </Box>
            </Toolbar>
        </AppBar>
            <Box display={'flex'}
                 sx={{flexDirection: 'column', justifyContent: 'space-evenly', height: '75%', alignItems: 'center'}}>
                <div style={{width:'80%'}}>
                    <Typography sx={{fontSize: '16px', fontWeight: 'bold'}}>
                        {t("introPages.page2.header")}
                    </Typography>
                </div>
                <div style={{width:'80%'}}>
                    <Typography sx={{fontSize: '16px', fontWeight: 'bold', paddingBottom: '4px'}}>
                        {t("introPages.page2.stateSelect")}
                    </Typography>
                    <FormControl size={"small"} sx={{width:"100%"}}>
                    <Select
                        value={gerState}
                        variant={"outlined"}
                        onChange={(event: SelectChangeEvent) => {
                            let state: string = event.target.value
                            setGerState(state);
                            localStorage.setItem("state", state);
                        }}
                        sx={{
                            background: '#F7F8F9', fontSize: '16px',
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: '#F7F8F9',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#F7F8F9',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#F7F8F9',
                            }
                        }}
                    >
                        {states.map((value) => {
                            return <MenuItem value={value} key={value}>{t(`states.${value}`)}</MenuItem>
                        })}
                    </Select>
                    </FormControl>
                </div>
                <div style={{width:'80%'}}>
                    <Typography sx={{fontSize: '16px', fontWeight: 'bold', paddingBottom: '4px'}}>
                        {t("introPages.page2.languageSelect")}
                    </Typography>
                    <FormControl size={"small"} sx={{width:"100%"}}>
                    <Select
                        value={language}
                        onChange={(event: SelectChangeEvent) => {
                            let language: string = event.target.value
                            //set language for local state, storage (chatbot translation) and other translations.
                            setLanguage(language);
                            localStorage.setItem("language", language);
                            i18n.changeLanguage(language);
                        }}
                        sx={{
                            background: '#F7F8F9', fontSize: '16px',
                            '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#F7F8F9',
                        },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#F7F8F9',
                        },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#F7F8F9',
                        }
                        }}
                    >
                        <MenuItem value={'en'}>English</MenuItem>
                        <MenuItem value={'de'}>Deutsch</MenuItem>
                    </Select>
                    </FormControl>
                </div>
                <IconButton
                    onClick={() => {
                        setPage(1)
                    }}>
                    <ArrowForwardIcon/>
                </IconButton>
            </Box>
        </>
    )
}

function AssessmentImage() {
    return (
        <img src={localStorage.getItem("language") === "de" ? introassessmentDe : introassessment} className='intropageimages' alt='assessment'/>
    )
}

function ExploreImage() {
    return (
        <img src={localStorage.getItem("language") === "de" ? introexploreDe : introexplore} className='intropageimages' alt='explore'/>
    )
}

function SeekhelpImage() {
    return (
        <img src={localStorage.getItem("language") === "de" ? introseekhelpDe : introseekhelp} className='intropageimages' alt='seekhelp'/>
    )
}

export default IntroPage; 