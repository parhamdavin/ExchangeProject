import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MyChartProps {
  irtPrice: number;
  usdPrice: number;
  selectedPeriod: string;
}

const MyChart = ({ irtPrice, usdPrice, selectedPeriod }:MyChartProps) => {
  const irtPriceArray = [irtPrice];
  const usdPriceArray = [usdPrice];
  
  if (!irtPriceArray.length || !usdPriceArray.length) {
    return <div>Data not available for the selected period.</div>;
  }

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'], 
    datasets: [
      {
        label: 'IRT Price (تومان)',
        data: irtPriceArray,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        yAxisID: 'y2'
      },
      {
        label: 'USD Price ($)',
        data: usdPriceArray,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        yAxisID: 'y1'
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y1: {
        type: 'linear' as const,
        position: 'left' as const,
        beginAtZero: false,
        title: {
          display: true,
          text: 'USD Price ($)',
        },
      },
      y2: {
        type: 'linear' as const,
        position: 'right' as const,
        beginAtZero: false,
        title: {
          display: true,
          text: 'IRT Price (تومان)',
        },
      },
      x: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Chart for ${selectedPeriod}`,
      },
    },
  };

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '400px', 
      height: '300px', 
      margin: 'auto'
    }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MyChart;
