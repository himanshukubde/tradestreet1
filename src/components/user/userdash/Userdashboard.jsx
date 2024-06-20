
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Userdashboard = () => {

    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [selectGroup, setSelectGroup] = useState('')
    const [selectStrategyType, setStrategyType] = useState('')
    const [getAllService, setAllservice] = useState({
        loading: true,
        data: []
    })
    // const handleAddScript = () => {
    //     const data = { selectGroup: selectGroup, selectStrategyType: selectStrategyType };
    //     navigate(selectStrategyType == "Scalping" ? '/user/addscript' :
    //         selectStrategyType == "Option Strategy" ? '/user/addscript/option' : '/user/addscript/pattern', { state: { data } });
    // }
    const handleAddScript1 = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: "Scalping" };
        navigate('/user/addscript/scalping', { state: { data } });
    }
    const handleAddScript2 = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: 'Option Strategy' };
        navigate('/user/addscript/option', { state: { data } });
    }
    const handleAddScript3 = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: 'Pattern' };
        navigate('/user/addscript/pattern', { state: { data } });
    }



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="iq-card iq-user-profile-block">
                        <div className="iq-card-body">
                            <div className="user-details-block">
                                <div className="user-profile text-center">
                                    <img
                                        src="/assets/images/user/1.jpg"
                                        alt="profile-img"
                                        className="avatar-130 img-fluid"
                                    />
                                </div>
                                <div className="text-center mt-3">
                                    <h4>
                                        <b>Neha Mam</b>
                                    </h4>
                                    <p>Team Leader</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu
                                        turpis. Nunc
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Assign
                                    </a>
                                </div>
                                <hr />
                                <ul className="doctoe-sedual d-flex align-items-center justify-content-between p-0">
                                    <li className="text-center">
                                        <h3 className="counter">5500 +</h3>
                                        <span>Projects</span>
                                    </li>
                                    <li className="text-center">
                                        <h3 className="counter">4.9</h3>
                                        <span>Rating</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Our Clients</h4>
                            </div>
                        </div>
                        <div className="iq-card-body" style={{ position: "relative" }}>
                            <div id="home-chart-06" style={{ height: 350, minHeight: 355 }}>
                                <div
                                    id="apexchartst9oh43x4"
                                    className="apexcharts-canvas apexchartst9oh43x4 light zoomable"
                                    style={{ width: 768, height: 340 }}
                                >
                                    <svg
                                        id="SvgjsSvg20683"
                                        width={768}
                                        height={340}
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        className="apexcharts-svg"
                                        transform="translate(0, 0)"
                                        style={{ background: "transparent" }}
                                    >
                                        <g
                                            id="SvgjsG20685"
                                            className="apexcharts-inner apexcharts-graphical"
                                            transform="translate(55.359375, 30)"
                                        >
                                            <defs id="SvgjsDefs20684">
                                                <clipPath id="gridRectMaskt9oh43x4">
                                                    <rect
                                                        id="SvgjsRect20698"
                                                        width="706.640625"
                                                        height="271.348"
                                                        x={-2}
                                                        y={-2}
                                                        rx={0}
                                                        ry={0}
                                                        fill="#ffffff"
                                                        opacity={1}
                                                        strokeWidth={0}
                                                        stroke="none"
                                                        strokeDasharray={0}
                                                    />
                                                </clipPath>
                                                <clipPath id="gridRectMarkerMaskt9oh43x4">
                                                    <rect
                                                        id="SvgjsRect20699"
                                                        width="704.640625"
                                                        height="269.348"
                                                        x={-1}
                                                        y={-1}
                                                        rx={0}
                                                        ry={0}
                                                        fill="#ffffff"
                                                        opacity={1}
                                                        strokeWidth={0}
                                                        stroke="none"
                                                        strokeDasharray={0}
                                                    />
                                                </clipPath>
                                                <linearGradient
                                                    id="SvgjsLinearGradient20705"
                                                    x1={0}
                                                    y1={0}
                                                    x2={0}
                                                    y2={1}
                                                >
                                                    <stop
                                                        id="SvgjsStop20706"
                                                        stopOpacity="0.65"
                                                        stopColor="rgba(8,155,171,0.65)"
                                                        offset={0}
                                                    />
                                                    <stop
                                                        id="SvgjsStop20707"
                                                        stopOpacity="0.5"
                                                        stopColor="rgba(132,205,213,0.5)"
                                                        offset={1}
                                                    />
                                                    <stop
                                                        id="SvgjsStop20708"
                                                        stopOpacity="0.5"
                                                        stopColor="rgba(132,205,213,0.5)"
                                                        offset={1}
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <line
                                                id="SvgjsLine20689"
                                                x1={0}
                                                y1={0}
                                                x2={0}
                                                y2="267.348"
                                                stroke="#b6b6b6"
                                                strokeDasharray={3}
                                                className="apexcharts-xcrosshairs"
                                                x={0}
                                                y={0}
                                                width={1}
                                                height="267.348"
                                                fill="#b1b9c4"
                                                filter="none"
                                                fillOpacity="0.9"
                                                strokeWidth={1}
                                            />
                                            <g
                                                id="SvgjsG20711"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                            >
                                                <g
                                                    id="SvgjsG20712"
                                                    className="apexcharts-xaxis-texts-g"
                                                    transform="translate(0, -4)"
                                                >
                                                    <text
                                                        id="SvgjsText20713"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x="54.04927884615385"
                                                        y="296.348"
                                                        textAnchor="middle"
                                                        dominantBaseline="auto"
                                                        fontSize="12px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-xaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        <tspan
                                                            id="SvgjsTspan20714"
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            06:00
                                                        </tspan>
                                                        <title>06:00</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText20715"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x="162.14783653846155"
                                                        y="296.348"
                                                        textAnchor="middle"
                                                        dominantBaseline="auto"
                                                        fontSize="12px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-xaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        <tspan
                                                            id="SvgjsTspan20716"
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            07:00
                                                        </tspan>
                                                        <title>07:00</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText20717"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x="270.2463942307692"
                                                        y="296.348"
                                                        textAnchor="middle"
                                                        dominantBaseline="auto"
                                                        fontSize="12px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-xaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        <tspan
                                                            id="SvgjsTspan20718"
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            08:00
                                                        </tspan>
                                                        <title>08:00</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText20719"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x="378.3449519230769"
                                                        y="296.348"
                                                        textAnchor="middle"
                                                        dominantBaseline="auto"
                                                        fontSize="12px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-xaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        <tspan
                                                            id="SvgjsTspan20720"
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            09:00
                                                        </tspan>
                                                        <title>09:00</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText20721"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x="486.4435096153846"
                                                        y="296.348"
                                                        textAnchor="middle"
                                                        dominantBaseline="auto"
                                                        fontSize="12px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-xaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        <tspan
                                                            id="SvgjsTspan20722"
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            10:00
                                                        </tspan>
                                                        <title>10:00</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText20723"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x="594.5420673076923"
                                                        y="296.348"
                                                        textAnchor="middle"
                                                        dominantBaseline="auto"
                                                        fontSize="12px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-xaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        <tspan
                                                            id="SvgjsTspan20724"
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            11:00
                                                        </tspan>
                                                        <title>11:00</title>
                                                    </text>
                                                    <text
                                                        id="SvgjsText20725"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x="702.640625"
                                                        y="296.348"
                                                        textAnchor="middle"
                                                        dominantBaseline="auto"
                                                        fontSize="12px"
                                                        fontWeight={400}
                                                        fill="#373d3f"
                                                        className="apexcharts-xaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        <tspan
                                                            id="SvgjsTspan20726"
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        />
                                                        <title />
                                                    </text>
                                                </g>
                                                <line
                                                    id="SvgjsLine20727"
                                                    x1={0}
                                                    y1="268.348"
                                                    x2="702.640625"
                                                    y2="268.348"
                                                    stroke="#78909c"
                                                    strokeDasharray={0}
                                                    strokeWidth={1}
                                                />
                                            </g>
                                            <g id="SvgjsG20736" className="apexcharts-grid">
                                                <g id="SvgjsG20737" className="apexcharts-gridlines-horizontal">
                                                    <line
                                                        id="SvgjsLine20745"
                                                        x1={0}
                                                        y1={0}
                                                        x2="702.640625"
                                                        y2={0}
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-gridline"
                                                    />
                                                    <line
                                                        id="SvgjsLine20746"
                                                        x1={0}
                                                        y1="53.4696"
                                                        x2="702.640625"
                                                        y2="53.4696"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-gridline"
                                                    />
                                                    <line
                                                        id="SvgjsLine20747"
                                                        x1={0}
                                                        y1="106.9392"
                                                        x2="702.640625"
                                                        y2="106.9392"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-gridline"
                                                    />
                                                    <line
                                                        id="SvgjsLine20748"
                                                        x1={0}
                                                        y1="160.40879999999999"
                                                        x2="702.640625"
                                                        y2="160.40879999999999"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-gridline"
                                                    />
                                                    <line
                                                        id="SvgjsLine20749"
                                                        x1={0}
                                                        y1="213.8784"
                                                        x2="702.640625"
                                                        y2="213.8784"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-gridline"
                                                    />
                                                    <line
                                                        id="SvgjsLine20750"
                                                        x1={0}
                                                        y1="267.348"
                                                        x2="702.640625"
                                                        y2="267.348"
                                                        stroke="#e0e0e0"
                                                        strokeDasharray={0}
                                                        className="apexcharts-gridline"
                                                    />
                                                </g>
                                                <g id="SvgjsG20738" className="apexcharts-gridlines-vertical" />
                                                <line
                                                    id="SvgjsLine20739"
                                                    x1="54.04927884615385"
                                                    y1="268.348"
                                                    x2="54.04927884615385"
                                                    y2="274.348"
                                                    stroke="#78909c"
                                                    strokeDasharray={0}
                                                    className="apexcharts-xaxis-tick"
                                                />
                                                <line
                                                    id="SvgjsLine20740"
                                                    x1="162.14783653846155"
                                                    y1="268.348"
                                                    x2="162.14783653846155"
                                                    y2="274.348"
                                                    stroke="#78909c"
                                                    strokeDasharray={0}
                                                    className="apexcharts-xaxis-tick"
                                                />
                                                <line
                                                    id="SvgjsLine20741"
                                                    x1="270.2463942307692"
                                                    y1="268.348"
                                                    x2="270.2463942307692"
                                                    y2="274.348"
                                                    stroke="#78909c"
                                                    strokeDasharray={0}
                                                    className="apexcharts-xaxis-tick"
                                                />
                                                <line
                                                    id="SvgjsLine20742"
                                                    x1="378.3449519230769"
                                                    y1="268.348"
                                                    x2="378.3449519230769"
                                                    y2="274.348"
                                                    stroke="#78909c"
                                                    strokeDasharray={0}
                                                    className="apexcharts-xaxis-tick"
                                                />
                                                <line
                                                    id="SvgjsLine20743"
                                                    x1="486.4435096153846"
                                                    y1="268.348"
                                                    x2="486.4435096153846"
                                                    y2="274.348"
                                                    stroke="#78909c"
                                                    strokeDasharray={0}
                                                    className="apexcharts-xaxis-tick"
                                                />
                                                <line
                                                    id="SvgjsLine20744"
                                                    x1="594.5420673076923"
                                                    y1="268.348"
                                                    x2="594.5420673076923"
                                                    y2="274.348"
                                                    stroke="#78909c"
                                                    strokeDasharray={0}
                                                    className="apexcharts-xaxis-tick"
                                                />
                                                <line
                                                    id="SvgjsLine20752"
                                                    x1={0}
                                                    y1="267.348"
                                                    x2="702.640625"
                                                    y2="267.348"
                                                    stroke="transparent"
                                                    strokeDasharray={0}
                                                />
                                                <line
                                                    id="SvgjsLine20751"
                                                    x1={0}
                                                    y1={1}
                                                    x2={0}
                                                    y2="267.348"
                                                    stroke="transparent"
                                                    strokeDasharray={0}
                                                />
                                            </g>
                                            <g
                                                id="SvgjsG20701"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                            >
                                                <g
                                                    id="SvgjsG20702"
                                                    className="apexcharts-series"
                                                    seriesname="series1"
                                                    rel={1}
                                                >
                                                    <path
                                                        id="SvgjsPath20709"
                                                        d="M 0 267.348L 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014C 702.6406249999999 53.469600000000014 702.6406249999999 53.469600000000014 702.6406249999999 267.348M 702.6406249999999 53.469600000000014z"
                                                        fill="url(#SvgjsLinearGradient20705)"
                                                        fillOpacity={1}
                                                        strokeOpacity={1}
                                                        strokeLinecap="butt"
                                                        strokeWidth={0}
                                                        strokeDasharray={0}
                                                        className="apexcharts-area"
                                                        index={0}
                                                        clipPath="url(#gridRectMaskt9oh43x4)"
                                                        pathto="M 0 267.348L 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014C 702.6406249999999 53.469600000000014 702.6406249999999 53.469600000000014 702.6406249999999 267.348M 702.6406249999999 53.469600000000014z"
                                                        pathfrom="M -1 320.8176L -1 320.8176L 162.14783653846152 320.8176L 270.2463942307692 320.8176L 378.3449519230769 320.8176L 486.4435096153846 320.8176L 594.5420673076923 320.8176L 702.6406249999999 320.8176"
                                                    />
                                                    <path
                                                        id="SvgjsPath20710"
                                                        d="M 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014"
                                                        fill="none"
                                                        fillOpacity={1}
                                                        stroke="#089bab"
                                                        strokeOpacity={1}
                                                        strokeLinecap="butt"
                                                        strokeWidth={4}
                                                        strokeDasharray={0}
                                                        className="apexcharts-area"
                                                        index={0}
                                                        clipPath="url(#gridRectMaskt9oh43x4)"
                                                        pathto="M 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014"
                                                        pathfrom="M -1 320.8176L -1 320.8176L 162.14783653846152 320.8176L 270.2463942307692 320.8176L 378.3449519230769 320.8176L 486.4435096153846 320.8176L 594.5420673076923 320.8176L 702.6406249999999 320.8176"
                                                    />
                                                    <g
                                                        id="SvgjsG20703"
                                                        className="apexcharts-series-markers-wrap"
                                                    >
                                                        <g className="apexcharts-series-markers">
                                                            <circle
                                                                id="SvgjsCircle20758"
                                                                r={0}
                                                                cx={0}
                                                                cy={0}
                                                                className="apexcharts-marker wcoqozutn no-pointer-events"
                                                                stroke="#ffffff"
                                                                fill="#089bab"
                                                                fillOpacity={1}
                                                                strokeWidth={2}
                                                                strokeOpacity="0.9"
                                                                default-marker-size={0}
                                                            />
                                                        </g>
                                                    </g>
                                                    <g id="SvgjsG20704" className="apexcharts-datalabels" />
                                                </g>
                                            </g>
                                            <line
                                                id="SvgjsLine20753"
                                                x1={0}
                                                y1={0}
                                                x2="702.640625"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                className="apexcharts-ycrosshairs"
                                            />
                                            <line
                                                id="SvgjsLine20754"
                                                x1={0}
                                                y1={0}
                                                x2="702.640625"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                className="apexcharts-ycrosshairs-hidden"
                                            />
                                            <g id="SvgjsG20755" className="apexcharts-yaxis-annotations" />
                                            <g id="SvgjsG20756" className="apexcharts-xaxis-annotations" />
                                            <g id="SvgjsG20757" className="apexcharts-point-annotations" />
                                            <rect
                                                id="SvgjsRect20759"
                                                width={0}
                                                height={0}
                                                x={0}
                                                y={0}
                                                rx={0}
                                                ry={0}
                                                fill="#fefefe"
                                                opacity={1}
                                                strokeWidth={0}
                                                stroke="none"
                                                strokeDasharray={0}
                                                className="apexcharts-zoom-rect"
                                            />
                                            <rect
                                                id="SvgjsRect20760"
                                                width={0}
                                                height={0}
                                                x={0}
                                                y={0}
                                                rx={0}
                                                ry={0}
                                                fill="#fefefe"
                                                opacity={1}
                                                strokeWidth={0}
                                                stroke="none"
                                                strokeDasharray={0}
                                                className="apexcharts-selection-rect"
                                            />
                                        </g>
                                        <rect
                                            id="SvgjsRect20688"
                                            width={0}
                                            height={0}
                                            x={0}
                                            y={0}
                                            rx={0}
                                            ry={0}
                                            fill="#fefefe"
                                            opacity={1}
                                            strokeWidth={0}
                                            stroke="none"
                                            strokeDasharray={0}
                                        />
                                        <g
                                            id="SvgjsG20728"
                                            className="apexcharts-yaxis"
                                            rel={0}
                                            transform="translate(22.359375, 0)"
                                        >
                                            <g id="SvgjsG20729" className="apexcharts-yaxis-texts-g">
                                                <text
                                                    id="SvgjsText20730"
                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                    x={20}
                                                    y="31.5"
                                                    textAnchor="end"
                                                    dominantBaseline="auto"
                                                    fontSize="11px"
                                                    fontWeight="regular"
                                                    fill="#373d3f"
                                                    className="apexcharts-yaxis-label "
                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                >
                                                    120
                                                </text>
                                                <text
                                                    id="SvgjsText20731"
                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                    x={20}
                                                    y="85.06960000000001"
                                                    textAnchor="end"
                                                    dominantBaseline="auto"
                                                    fontSize="11px"
                                                    fontWeight="regular"
                                                    fill="#373d3f"
                                                    className="apexcharts-yaxis-label "
                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                >
                                                    100
                                                </text>
                                                <text
                                                    id="SvgjsText20732"
                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                    x={20}
                                                    y="138.63920000000002"
                                                    textAnchor="end"
                                                    dominantBaseline="auto"
                                                    fontSize="11px"
                                                    fontWeight="regular"
                                                    fill="#373d3f"
                                                    className="apexcharts-yaxis-label "
                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                >
                                                    80
                                                </text>
                                                <text
                                                    id="SvgjsText20733"
                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                    x={20}
                                                    y="192.20880000000002"
                                                    textAnchor="end"
                                                    dominantBaseline="auto"
                                                    fontSize="11px"
                                                    fontWeight="regular"
                                                    fill="#373d3f"
                                                    className="apexcharts-yaxis-label "
                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                >
                                                    60
                                                </text>
                                                <text
                                                    id="SvgjsText20734"
                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                    x={20}
                                                    y="245.77840000000003"
                                                    textAnchor="end"
                                                    dominantBaseline="auto"
                                                    fontSize="11px"
                                                    fontWeight="regular"
                                                    fill="#373d3f"
                                                    className="apexcharts-yaxis-label "
                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                >
                                                    40
                                                </text>
                                                <text
                                                    id="SvgjsText20735"
                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                    x={20}
                                                    y="299.348"
                                                    textAnchor="end"
                                                    dominantBaseline="auto"
                                                    fontSize="11px"
                                                    fontWeight="regular"
                                                    fill="#373d3f"
                                                    className="apexcharts-yaxis-label "
                                                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                >
                                                    20
                                                </text>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="apexcharts-legend" />
                                    <div className="apexcharts-tooltip light">
                                        <div
                                            className="apexcharts-tooltip-title"
                                            style={{
                                                fontFamily: "Helvetica, Arial, sans-serif",
                                                fontSize: 12
                                            }}
                                        />
                                        <div className="apexcharts-tooltip-series-group">
                                            <span
                                                className="apexcharts-tooltip-marker"
                                                style={{ backgroundColor: "rgb(8, 155, 171)" }}
                                            />
                                            <div
                                                className="apexcharts-tooltip-text"
                                                style={{
                                                    fontFamily: "Helvetica, Arial, sans-serif",
                                                    fontSize: 12
                                                }}
                                            >
                                                <div className="apexcharts-tooltip-y-group">
                                                    <span className="apexcharts-tooltip-text-label" />
                                                    <span className="apexcharts-tooltip-text-value" />
                                                </div>
                                                <div className="apexcharts-tooltip-z-group">
                                                    <span className="apexcharts-tooltip-text-z-label" />
                                                    <span className="apexcharts-tooltip-text-z-value" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-12">
                        <div className="iq-card">
                            <div className="iq-card-body">

                                <ul
                                    className="nav nav-tabs justify-content-center"
                                    id="myTab-2"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link active"
                                            id="home-tab-justify"
                                            data-bs-toggle="tab"
                                            href="#home-justify"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            Current Script
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            id="profile-tab-justify"
                                            data-bs-toggle="tab"
                                            href="#profile-justify"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            Open Position
                                        </a>
                                    </li>

                                </ul>
                                <div className="tab-content" id="myTabContent-3">
                                    <div
                                        className="tab-pane fade show active"
                                        id="home-justify"
                                        role="tabpanel"
                                        aria-labelledby="home-tab-justify"
                                    >

                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Scalping</h4>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='btn btn-primary' onClick={handleAddScript1}>Add Script</button>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>

                                                            <th>Sr.No</th>
                                                            <th>Trading</th>
                                                            <th>Square off</th>
                                                            <th>Update Script</th>
                                                            <th>Scalp Type</th>
                                                            <th>Exchange</th>
                                                            <th>Symbol</th>
                                                            <th>Token</th>
                                                            <th>Trade Type</th>
                                                            <th>Target Value</th>
                                                            <th>Sl Value</th>
                                                            <th>Quantity</th>
                                                            <th>Trading</th>
                                                            <th>Expiry date</th>
                                                            <th>Trade Execution</th>
                                                            <th>Exit Day</th>
                                                            <th>Entry Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="row-1">
                                                            <td>1</td>
                                                            <td><div className="iq-checkbox-mail">
                                                                <div className="custom-control custom-checkbox" style={{ textAlign: "center" }}>
                                                                    <input type="checkbox" className="custom-control-input" id="mailk" />
                                                                    <label className="custom-control-label" htmlFor="mailk" />
                                                                </div>
                                                            </div>



                                                            </td>
                                                            <td style={{ textAlign: "center" }}><a href="#">
                                                                <i className="ri-delete-bin-line" style={{ "fontSize": "22px" }} />
                                                            </a>

                                                            </td>




                                                            <td style={{ textAlign: "center" }}>
                                                                <button data-bs-toggle="modal" data-bs-target="#myModal" style={{ border: "none" }}>
                                                                    <i class="las la-edit" style={{ "fontSize": "23px" }}></i>
                                                                </button>
                                                                {/* <a href="" id='modal1' data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg"></a> */}
                                                            </td>

                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>$320,800</td>
                                                        </tr>

                                                    </tbody>

                                                </table>
                                            </div>

                                        </div>



                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Option</h4>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='btn btn-primary' onClick={handleAddScript2}>Add Script</button>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                <table id="datatable1" className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>

                                                            <th>Sr.No</th>
                                                            <th>Trading</th>
                                                            <th>Square off</th>
                                                            <th>Update Script</th>
                                                            <th>Scalp Type</th>
                                                            <th>Exchange</th>
                                                            <th>Symbol</th>
                                                            <th>Token</th>
                                                            <th>Trade Type</th>
                                                            <th>Target Value</th>
                                                            <th>Sl Value</th>
                                                            <th>Quantity</th>
                                                            <th>Trading</th>
                                                            <th>Expiry date</th>
                                                            <th>Trade Execution</th>
                                                            <th>Exit Day</th>
                                                            <th>Entry Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="row-1">
                                                            <td>1</td>
                                                            <td><div className="iq-checkbox-mail">
                                                                <div className="custom-control custom-checkbox" style={{ textAlign: "center" }}>
                                                                    <input type="checkbox" className="custom-control-input" id="mai" />
                                                                    <label className="custom-control-label" htmlFor="mai" />
                                                                </div>
                                                            </div>



                                                            </td>
                                                            <td style={{ textAlign: "center" }}><a href="#">
                                                                <i className="ri-delete-bin-line" style={{ "fontSize": "22px" }} />
                                                            </a>

                                                            </td>




                                                            <td style={{ textAlign: "center" }}>
                                                                <button data-bs-toggle="modal" data-bs-target="#myModal1" style={{ border: "none" }}>
                                                                    <i class="las la-edit" style={{ "fontSize": "23px" }}></i>
                                                                </button></td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>$320,800</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Pattern</h4>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='btn btn-primary' onClick={handleAddScript3}>Add Script</button>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                <table id="datatable2" className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>

                                                            <th>Sr.No</th>
                                                            <th>Trading</th>
                                                            <th>Square off</th>
                                                            <th>Update Script</th>
                                                            <th>Scalp Type</th>
                                                            <th>Exchange</th>
                                                            <th>Symbol</th>
                                                            <th>Token</th>
                                                            <th>Trade Type</th>
                                                            <th>Target Value</th>
                                                            <th>Sl Value</th>
                                                            <th>Quantity</th>
                                                            <th>Trading</th>
                                                            <th>Expiry date</th>
                                                            <th>Trade Execution</th>
                                                            <th>Exit Day</th>
                                                            <th>Entry Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="row-1">
                                                            <td>1</td>
                                                            <td><div className="iq-checkbox-mail">
                                                                <div className="custom-control custom-checkbox" style={{ textAlign: "center" }}>
                                                                    <input type="checkbox" className="custom-control-input" id="mail1" />
                                                                    <label className="custom-control-label" htmlFor="mail1" />
                                                                </div>
                                                            </div>



                                                            </td>
                                                            <td style={{ textAlign: "center" }}><a href="#">
                                                                <i className="ri-delete-bin-line" style={{ "fontSize": "22px" }} />
                                                            </a>

                                                            </td>




                                                            <td style={{ textAlign: "center" }}> <button data-bs-toggle="modal" data-bs-target="#myModal2" style={{ border: "none" }}>
                                                                <i class="las la-edit" style={{ "fontSize": "23px" }}></i>
                                                            </button></td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>$320,800</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="profile-justify"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab-justify"
                                    >
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Scalping</h4>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>

                                                            <th>Sr.No</th>

                                                            <th>Scalp Type</th>
                                                            <th>Exchange</th>
                                                            <th>Symbol</th>
                                                            <th>Token</th>
                                                            <th>Trade Type</th>
                                                            <th>Target Value</th>
                                                            <th>Sl Value</th>
                                                            <th>Quantity</th>
                                                            <th>Trading</th>
                                                            <th>Expiry date</th>
                                                            <th>Trade Execution</th>
                                                            <th>Exit Day</th>
                                                            <th>Entry Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="row-1">
                                                            <td>1</td>

                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>$320,800</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Option</h4>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>

                                                            <th>Sr.No</th>

                                                            <th>Scalp Type</th>
                                                            <th>Exchange</th>
                                                            <th>Symbol</th>
                                                            <th>Token</th>
                                                            <th>Trade Type</th>
                                                            <th>Target Value</th>
                                                            <th>Sl Value</th>
                                                            <th>Quantity</th>
                                                            <th>Trading</th>
                                                            <th>Expiry date</th>
                                                            <th>Trade Execution</th>
                                                            <th>Exit Day</th>
                                                            <th>Entry Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="row-1">
                                                            <td>1</td>

                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>$320,800</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Pattern</h4>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                <table id="datatable" className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>

                                                            <th>Sr.No</th>
                                                            <th>Scalp Type</th>
                                                            <th>Exchange</th>
                                                            <th>Symbol</th>
                                                            <th>Token</th>
                                                            <th>Trade Type</th>
                                                            <th>Target Value</th>
                                                            <th>Sl Value</th>
                                                            <th>Quantity</th>
                                                            <th>Trading</th>
                                                            <th>Expiry date</th>
                                                            <th>Trade Execution</th>
                                                            <th>Exit Day</th>
                                                            <th>Entry Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="row-1">
                                                            <td>1</td>

                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>$320,800</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* <div className="iq-card-body">
                                <div className="table-responsive">
                                    <table id="datatable" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Discontinue Trade</th>

                                                <th>Square off</th>
                                                <th>Sr.No</th>
                                                <th>Scalp Type</th>
                                                <th>Exchange</th>
                                                <th>Symbol</th>
                                                <th>Token</th>
                                                <th>Trade Type</th>
                                                <th>Target Value</th>
                                                <th>Sl Value</th>
                                                <th>Quantity</th>
                                                <th>Trading</th>
                                                <th>Expiry date</th>
                                                <th>Trade Execution</th>
                                                <th>Exit Day</th>
                                                <th>Entry Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="row-1">
                                                <td><a class="rtl-switch-toogle"><span class="form-check form-switch">
                                                    <input class="form-check-input rtl-switch" type="checkbox" role="switch" id="discontinue-1" onclick="toggleTrade(1)" /><span class="rtl-toggle-tooltip ltr-tooltip">on</span><span class="rtl-toggle-tooltip rtl-tooltip">off</span></span></a></td>

                                                <td><a href="#">
                                                    <i className="ri-delete-bin-line" />
                                                </a>
                                                </td>
                                                <td>1</td>
                                                <td>System Architect</td>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div> */}


                        </div>
                    </div>

                </div>


            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Update Script Parameter</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body"><div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="validationDefault03">Measurement Type</label>
                                    <select className="form-select" required="">
                                        <option value=""></option>
                                        <option value={1}>Point</option>
                                        <option value={2}>Percentage</option>

                                    </select>
                                </div>

                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault01">Quantity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="validationDefault01"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault02">Target</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="validationDefault02"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault02">Stoploss</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="validationDefault02"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault03">First Trade Lower Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="validationDefault03"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault03">First Trade Higeher Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="validationDefault03"
                                    required=""
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault05">Lower Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault05">Higher Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="form-group">
                                    <label htmlFor="validationDefault03">Hold/Exit
                                    </label>
                                    <select className="form-select" required="">

                                        <option value={1}>Hold</option>
                                        <option value={2}>Exit</option>

                                    </select>
                                </div>

                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationDefault05">Entry Time</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationDefault05">Exit Time</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                        </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal" id="myModal1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Update Script Parameter</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body"><div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="validationDefault03">Measurement Type</label>
                                    <select className="form-select" required="">
                                        <option value=""></option>
                                        <option value={1}>Point</option>
                                        <option value={2}>Percentage</option>

                                    </select>
                                </div>

                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault01">Quantity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault01"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault02">Target</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault02"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault02">Stoploss</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault02"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault03">First Trade Lower Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault03"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault03">First Trade Higeher Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault03"
                                    required=""
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault05">Lower Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault05">Higher Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="form-group">
                                    <label htmlFor="validationDefault03">Hold/Exit
                                    </label>
                                    <select className="form-select" required="">

                                        <option value={1}>Hold</option>
                                        <option value={2}>Exit</option>

                                    </select>
                                </div>

                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationDefault05">Entry Time</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationDefault05">Exit Time</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                        </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal" id="myModal2">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Update Script Parametre</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body"><div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <label htmlFor="validationDefault03">Measurement Type</label>
                                    <select className="form-select" required="">
                                        <option value=""></option>
                                        <option value={1}>Point</option>
                                        <option value={2}>Percentage</option>

                                    </select>
                                </div>

                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault01">Quantity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault01"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault02">Target</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault02"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault02">Stoploss</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault02"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault03">First Trade Lower Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault03"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault03">First Trade Higeher Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault03"
                                    required=""
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault05">Lower Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault05">Higher Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="form-group">
                                    <label htmlFor="validationDefault03">Hold/Exit
                                    </label>
                                    <select className="form-select" required="">

                                        <option value={1}>Hold</option>
                                        <option value={2}>Exit</option>

                                    </select>
                                </div>

                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationDefault05">Entry Time</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationDefault05">Exit Time</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                        </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdashboard
