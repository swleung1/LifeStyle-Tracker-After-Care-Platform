import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function RecoveryChart({ logs }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="card p-3 shadow-sm rounded-4 bg-white text-center text-muted">
        <p>No survey data available.</p>
      </div>
    );
  }

  const total = logs.length;
  const avg = (arr) =>
    arr.reduce((sum, val) => sum + Number(val ?? 0), 0) / total;

  const painAvg = avg(logs.map((entry) => entry.painLevel));
  const mobilityAvg = avg(logs.map((entry) => entry.mobility));
  const appetiteAvg = avg(
    logs.map((entry) =>
      entry.appetite === "true" ? 100 : entry.appetite === "false" ? 40 : 60
    )
  );
  const feverAvg = avg(logs.map((entry) => entry.fever));

  const chartData = {
    labels: ["Pain", "Mobility", "Appetite", "Temperature"],
    datasets: [
      {
        label: "Average Recovery Metrics",
        data: [painAvg, mobilityAvg, appetiteAvg, feverAvg],
        borderColor: "#b39ddb",
        backgroundColor: "rgba(179, 157, 219, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "#b39ddb",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#555",
          boxWidth: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.raw.toFixed(1)}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: "#888",
        },
        grid: {
          color: "#eee",
        },
      },
      x: {
        ticks: {
          color: "#888",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      className="card p-3 shadow-sm rounded-4 bg-white"
      style={{
        maxWidth: "600px",
        height: "300px",
        margin: "0 auto",
      }}
    >
      <h6 className="mb-3 text-center text-muted">Overall Recovery</h6>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default RecoveryChart;