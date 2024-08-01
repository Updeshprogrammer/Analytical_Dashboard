import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import SystemProcesses from '../components/SystemProcesses';
import HealthMonitoring from '../components/HealthMonitoring';
import BlockingPieChart from '../components/BlockingPieChart';
import PredictiveAnalysis from '../components/PredictiveAnalysis';
import ThreatNotifications from '../components/ThreatNotifications';

const Main = () => {
  return (
    <Container>
      <Box mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" align="center" gutterBottom>
                Predictive Analysis
              </Typography>
              <PredictiveAnalysis />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" align="center" gutterBottom>
                Blocking Pie Chart
              </Typography>
              <BlockingPieChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" align="center" gutterBottom>
                Health Monitoring
              </Typography>
              <HealthMonitoring />
            </Paper>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" align="center" gutterBottom>
              System Processes
            </Typography>
            <SystemProcesses />
          </Paper>
        </Box>
        <Box mt={5}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Threat Notifications
            </Typography>
            <ThreatNotifications />
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
