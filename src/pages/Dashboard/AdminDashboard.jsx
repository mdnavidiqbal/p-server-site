
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMemo, useState } from 'react';
import SideList from './SideList';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness3Icon from '@mui/icons-material/Brightness3';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



export default function AdminDashboard() {
  const [open, setOpen] = useState(false);
  const [dark,setDark]= useState(true)

  const darkTheme = useMemo(()=>createTheme({
    palette:{
      mode: dark? "dark" : "light"
    }
  }),[dark])

  const handleDrawerOpen = () => setOpen(true);


  // const mainMenuItems = ['Dashboard', 'Users', 'Registrations', 'Settings'];
  // const secondaryMenuItems = ['Reports', 'Trash', 'Help'];

  const navigate = useNavigate()

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Tooltip title="Go Back To Home Page">
            <IconButton sx={{mr:1}} onClick={()=>navigate("/home")}>
              <HomeIcon/>
            </IconButton>
            
          </Tooltip>
          <Typography variant="h6" noWrap component="div" sx={{flexGrow:1}}>
            Admin Dashboard
          </Typography>
          <IconButton onClick={()=> setDark(!dark)}>
            {
              dark? <Brightness7Icon/> : <Brightness3Icon/>            
              
            }
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideList open={open} setOpen={setOpen} />
    </Box>
    </ThemeProvider>
  );
}