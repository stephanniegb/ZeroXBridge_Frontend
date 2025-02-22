import Chart from "./chart";
import { BTCIcon, DownArrow, FilterIcon, UpArrow } from "./Coins";
import { coinData } from "./data";

export default function TradingChartComponent(){
    return (
        <div className="flex gap-0 justify-start items-start px-10 py-10">
            <div className="">
                <Chart />
            </div>

            <div className="flex flex-col border-l-[0.1px] border-[#8280FF]">
                <div className="flex justify-between items-center">
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

                <div className="flex flex-col text-xl">
                    {/* <div className="flex justify-between gap-10">
                        <div className="flex gap-2 items-center">
                            <BTCIcon />
                            BTC
                        </div>
                        <p className="flex justify-start">
                            <span className="flex gap-2 items-center">
                                ¥ 721,882
                            </span>
                            <span className="flex gap-2 items-center">
                                -4.66%
                                <DownArrow />
                            </span>
                        </p>
                    </div> */}

                    {
                        coinData.map((coinObject, index) => {
                            const Icon = coinObject.icon
                            return (
                                <div key={index} className="flex justify-between gap-10 border-b-[0.1px] border-[#8280FF] py-2">
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