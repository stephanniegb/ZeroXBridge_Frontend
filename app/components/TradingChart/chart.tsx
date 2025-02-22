'use client'

import { CandlestickData, CandlestickSeries, ColorType, createChart, HistogramData, HistogramSeries, Time } from "lightweight-charts"
import { useEffect, useRef } from "react"

const toTime = (timestamp: number): Time => timestamp as Time

const generateMockData = () => {
    const startTime = Date.now() / 1000 - 8 * 3600;
    const data: CandlestickData[] = [];
    let previousClose = 720000;

    for (let i = 0; i < 96; i++) {
        const time = toTime(Math.floor(startTime + i * 300));
        const open = previousClose;
        const close = open + (Math.random() - 0.5) * 2000;
        const high = Math.max(open, close) + Math.random() * 1000;
        const low = Math.min(open, close) - Math.random() * 1000;
        
        data.push({ time, open, high, low, close });
        previousClose = close;
    }
    return data;
};

export default function Chart() {
    const chartContainerRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if (!chartContainerRef.current) return

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: '#21192F' },
                textColor: '#808080'
            },
            width: chartContainerRef.current.clientWidth,
            height: 500,
            timeScale: {
                timeVisible: true,
                barSpacing: 10,
                borderVisible: false
            },
            grid: {
                vertLines: { visible: false },
                horzLines: { visible: true }
            }
        })

        const candleStickData = generateMockData()
        const volumeData: HistogramData[] = candleStickData.map(candle => ({
            time: candle.time,
            value: Math.floor(Math.random() * 100) + 50,
            color: '#EFF2FC'
        }))

        const candleSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#CCB7FF',
            downColor: '#8280FF',
            borderVisible: false,
            wickUpColor: '#CCB7FF',
            wickDownColor: '#8280FF'
        })
        
        const volumeSeries = chart.addSeries(HistogramSeries, {
            color: '#EFF2FC',
            priceFormat: { type: 'volume' },
            priceScaleId: 'volume',  // Give volume its own scale
            priceLineVisible: false
        })

        // Configure the main price scale (candlesticks)
        chart.priceScale('right').applyOptions({
            scaleMargins: {
                top: 0.1,  // Leave space at the top
                bottom: 0.2  // Leave room for volume
            },
            borderVisible: false
        })
        
        // Configure the volume scale
        chart.priceScale('volume').applyOptions({
            scaleMargins: {
                top: 0.8,  // Position volume at the bottom
                bottom: 0  // Align with bottom of chart
            },
            borderVisible: false,
            visible: false  // Hide the volume scale
        })
        
        candleSeries.setData(candleStickData)
        volumeSeries.setData(volumeData)

        return () => {
            chart.remove()
        }
    }, [])

    return (
        <div 
            ref={chartContainerRef}
            style={{ 
                width: '800px', 
                height: '600px',
                minWidth: '800px'
            }}
        />
    )
}

// import { CandlestickData, CandlestickSeries, ColorType, createChart, HistogramData, HistogramSeries, Time, WhitespaceData } from "lightweight-charts"
// import { useEffect, useRef } from "react"

// // Helper to convert timestamp to Lightweight Charts Time type
// const toTime = (timestamp: number): Time => timestamp as Time

// const generateMockData = () => {
//     const startTime = Date.now() / 1000 - 8 * 3600;
//     const data: CandlestickData[] = [];
//     let previousClose = 720000;

//     for (let i = 0; i < 96; i++) {
//         const time = toTime(Math.floor(startTime + i * 300));
//         const open = previousClose;
//         const close = open + (Math.random() - 0.5) * 2000;
//         const high = Math.max(open, close) + Math.random() * 1000;
//         const low = Math.min(open, close) - Math.random() * 1000;
        
//         data.push({ time, open, high, low, close });
//         previousClose = close;
//     }
//     return data;
// };

// export default function Chart() {
//     const chartContainerRef = useRef<HTMLDivElement>(null)
    
//     useEffect(() => {
//         if (!chartContainerRef.current) return

//         // 1. Initialize chart with explicit dimensions
//         const chart = createChart(chartContainerRef.current, {
//             layout: {
//                 background: { type: ColorType.Solid, color: '#21192F' },
//                 textColor: '#FFFFFF'
//             },
//             width: chartContainerRef.current.clientWidth,
//             height: 600,
//             timeScale: {
//                 timeVisible: true,
//                 barSpacing: 10, // Ensure dense candles
//                 borderVisible: false
//             },
//             grid: {
//                 vertLines: { visible: false },
//             }
//         })

//         // 2. Generate typed data
//         const candleStickData = generateMockData()

//         const volumeData: HistogramData[] = candleStickData.map(candle => ({
//             time: candle.time,
//             value: Math.floor(Math.random() * 100) + 50,
//             color: '#EFF2FC'
//         }))
//         console.log(volumeData[0].value)

//         // 3. Add series to chart
//         const candleSeries = chart.addSeries(CandlestickSeries, {
//             upColor: '#CCB7FF',
//             downColor: '#8280FF',
//             borderVisible: false,
//             wickUpColor: '#CCB7FF',
//             wickDownColor: '#8280FF'
//         })
        
//         const volumeSeries = chart.addSeries(HistogramSeries, {
//             color: '#EFF2FC',
//             priceFormat: { type: 'volume' },
//             priceScaleId: '',
//             priceLineVisible: false
//         })

        
//         // Configure the main price scale (candlesticks)
//         chart.priceScale('right').applyOptions({
//             scaleMargins: {
//                 top: 0.1,  // Leave space at the top
//                 bottom: 0.2  // Leave room for volume
//             },
//             borderVisible: false
//         })
        
//         // Configure the volume scale
//         chart.priceScale('volume').applyOptions({
//             scaleMargins: {
//                 top: 0.8,  // Position volume at the bottom
//                 bottom: 0  // Align with bottom of chart
//             },
//             borderVisible: false,
//             visible: false  // Hide the volume scale
//         })
        
//         candleSeries.setData(candleStickData)
//         volumeSeries.setData(volumeData)


//         // 4. Essential cleanup
//         return () => {
//             chart.remove()
//         }
//     }, [])

//     return (
//         <div 
//             ref={chartContainerRef}
//             style={{ 
//                 width: '800px', 
//                 height: '600px',
//                 minWidth: '800px' // Ensures minimum visible area
//             }}
//         />
//     )
// }

// import { CandlestickData, CandlestickSeries, ColorType, createChart, HistogramSeries, Time } from "lightweight-charts"
// import { useEffect, useRef } from "react"

// const generateMockData = () => {
//     const startTime = Date.now() / 1000 - 8 * 3600; // 8 hours ago
//     const data = [];
//     let previousClose = 720000; // Starting price from image
  
//     for (let i = 0; i < 96; i++) { // 5-minute intervals (8h * 12 = 96)
//       const time = startTime + i * 300; // 5-minute increments
//       const open = previousClose;
//       const close = open + (Math.random() - 0.5) * 2000;
//       const high = Math.max(open, close) + Math.random() * 1000;
//       const low = Math.min(open, close) - Math.random() * 1000;
      
//       data.push({
//         time: Math.floor(time),
//         open,
//         high,
//         low,
//         close,
//       });
  
//       previousClose = close;
//     }
  
//     return data;
// };
  

// export default function Chart(){
//     const chartContainerRef = useRef<any>(null)
    
//     useEffect(() => {
//         const chart = createChart(chartContainerRef?.current, {
//             layout: {
//                 background: {
//                     type: ColorType.Solid, color: '#21192F'
//                 },
//                 textColor: '#FFFFFF'
//             },
//             timeScale: {
//                 timeVisible: true,
//             },
//             // width: 500,
//             // height: 200
//         })

//         const candleStickData = generateMockData();

//         const candleSeries = chart.addSeries(CandlestickSeries, {
//             upColor: '#CCB7FF',
//             downColor: '#8280FF',
//             borderVisible: false,
//             wickUpColor: '#CCB7FF',
//             wickDownColor: '#8280FF'
//         })

//         candleSeries.setData(candleStickData)

//         const volumeData = candleStickData.map((candle) => ({
//             time: candle.time,
//             value: Math.floor(Math.random() * 100) + 50,
//             color: '#EFF2FC'
//         }))

//         const volumeSeries = chart.addSeries(HistogramSeries, {
//             color: '#EFF2FC',
//             priceFormat: {
//                 type: 'volume'
//             },
//             priceScaleId: '',
//             priceLineVisible: false
//         })
//         volumeSeries.setData(volumeData)
//     }, [])

//     return (
//         <div ref={chartContainerRef} style={{width: '100%', height: '600px'}}>
//         </div>
//     )
// }

