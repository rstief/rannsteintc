import {Box, Typography} from "@mui/material"
import ConfiguredChatBot from "../ConfiguredChatBot";
import {informationFlow} from "../../chatbot-flow/flow";
import {useTranslation} from "react-i18next";


const InfoPage = () => {
    const { t } = useTranslation();
    
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100% - 56px)'}}>
            <Typography align='center' fontWeight='bold' mt='10px' mb='10px' color='#263238'>
                {t('infopageexp')}
            </Typography>
            <ConfiguredChatBot steps={informationFlow} width="100%" height="100%"/>
        </Box>
    )
}

export default InfoPage;