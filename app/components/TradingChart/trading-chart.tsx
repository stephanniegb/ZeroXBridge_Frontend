import Chart from "./chart";
import { BTCIcon, DownArrow, FilterIcon, NotificationIcon, UpArrow } from "./Coins";
import { coinData } from "./data";

export default function TradingChartComponent(){
    return (
        <div className="flex gap-0 justify-start items-start px-10 py-10 bg-[#21192F] w-fit h-fit mt-3 mx-auto rounded-2xl">
            <div className="text-white text-xl">
                <h1 className="text-white flex items-center gap-2">
                    BTC 
                    <span className="text-base text-[#808080]">/IPY</span>
                    <span className="text-base text-[#808080]">&#x2228;</span>
                </h1>

                <div className="flex justify-between px-11 py-3 mt-4 bg-[#3B2A65]">
                    <p className="flex items-center gap-2">
                        <span>721,882</span>
                        <span className="text-[#EE2E6B]">-4</span>
                        <DownArrow />
                    </p>
                    <p className="flex items-center gap-2">
                        <span>High</span>
                        <span>725,974</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span>24h Volume</span>
                        <span>677.7 BTC</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span>Price Alert</span>
                        <NotificationIcon />
                    </p>
                </div>
                <Chart />
            </div>

            <div className="flex flex-col border-l-[0.1px] border-[#8280FF] text-white">
                <div className="flex justify-between items-center text-xl px-5">
                    <h2 className="flex gap-2 justify-start items-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0V12H0L12 0Z" fill="url(#paint0_linear_127_2178)"/>
                            <defs>
                                <linearGradient id="paint0_linear_127_2178" x1="19.6897" y1="9.99721" x2="4.73906" y2="19.4753" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6226EF"/>
                                    <stop offset="1" stopColor="#A370F1"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        Market Cap
                    </h2>
                    <FilterIcon />
                </div>

                <div className="flex flex-col text-xl mt-4">

                    {
                        coinData.map((coinObject, index) => {
                            const Icon = coinObject.icon
                            return (
                                <div 
                                    key={index} 
                                    className={`flex justify-between 
                                        gap-20 border-b-[0.4px] border-[#8280FF] py-3 px-5
                                        ${coinObject.name === 'BTC' && 'bg-[#3B2A65]'}
                                        `}
                                >
                                    <div className="flex gap-2 items-center">
                                        <Icon />
                                        {coinObject.name}
                                    </div>
                                    <p className="flex justify-start gap-2">
                                        <span className="flex gap-2 items-center">
                                            ¥ {coinObject.price}
                                        </span>
                                        <span className="flex gap-2 items-center">
                                            <span className={`${coinObject.performance < 0 ? 'text-[#EE2E6B]':'text-[#01C0AA]'}`}>
                                                {coinObject.performance < 0 ? `${coinObject.performance}`:`+${coinObject.performance}`}
                                            </span>
                                            <span>
                                                {coinObject.performance < 0 ? (
                                                    <DownArrow />
                                                ) : (
                                                    <UpArrow />
                                                )}
                                            </span>
                                        </span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}