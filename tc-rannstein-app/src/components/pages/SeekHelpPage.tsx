import { Box } from '@mui/material';
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import InteractionBar from '../InteractionBar';
import ConfiguredChatBot from "../ConfiguredChatBot";
import {seekHelpFlow} from "../../chatbot-flow/flow";

const SeekHelpPage = () => {
  return (
      <Box>
        <InteractionBar />
        <Box>
            <ConfiguredChatBot steps={seekHelpFlow} width="100%" height="600px"/>
        </Box>
      </Box>
  )
}

export default SeekHelpPage; 