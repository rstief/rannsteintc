import React from 'react';
import './App.css';
import { AppBar, createTheme, Divider, Grid, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{}}>
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {//todo add Logo
          }
          <Typography variant="h6">
            Lilo
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>
            <MenuItem sx={{ backgroundColor: "#2D5E6E" }} onClick={undefined}>Police Resources</MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>
                Closest Police Stations
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>
                Reporting Crime & What To Do
              </Typography>
            </MenuItem>
            <Divider />

            <MenuItem sx={{ backgroundColor: "#2D5E6E" }} onClick={undefined}>Legal Resources</MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>
                Closest Police Stations
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>
                Reporting Crime & What To Do
              </Typography>
            </MenuItem>
            <Divider />

            <MenuItem sx={{ backgroundColor: "#2D5E6E" }} onClick={undefined}>Community Resources</MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>
                Support Groups & Hotlines
              </Typography>
            </MenuItem>
          </Menu>
          {/* <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Grid item>
              <Typography variant="h6">
                My App
              </Typography>
            </Grid>
            <Grid item>
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid> */}
        </Toolbar>
      </AppBar>
      <Grid container sx={{ justifyContent: "center", alignItems: "stretch", height: "100%" }}>
        {/* empty side left*/}
        {/* add chatbot */}
        <Grid item xs={12} md={6} sx={{ backgroundColor: "green" }}>
          <ChatBot steps={testFlow} />
        </Grid>
        {/* empty side right */}

      </Grid>
    </ThemeProvider>
  );
}

export default App;
