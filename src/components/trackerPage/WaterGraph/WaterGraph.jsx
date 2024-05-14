import {
  AreaChart,
  Area,
  XAxis,
  Tooltip, YAxis,
} from 'recharts';


export const WaterGraph = () => {

  const innerWidth = window.innerWidth

  const paddingGraph = innerWidth > 767 ? 40 : 20


  const data = [
    { date: '16', Water: 1.5 },
    { date: '17', Water: 2 },
    { date: '18', Water: 3.334 },
    { date: '19', Water: 1.28 },
    { date: '20', Water: 1.33 },
    { date: '21', Water: 2.1 },
    { date: '22', Water: 2 },
  ];



  return (
    <AreaChart
      width={608}
      height={360}
      data={data}
      margin={{
        top: 50,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stopColor="var(--lettuce)" stopOpacity={1} />
          <stop offset="100%" stopColor="var(--lettuce)" stopOpacity={0} />
        </linearGradient>
      </defs>

        <Area type="monotone" dataKey="Water" stroke="var(--lettuce-secondary)" fill="url(#colorPv)" activeDot={{ r: 9 , fill: "white", stroke:"var(--lettuce-secondary)"}}/>
      <Tooltip separator=" : " animationEasing="ease-in-out" animationDuration="300ms"
      formatter={(value, name, props) => {
        props.color = "var(--dark)"
          return `${value} ml`;
      }} />
      <YAxis dataKey="Water" unit="L"  tick={{stroke: 'black', strokeWidth: 0.2}} axisLine={false} tickLine={false} />
      <XAxis dataKey="date" tick={{stroke: 'var(--dark)', strokeWidth: 0.2}} axisLine={false} tickLine={false} padding={{ left: paddingGraph, right: 10 }}/>
    </AreaChart>
  );
};
