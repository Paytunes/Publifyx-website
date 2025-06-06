
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, LabelList } from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

interface GeoChartData {
  name: string;
  count: number;
  impressions: number;
}

interface GeographicBarChartProps {
  data: GeoChartData[];
  displayLabel: string;
}

const GeographicBarChart = ({ data, displayLabel }: GeographicBarChartProps) => {
  const chartConfig = {
    impressions: {
      label: "Weekly Impressions (Millions)",
      color: "#2563eb",
    },
  };

  const CustomLabel = (props: any) => {
    const { x, y, width, height, value, payload } = props;
    
    // Safety check for payload
    if (!payload || payload.count === undefined) {
      return null;
    }
    
    return (
      <text 
        x={x + width / 2} 
        y={y - 5} 
        fill="#374151" 
        textAnchor="middle" 
        fontSize="12"
        fontWeight="600"
      >
        {payload.count}
      </text>
    );
  };

  const getBarColor = (index: number, data: any[]) => {
    // Use gradient colors for better visual appeal
    const colors = [
      "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe",
      "#1e40af", "#1d4ed8", "#2563eb", "#3730a3", "#4338ca", "#5b21b6"
    ];
    return colors[index % colors.length];
  };

  // Calculate totals
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);
  const totalImpressions = data.reduce((sum, item) => sum + item.impressions, 0);

  return (
    <>
      {/* Count and Total Impressions Display */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex justify-between items-center">
        <div className="text-sm font-medium text-gray-700">
          Total {displayLabel}: <span className="text-blue-600 font-bold">{totalCount}</span>
        </div>
        <div className="text-sm font-medium text-gray-700">
          Weekly Impressions: <span className="text-blue-600 font-bold">{totalImpressions.toFixed(2)} Million</span>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="h-96">
        <BarChart 
          data={data} 
          margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ 
              fontSize: 11, 
              fill: '#6B7280',
              ...(data.length > 6 && { angle: -45 })
            }}
            textAnchor={data.length > 6 ? "end" : "middle"}
            height={data.length > 6 ? 80 : 60}
            axisLine={{ stroke: '#E5E7EB' }}
            interval={0}
          />
          <YAxis 
            label={{ 
              value: 'Weekly Impressions (Millions)', 
              angle: -90, 
              position: 'insideLeft', 
              style: { textAnchor: 'middle', fill: '#6B7280', fontSize: '12px' } 
            }}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <ChartTooltip 
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-3 border rounded-lg shadow-lg border-gray-200">
                    <p className="font-semibold text-gray-800 mb-1">{label}</p>
                    <p className="text-sm text-blue-600">Impressions: {data.impressions}M</p>
                    <p className="text-sm text-gray-600">Count: {data.count}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="impressions" 
            radius={[4, 4, 0, 0]}
          >
            <LabelList content={<CustomLabel />} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index, data)} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </>
  );
};

export default GeographicBarChart;
