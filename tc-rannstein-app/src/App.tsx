import './App.css';
import { Box, createTheme, Grid, Stack, ThemeProvider, Typography } from '@mui/material';
import NavBar from './components/NavBar';
import LinearProgressWithLabel, { LinearProgressProps } from '@mui/material/LinearProgress';
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import testFlow from './chatbot-flow/test-flow';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#2D5E6E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box sx={{ height: 788 }}>
        <Box sx={{ height: '20%', width: '100%'}}>
          <Typography>Progress Bar</Typography>
        </Box>  
        <Box sx={{ height: '80%'}}>
          <ChatBot steps={testFlow} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
