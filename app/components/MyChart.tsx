import { useEffect, useState, useRef } from 'react';
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
  ChartOptions,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type MyChartProps = {
  currency_code: string;
};

const MyChart = ({ currency_code }: MyChartProps) => {
  const [chartData, setChartData] = useState<{ irtPrice: number[]; usdPrice: number[]; labels: string[] }>({
    irtPrice: [],
    usdPrice: [],
    labels: [],
  });
  const [selectedPeriod, setSelectedPeriod] = useState('24h');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dataFetchedRef = useRef(false);
  const cacheKey = `chartData-${currency_code}-${selectedPeriod}`;

  useEffect(() => {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      setChartData(JSON.parse(cachedData));
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://dev2.wallet.ir.reza.in/coinlist/chart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            period: selectedPeriod,
            currency_code: currency_code,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data from API');
        }

        const data = await response.json();

        const irtPrices = data.items.map((item: any) => parseFloat(item.irt_price));
        const usdPrices = data.items.map((item: any) => parseFloat(item.price));
        const labels = data.items.map((item: any) => item.date);

        const chartData = {
          irtPrice: irtPrices,
          usdPrice: usdPrices,
          labels: labels,
        };

        setChartData(chartData);
        localStorage.setItem(cacheKey, JSON.stringify(chartData));
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (!dataFetchedRef.current) {
      dataFetchedRef.current = true;
      fetchData();
    }
  }, [selectedPeriod, currency_code, cacheKey]);

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    dataFetchedRef.current = false;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <iframe
          src="https://giphy.com/embed/l3nWhI38IWDofyDrW"
          width="480"
          height="480"
          style={{ border: "none" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!chartData.irtPrice.length || !chartData.usdPrice.length) {
    return <div>Data not available for the selected period.</div>;
  }

  const mainChartData = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'قیمت بیت کوین',
        data: chartData.irtPrice,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
        tension: 0,
        yAxisID: 'y1',
      },
      {
        label: 'برابری',
        data: chartData.usdPrice,
        borderColor: 'rgba(22, 82, 240, 1)',
        backgroundColor: 'rgba(22, 82, 240, 0.2)',
        fill: false,
        tension: 0,
        yAxisID: 'y2',
      },
    ],
  };

  const secondaryChartData = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'نمودار پایین',
        data: chartData.usdPrice,
        borderColor: 'rgba(0, 200, 83, 1)',
        backgroundColor: 'rgba(0, 200, 83, 0.2)',
        fill: true,
        tension: 0,
      },
    ],
  };

  const mainChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y1: {
        type: 'linear',
        position: 'right',
        ticks: {
          callback: function (value) {
            return `${Number(value).toLocaleString()} تومان`;
          },
        },
        grid: {
          drawOnChartArea: true,
        },
      },
      y2: {
        type: 'linear',
        position: 'left',
        ticks: {
          callback: function (value) {
            return `${Number(value)}`;
          },
        },
        grid: {
          drawOnChartArea: true,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
        hoverRadius: 5,
      },
    },
  };

  const secondaryChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        display: false,
      },
      x: {
        display: true, 
        ticks: {
          maxTicksLimit: 0,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 0,
        hoverRadius: 5,
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="button-container">
        <button onClick={() => handlePeriodChange('24h')}>24 ساعت</button>
        <button onClick={() => handlePeriodChange('1w')}>1 هفته</button>
        <button onClick={() => handlePeriodChange('1m')}>1 ماه</button>
      </div>
      <div className="chart-wrapper">
        <Line data={mainChartData} options={mainChartOptions} />
      </div>
      <div className="secondary-chart-wrapper pt- pr-28 ">
        <Line data={secondaryChartData} options={secondaryChartOptions} />
      </div>
    </div>
  );
};

export default MyChart;
