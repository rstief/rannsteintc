import {Box, Typography} from '@mui/material';
// @ts-ignore
import ConfiguredChatBot from "../ConfiguredChatBot";
import {seekHelpFlow} from "../../chatbot-flow/flow";
import {useTranslation} from "react-i18next";

const SeekHelpPage = () => {
    const { t } = useTranslation();

  return (
      <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100% - 56px)'}}>
          <Typography align='center' fontWeight='bold' mt='10px' mb='10px' color='#263238'>
              {t('seekhelppageexp')}
          </Typography>
          <ConfiguredChatBot steps={seekHelpFlow} width="100%" height="100%"/>
      </Box>
  )
}

export default SeekHelpPage; 