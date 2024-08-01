// // src/components/Navbar.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           Analytical Dashboard
//         </Typography>
//         <Button color="inherit" component={Link} to="/">
//           System Processes
//         </Button>
//         <Button color="inherit" component={Link} to="/system-health">
//           System Health
//         </Button>
//         <Button color="inherit" component={Link} to="/threat-notifications">
//           Threat Notifications
//         </Button>
//         <Button color="inherit" component={Link} to="/blocking-activities">
//           Blocking Activities
//         </Button>
//         <Button color="inherit" component={Link} to="/predictive-analysis">
//           Predictive Analysis
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline, Divider, useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const menuItems = [
//     { text: 'System Processes', path: '/' },
//     { text: 'System Health', path: '/system-health' },
//     { text: 'Threat Notifications', path: '/threat-notifications' },
//     { text: 'Blocking Activities', path: '/blocking-activities' },
//     { text: 'Predictive Analysis', path: '/predictive-analysis' },
//   ];

//   const customTheme = createTheme({
//     palette: {
//       primary: {
//         main: '#1976d2',
//       },
//       secondary: {
//         main: '#ff4081',
//       },
//     },
//     typography: {
//       fontFamily: 'Roboto, sans-serif',
//     },
//   });

//   return (
//     <ThemeProvider theme={customTheme}>
//       <CssBaseline />
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Analytical Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <div
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//           style={{ width: 250, backgroundColor: theme.palette.background.paper, height: '100%' }}
//         >
//           <Typography variant="h6" style={{ padding: theme.spacing(2) }}>
//             Menu
//           </Typography>
//           <Divider />
//           <List>
//             {menuItems.map((item, index) => (
//               <ListItem button key={index} component={Link} to={item.path}>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       </Drawer>
//     </ThemeProvider>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Divider, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ComputerIcon from '@mui/icons-material/Computer';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BlockIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'System Processes', path: '/system-processes', icon: <ComputerIcon /> },
    { text: 'System Health', path: '/system-health', icon: <HealthAndSafetyIcon /> },
    { text: 'Threat Notifications', path: '/threat-notifications', icon: <NotificationsIcon /> },
    { text: 'Blocking Activities', path: '/blocking-Pie-Chart-activities', icon: <BlockIcon /> },
    { text: 'Predictive Analysis', path: '/predictive-analysis', icon: <TimelineIcon /> },
  ];

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ff4081',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
           <Link to={"/"} className='text-decoration-none' style={{color:"#fff"}}> Analytical Dashboard</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: 250, backgroundColor: theme.palette.background.paper, height: '100%' }}
        >
          <Typography variant="h6" style={{ padding: theme.spacing(2) }}>
            Menu
          </Typography>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;

