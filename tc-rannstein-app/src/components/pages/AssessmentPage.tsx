import { Box } from '@mui/material';
// @ts-ignore
import InfoBar from '../InfoBar';
import ConfiguredChatBot from "../ConfiguredChatBot";
import {preliminaryFlow} from "../../chatbot-flow/flow";

const AssessmentPage = () => {
  return (
    <Box>
      <InfoBar />
        <ConfiguredChatBot steps={preliminaryFlow} width="100%" height="600px"/>
    </Box>
  )
}

export default AssessmentPage; 