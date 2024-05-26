import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

interface ChartsProps {
  horizontal: boolean;
  dataSheet1: number[];
  dataSheet2: number[];
  title1: string;
  title2: string;
  bgColor1: string;
  bgColor2: string;
  labels?: string[];
  legends?: boolean;
}
const months = ["January", "February", "March", "April", "May", "June", "July"];

export const Charts = ({
  horizontal = false,
  dataSheet1 = [],
  dataSheet2 = [],
  title1,
  title2,
  bgColor1,
  bgColor2,
  labels = months,
  legends,
}: ChartsProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: legends,
        position: "top" as const,
        labels: {
          boxWidth: 10,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: dataSheet1,
        backgroundColor: bgColor1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title2,
        data: dataSheet2,
        backgroundColor: bgColor2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

interface DoughnutProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends,
  offset,
}: DoughnutProps) => {
  const DoughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };
  const DoughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "top",
        labels: {
          padding: 40,
          boxWidth: 10,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={DoughnutData} options={DoughnutOptions} />;
};

interface PieChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  legends?: boolean;
  offset?: number[];
}
export const PieChart = ({
  labels,
  data,
  backgroundColor,
  legends,
  offset,
}: PieChartProps) => {
  const PieChartData: ChartData<"pie", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };
  const PieOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "top",
        labels: {
          padding: 40,
          boxWidth: 10,
        },
      },
    },
  };

  return <Pie data={PieChartData} options={PieOptions} />;
};

interface LineChartsProps {
  dataSheet: number[];
  title: string;
  bgColor: string;
  borderColor: string;
  labels?: string[];
  legends?: boolean;
}

export const LineCharts = ({
  bgColor,
  borderColor,
  labels,
  dataSheet,
  title,
  legends,
}: LineChartsProps) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "top" as const,
        labels: {
          boxWidth: 10,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    
    
  };

  const Linedata: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: title,
        data: dataSheet,
        backgroundColor: bgColor,
        borderColor,
        fill: true,
      },
    ],
  };
  return <Line options={options} data={Linedata} />;
};
