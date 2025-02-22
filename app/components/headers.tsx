"use client"
import Image from "next/image";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "JAN", thisYear: 1000, lastYear: 800 },
  { month: "FEB", thisYear: 2000, lastYear: 1600 },
  { month: "MAR", thisYear: 1800, lastYear: 1800 },
  { month: "APR", thisYear: 2200, lastYear: 2000 },
  { month: "MAY", thisYear: 2400, lastYear: 2200 },
  { month: "JUN", thisYear: 3200, lastYear: 2400 },
  { month: "JUL", thisYear: 3800, lastYear: 2800 },
  { month: "AUG", thisYear: 4000, lastYear: 3000 },
  { month: "SEP", thisYear: 3800, lastYear: 3200 },
  { month: "OCT", thisYear: 3600, lastYear: 3400 },
  { month: "NOV", thisYear: 3800, lastYear: 3600 },
  { month: "DEC", thisYear: 4000, lastYear: 3800 },
]

const timeRanges = ["ALL", "6M", "3M", "1M", "1W"]

export default function Analytictable() {
  return (
    <div className="col-span-4 bg-gradient-to-b from-[#21192F] to-[#3E246B] rounded-lg shadow-lg overflow-hidden">


      <div className="p-6 flex flex-row items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-white">$0.00</div>
          <div className="text-sm text-red-500">-100.00% (-29.51) this week</div>
        </div>
        <button className=" flex p-2 gap-3 text-white hover:bg-white/10 rounded-full transition-colors">
          <h2>Filter</h2>
          <img src="./filter.svg"/>
        </button>
      </div>

      <div className="p-6 pt-0">

        <div className="flex flex-col h-[400px]">

          <div className="flex items-center justify-between gap-4 mb-4">

            <div className="flex gap-4">
              {["Total Users", "Total Projects", "Operating Status"].map((label) => (
                <button key={label} className="px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors">
                  {label}
                </button>
              ))}
            </div>

            <div>

            </div>

            <div className="flex items-center gap-8 ml-auto">

              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="text-sm text-white">This year</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-sm text-white">Last year</span>
              </div>

            </div>

          
          </div>


          <div className="flex h-full">
            <div className="flex flex-col justify-between py-6 pr-2">
              {timeRanges.map((range) => (
                <button
                  key={range}
                  className="px-3 py-1 text-sm text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {range}
                </button>
              ))}
            </div>
            <div className="flex-1 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="thisYear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fff" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="lastYear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    stroke="#fff"
                    strokeOpacity={0.4}
                    style={{ fontSize: "12px" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#fff"
                    strokeOpacity={0.4}
                    style={{ fontSize: "12px" }}
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border border-gray-700 bg-gray-800 p-2 shadow-md">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-gray-400">This Year</span>
                                <span className="font-bold text-white">{payload[0].value}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-gray-400">Last Year</span>
                                <span className="font-bold text-white">{payload[1].value}</span>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="thisYear"
                    stroke="#fff"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#thisYear)"
                  />
                  <Area
                    type="monotone"
                    dataKey="lastYear"
                    stroke="#a78bfa"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    fillOpacity={1}
                    fill="url(#lastYear)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

