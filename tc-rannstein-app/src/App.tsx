import './App.css';
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import testFlow from './chatbot-flow/test-flow';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2D5E6E',
    },
    secondary: {
      main: '#f50057',
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
      <Grid container sx={{ justifyContent: 'center', alignItems: 'stretch', height: '100%' }}>
        {/* empty side left*/}
        {/* add chatbot */}
        <Grid item xs={12} md={6} sx={{ backgroundColor: 'green' }}>
          <ChatBot steps={testFlow} />
        </Grid>
        {/* empty side right */}

      </Grid>
    </ThemeProvider>
  );
}

export default App;
