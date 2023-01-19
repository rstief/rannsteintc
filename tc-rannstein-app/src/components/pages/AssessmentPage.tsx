import { Box } from '@mui/material';
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import testFlow from '../../chatbot-flow/test-flow';
import InfoBar from '../InfoBar';

const AssessmentPage = () => {
  return (
    <Box>
      <InfoBar />
      <ChatBot steps={testFlow} />
    </Box>
  )
}

export default AssessmentPage; 