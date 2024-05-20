import { AreaChart, Area, XAxis, Tooltip, YAxis } from 'recharts';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { useGetAllEntriesByMonthQuery } from '../../../redux/tracker/trackerApi.js';
import { useSelector } from 'react-redux';
import { selectMonth } from '../../../redux/date/dateSlice.js';
import { findTotalAmount } from '../../../shared/helpers/findTotalAmount.js';

export const WaterGraph = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)');
  const month = useSelector(selectMonth);
  const answer = useGetAllEntriesByMonthQuery(month)
  const serverData = answer.data.data

  const formatedDate = {
    dayOne: serverData[serverData.length - 7]?.date.split("-")[0],
    dayTwo: serverData[serverData.length - 6]?.date.split("-")[0],
    dayThree: serverData[serverData.length - 5]?.date.split("-")[0],
    dayFour: serverData[serverData.length - 4]?.date.split("-")[0],
    dayFive: serverData[serverData.length - 3]?.date.split("-")[0],
    daySix: serverData[serverData.length - 2]?.date.split("-")[0],
    daySeven: serverData[serverData.length - 1]?.date.split("-")[0],
  }

  const formatedAmount = findTotalAmount(serverData)


  const paddingGraph = isTablet ? 36 : 10;
  const chartWidth = isDesktop ? 608 : isTablet ? 640 : 303;
  const chartHeight = isDesktop || isTablet ? 269 : 257;
  const wrapperPadding = isDesktop || isTablet ? '49px' : '35px';

  const data = [
    { date: formatedDate.dayOne, Water: formatedAmount.dayOne },
    { date: formatedDate.dayTwo, Water: formatedAmount.dayTwo },
    { date: formatedDate.dayThree, Water: formatedAmount.dayThree },
    { date: formatedDate.dayFour, Water: formatedAmount.dayFour },
    { date: formatedDate.dayFive, Water: formatedAmount.dayFive },
    { date: formatedDate.daySix, Water: formatedAmount.daySix },
    { date: formatedDate.daySeven, Water: formatedAmount.daySeven },
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
