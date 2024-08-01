import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SystemHealthPage = () => {
  const theme = useTheme();

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'CPU Usage',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: theme.palette.primary.main,
      },
      {
        label: 'Memory Usage',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: theme.palette.secondary.main,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'System Health Metrics',
      },
    },
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom className='text-center'>
        System Health Monitoring
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">CPU and Memory Usage</Typography>
              <Line data={data} options={options} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Add more charts or information here as needed */}
          <Card>
            <CardContent>
              <Typography variant="h6">Disk Usage</Typography>
              {/* Example dummy chart */}
              <Line data={data} options={options} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SystemHealthPage;
