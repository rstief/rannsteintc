import React from 'react';
import './App.css';
import { AppBar, Button, createTheme, Grid, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4f536a',
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
      <AppBar position="static" sx={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Toolbar>
          <Grid container>
            <Grid item>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                My App
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container sx={{ justifyContent: "center", alignItems: "stretch", height: "100%"}}>
        {/* empty side left*/}
        
        {/* add chatbot */}
        <Grid item xs={12} md={6} sx={{backgroundColor: "green"}}>
          <Typography variant="h6">
            My App
          </Typography>
        </Grid>
        {/* empty side right */}
        
      </Grid>
    </ThemeProvider>
  );
}

export default App;
