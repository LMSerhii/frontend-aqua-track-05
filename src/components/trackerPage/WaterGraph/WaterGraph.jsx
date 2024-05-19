import { AreaChart, Area, XAxis, Tooltip, YAxis } from 'recharts';
import useMediaQuery from '../../../hooks/useMediaQuery';

export const WaterGraph = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)');

  const paddingGraph = isTablet ? 36 : 10;
  const chartWidth = isDesktop ? 608 : isTablet ? 640 : 303;
  const chartHeight = isDesktop || isTablet ? 269 : 257;
  const wrapperPadding = isDesktop || isTablet ? '49px' : '35px';

  const data = [
    { date: '16', Water: 1.5 },
    { date: '17', Water: 2 },
    { date: '18', Water: 3.334 },
    { date: '19', Water: 1.28 },
    { date: '20', Water: 1.33 },
    { date: '21', Water: 2.1 },
    { date: '22', Water: 2 },
  ];

  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div style={{ paddingTop: wrapperPadding }}>
      <AreaChart width={chartWidth} height={chartHeight} data={data}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="40%" stopColor="var(--lettuce)" stopOpacity={1} />
            <stop offset="100%" stopColor="var(--lettuce)" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="Water"
          stroke="var(--lettuce-secondary)"
          fill="url(#colorPv)"
          activeDot={{
            r: 9,
            fill: 'white',
            stroke: 'var(--lettuce-secondary)',
          }}
        />
        <Tooltip
          separator=" : "
          animationEasing="ease-in-out"
          animationDuration="300ms"
          formatter={(value, name, props) => {
            props.color = 'var(--dark)';
            return `${value} ml`;
          }}
        />
        <YAxis
          dataKey="Water"
          unit="L"
          tick={{
            stroke: 'black',
            strokeWidth: 0.2,
            style: { transform: 'translateX(-11px)' },
          }}
          axisLine={false}
          tickLine={false}
        />
        <XAxis
          dataKey="date"
          tick={{
            stroke: 'var(--dark)',
            strokeWidth: 0.2,
            style: { transform: 'translateY(15px)' },
          }}
          axisLine={false}
          tickLine={false}
          padding={{ left: paddingGraph, right: 10 }}
        />
      </AreaChart>
    </div>
  );
};
