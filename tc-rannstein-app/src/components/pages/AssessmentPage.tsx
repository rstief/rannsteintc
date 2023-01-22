import { Box } from '@mui/material';
// @ts-ignore
import InfoBar from '../InfoBar';
import ConfiguredChatBot from "../ConfiguredChatBot";
import {preliminaryFlow} from "../../chatbot-flow/flow";

const AssessmentPage = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100% - 56px)'}}>
      <InfoBar />
        <ConfiguredChatBot steps={preliminaryFlow} width="100%" height="100%"/>
    </Box>
  )
}

export default AssessmentPage; 