import {Box} from '@mui/material';
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import InteractionBar from '../InteractionBar';
import ConfiguredChatBot from "../ConfiguredChatBot";
import {seekHelpFlow} from "../../chatbot-flow/flow";

const SeekHelpPage = () => {
  return (
      <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100% - 56px)'}}>
          <InteractionBar />
          <ConfiguredChatBot steps={seekHelpFlow} width="100%" height="100%"/>
      </Box>
  )
}

export default SeekHelpPage; 