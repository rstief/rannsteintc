import { AppBar, Box, Toolbar, Typography, Link, IconButton, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import logo from '../../assets/logoWithName.svg'
import introassessment from '../../assets/introassessment.svg'
import introexplore from '../../assets/introexplore.svg'
import introseekhelp from '../../assets/introseekhelp.svg'
import {useTranslation} from "react-i18next";
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const IntroPage = () => {
  const {t, i18n} = useTranslation();
  const [currentPage, setPage] = useState(0);
  const [gerState, setGerState] = useState('bavaria');
  const [language, setLanguage] = useState(localStorage.getItem("language") ?? 'en');

  if (currentPage === 1) {
    return (
      <><AppBar elevation={0} position='static' sx={{}}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ flexDirection: 'row', flexWrap: 'nowrap', display: 'flex' }}>
            <img src={logo} alt='logo' />
          </Box>
        </Toolbar>
      </AppBar>
        <Box display={'flex'} sx={{ flexDirection: 'column', justifyContent: 'space-evenly', height: '700px', alignItems: 'center' }}>
          <Box display={'flex'} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography align='left' mb={'10px'} sx={{ fontWeight: 'bold' }}>
              {t("introPages.page3.header")}
            </Typography>
            <Link href='../lilo/assessment' sx={{ color: 'black' }} >
              <AssessmentImage />
            </Link>
          </Box>

          <Link href='../lilo/seekhelp' sx={{ color: 'black' }}>
            <SeekhelpImage />
          </Link>

          <Link href='../lilo/infopage' sx={{ color: 'black' }}>
            <ExploreImage />
          </Link>

          <IconButton
            onClick={() => {
              setPage(0)
            }}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
      </>
    )
  }
  return (
    <><AppBar elevation={0} position='static' sx={{}}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ flexDirection: 'row', flexWrap: 'nowrap', display: 'flex' }}>
          <img src={logo} alt='logo' />
        </Box>
      </Toolbar>
    </AppBar>
      <Box display={'flex'} sx={{ flexDirection: 'column', justifyContent: 'space-evenly', height: '700px', alignItems: 'center' }}>
        <Box display={'flex'} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography align='left' mb={'10px'} ml='20px' sx={{ fontSize: '14px', fontWeight: 'bold' }}>
            {t("introPages.page2.header")}
          </Typography>
        </Box>
        <Box sx={{ width: 120 }}>
          <FormControl fullWidth>
            <InputLabel>{t("introPages.page2.stateSelect")}</InputLabel>
            <Select
              value={gerState}
              label="State"
              onChange={(event: SelectChangeEvent) =>{
                setGerState(event.target.value)
              }}
            >
              <MenuItem value={'bavaria'}>{t("states.bayern")}</MenuItem>
              <MenuItem value={'berlin'}>{t("states.berlin")}</MenuItem>
              <MenuItem value={'hamburg'}>{t("states.hamburg")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 120 }}>
        <FormControl fullWidth>
          <InputLabel>{t("introPages.page2.languageSelect")}</InputLabel>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            value={language}
            label="Language"
            onChange={(event: SelectChangeEvent) =>{
              let language: string = event.target.value
              //set language for local state, storage (chatbot translation) and other translations.
              setLanguage(language);
              localStorage.setItem("language", language);
              i18n.changeLanguage(language);
            }}
          >
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'de'}>Deutsch</MenuItem>
          </Select>
        </FormControl>
        </Box>
        <IconButton
          onClick={() => {
            setPage(1)
          }}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  )
}

function AssessmentImage() {
  return (
    <img src={introassessment} className='intropageimages' alt='assessment' />
  )
}

function ExploreImage() {
  return (
    <img src={introexplore} className='intropageimages' alt='explore' />
  )
}

function SeekhelpImage() {
  return (
    <img src={introseekhelp} className='intropageimages' alt='seekhelp' />
  )
}

export default IntroPage; 