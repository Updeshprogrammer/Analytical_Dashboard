// src/components/PredictiveAnalysis.js
import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PredictiveAnalysis = () => {
  const [data, setData] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    // Generate dummy historical data
    const historicalData = [];
    for (let i = 0; i < 50; i++) {
      historicalData.push({ x: i, y: Math.sin(i / 5) + Math.random() * 0.5 });
    }
    setData(historicalData);
    
    // Train a simple linear regression model
    const trainModel = async (data) => {
      const xs = tf.tensor1d(data.map(d => d.x));
      const ys = tf.tensor1d(data.map(d => d.y));

      const model = tf.sequential();
      model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

      model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

      await model.fit(xs, ys, { epochs: 50 });

      // Generate predictions
      const predictionData = [];
      for (let i = 50; i < 60; i++) {
        const prediction = model.predict(tf.tensor1d([i])).dataSync()[0];
        predictionData.push({ x: i, y: prediction });
      }
      setPredictions(predictionData);
    };

    trainModel(historicalData);
  }, []);

  const chartData = {
    datasets: [
      {
        label: 'Historical Data',
        data: data,
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Predicted Data',
        data: predictions,
        borderColor: 'red',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Metric',
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PredictiveAnalysis;
