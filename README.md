# Analytical Dashboard

## Overview

This project is an analytical dashboard that provides a comprehensive view of various system metrics and analyses. It includes features such as predictive analysis, system health monitoring, blocking activities visualization, system processes, and threat notifications.

## Features

1. **System Processes**
   - Displays a list of active system processes.
   - Provides detailed information about each process.

2. **System Health Monitoring**
   - Visualizes the health metrics of the system.
   - Displays real-time data about system performance.

3. **Blocking Activities**
   - Shows a pie chart visualization of blocking activities.
   - Helps in identifying and analyzing blocked activities.

4. **Predictive Analysis**
   - Uses a simple linear regression model to predict future metrics based on historical data.
   - Displays both historical and predicted data on a line chart.

5. **Threat Notifications**
   - Provides a dummy notification system for threat alerts.
   - Ensures notifications are easily noticeable and actionable.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React component library for creating a modern and responsive UI.
- **Chart.js**: JavaScript library for creating charts.
- **TensorFlow.js**: Library for machine learning in JavaScript.
- **React Router**: For routing in React applications.

## Project Structure

analytical-dashboard/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── SystemProcesses.js
│ │ ├── HealthMonitoring.js
│ │ ├── BlockingPieChart.js
│ │ ├── PredictiveAnalysis.js
│ │ └── ThreatNotifications.js
│ ├── pages/
│ │ ├── SystemHealthPage.js
│ │ └── BlockingActivitiesPage.js
│ ├── App.js
│ ├── index.js
│ └── Main.js
├── .gitignore
├── package.json
└── README.md