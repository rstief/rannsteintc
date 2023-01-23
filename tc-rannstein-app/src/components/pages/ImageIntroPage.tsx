import {Box, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom";
import introimage from '../../assets/introimage.svg'
// import { setTimeout } from 'timers/promises';
import {useTranslation} from "react-i18next";

const ImageIntroPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    setTimeout(() => {
        console.log('This will run after 2 seconds!')
        navigate('intro/')
    }, 2 * 1000);

    return (
        <Box display={'flex'} sx={{ flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '600px'}}>
            <Typography align='center' fontWeight='bold' mt='20px' color='#263238' mb='30px'>
                {t("introPages.page1.hello")}
            </Typography>

            <img src={introimage} className='introimage' alt='intro'/>
        </Box>
    )
}

export default ImageIntroPage;