import { Box } from '@mui/material';
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import testFlow from '../../chatbot-flow/test-flow';
import InteractionBar from '../InteractionBar';

const SeekHelpPage = () => {
  return (
      <Box>
        <InteractionBar />
        <Box>
          <ChatBot steps={testFlow} />
        </Box>
      </Box>
  )
}

export default SeekHelpPage; 