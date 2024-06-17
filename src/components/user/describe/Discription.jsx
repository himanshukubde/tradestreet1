import React from 'react'

const Discription = () => {
    return (
        <div>
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Discription</h4>
                    </div>
                </div>
                <div className="iq-card-body">
                    <ul className="nav nav-pills mb-3 nav-fill" id="pills-tab-1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link active"
                                id="pills-home-tab-fill"
                                data-bs-toggle="pill"
                                href="#pills-home-fill"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                Scalping
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="pills-profile-tab-fill"
                                data-bs-toggle="pill"
                                href="#pills-profile-fill"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                                tabIndex={-1}
                            >
                                Option

                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="pills-contact-tab-fill"
                                data-bs-toggle="pill"
                                href="#pills-contact-fill"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                                tabIndex={-1}
                            >
                                Pattern
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent-1">
                        <div
                            className="tab-pane fade active show"
                            id="pills-home-fill"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab-fill"
                        >
                            <p>
                                Scalping is a web application that functions as an intermediary platform between investors and the stock market. Its primary purpose is to facilitate the buying and selling of stocks for investors. The term Scalping refers to a trading strategy in which traders buy and sell stocks quickly, seeking to make small profits on each trade. Scalping offers various convenient features for investors to buy and sell stocks.
                            </p>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-profile-fill"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab-fill"
                        >
                            <p>
                                Unlock the potential of options trading with the revolutionary Option Strategy Application. Designed to simplify and automate the execution of option strategies, our application empowers traders with convenience and efficiency.Automated Option Strategies: Say goodbye to manual execution and let our application handle it for you. With 20 pre-built option strategies at your fingertips, you can easily select and execute the strategies that align with your trading goals and risk appetite.
                            </p>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-contact-fill"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab-fill"
                        >
                            <p>
                                The Candlestick Pattern Application is a powerful tool designed for market research and trading analysis through the observation of chart and candlestick patterns. This application employs historical price data to identify various candlestick patterns, such as doji, hammer, engulfing, and more, within different timeframes.The applications main objective is to assist traders and researchers in gaining insights into market trends, potential reversals, and momentum shifts. It automatically detects and highlights candlestick patterns on price charts, enabling users to quickly spot key formations that often signify significant price movements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Discription

