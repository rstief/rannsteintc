import { Box } from '@mui/material';
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import InfoBar from '../InfoBar';
import ConfiguredChatBot from "../ConfiguredChatBot";
import flow from "../../chatbot-flow/flow";

const AssessmentPage = () => {
  return (
    <Box>
      <InfoBar />
        <ConfiguredChatBot steps={flow} width="100%" height="600px"/>
    </Box>
  )
}

export default AssessmentPage; 