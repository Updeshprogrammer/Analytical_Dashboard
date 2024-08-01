import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import SystemProcessesPage from './pages/SystemProcessesPage';
import SystemHealthPage from './pages/SystemHealthPage';
import ThreatNotificationsPage from './pages/ThreatNotificationsPage';
import BlockingActivitiesPage from './pages/BlockingActivitiesPage';
import PredictiveAnalysisPage from './pages/PredictiveAnalysisPage';
import Main from './components/Main'

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

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/system-processes" element={<SystemProcessesPage />} />
          <Route path="/system-health" element={<SystemHealthPage />} />
          <Route path="/threat-notifications" element={<ThreatNotificationsPage />} />
          <Route path="/blocking-Pie-Chart-activities" element={<BlockingActivitiesPage />} />
          <Route path="/predictive-analysis" element={<PredictiveAnalysisPage />} />
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
