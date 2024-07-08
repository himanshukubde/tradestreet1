import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const role = localStorage.getItem("Role");
    const [isActive, setIsActive] = useState(true);
    const [activeItem, setActiveItem] = useState(''); // State to track active item
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('sidebar-main');
        } else {
            document.body.classList.remove('sidebar-main');
        }
    }, [isActive]);

    const handleClick = () => {
        setIsActive(prevState => !prevState);
    };

    const handleSidebarClick = (event, item) => {
        setActiveItem(item);
    };

    useEffect(() => {
        const sidebar = sidebarRef.current;

        const handleSidebarItemClick = (event) => {
            const li = event.currentTarget;
            const submenu = li.querySelector('.iq-submenu');

            if (li.classList.contains('menu-open')) {
                if (submenu) {
                    submenu.style.display = 'none';
                }
                li.classList.remove('menu-open');
                const openItems = li.querySelectorAll('.menu-open');
                openItems.forEach((item) => {
                    item.classList.remove('menu-open');
                });
            } else if (submenu) {
                submenu.style.display = 'block';
                li.classList.add('menu-open');
                submenu.classList.add('menu-open');
            }
        };

        const activeItems = sidebar.querySelectorAll('.iq-sidebar-menu .active');
        activeItems.forEach((item) => {
            const submenu = item.querySelector('.iq-submenu');
            if (submenu) {
                item.classList.add('menu-open');
                submenu.classList.add('menu-open');
            }
        });

        const sidebarItems = sidebar.querySelectorAll('.iq-sidebar-menu li');
        sidebarItems.forEach((item) => {
            item.addEventListener('click', handleSidebarItemClick);
        });

        return () => {
            sidebarItems.forEach((item) => {
                item.removeEventListener('click', handleSidebarItemClick);
            });
        };
    }, []);

    return (
        <div className="iq-sidebar">
            <div className="iq-sidebar-logo d-flex justify-content-between">
                <a href="#">
                    <img src="/assets/images/tradstreet.png" className="img-fluid" alt="Logo" />
                    {/* <span>Trade</span> */}
                </a>
                <div className="iq-menu-bt-sidebar">
                    <div className="iq-menu-bt align-self-center">
                        <div onClick={handleClick} className={`wrapper-menu ${isActive ? 'open' : ''}`}>
                            <div className="main-circle">
                                <i className="ri-more-fill" />
                            </div>
                            <div className="hover-circle">
                                <i className="ri-more-2-fill" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="sidebar-scrollbar"
                data-scrollbar="true"
                tabIndex={-1}
                style={{ overflow: 'hidden', outline: 'none' }}
            >
                <div className="scroll-content">
                    <nav ref={sidebarRef} className="iq-sidebar-menu">
                        <ul className="iq-menu">
                            {role === 'Admin' ? (
                                <>
                                    <li className={activeItem === 'dashboard' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'dashboard')}>
                                        <Link to="/admin/dashboard" className="iq-waves-effect">
                                            <i className="ri-hospital-fill" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>

                                    <li className={activeItem === 'strategygroup' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'strategygroup')}>
                                        <Link to="/admin/strategygroup" className="iq-waves-effect">
                                            <i className="la la-sellsy" />
                                            <span>Strategies Group</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'allscript' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'allscript')}>
                                        <Link to="/admin/allscript" className="iq-waves-effect">
                                            <i className="ri-home-8-fill" />
                                            <span>Add Script</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'clientservice' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'clientservice')}>
                                        <Link to="/admin/clientservice" className="iq-waves-effect">
                                            <i className="ri-group-fill" />
                                            <span>Client Service</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'brokercredential' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'brokercredential')}>
                                        <Link to="/admin/brokercredential" className="iq-waves-effect">
                                            <i className="lab la-mendeley" />
                                            <span>Broker Credential</span>
                                        </Link>
                                    </li>
                                     
                                    <li className={activeItem === 'userlogs' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'userlogs')}>
                                        <Link to="/admin/userlogs" className="iq-waves-effect">
                                            <i className="la la-envelope-open" />
                                            <span>User Panel Log</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'servicereport' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'servicereport')}>
                                        <Link to="/admin/servicerepor" className="iq-waves-effect">
                                            <i className="la la-cog" />
                                            <span>Service Report</span>
                                        </Link>
                                    </li>

                                    <li className={activeItem === 'tradehistory' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'tradehistory')}>
                                        <Link to="/admin/tradehistory" className="iq-waves-effect">
                                            <i className="las la-history"></i>
                                            <span>Trade History</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'clientactivity' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'clientactivity')}>
                                        <Link to="/admin/clientactivity" className="iq-waves-effect">
                                            <i className="las la-radiation-alt" />
                                            <span>Client Activity</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'clientreport' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'clientreport')}>
                                        <Link to="/admin/clientreport" className="iq-waves-effect">
                                            <i className="la la-map-marker" />
                                            <span>Client Thread Report</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'smtp' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'smtp')}>
                                        <Link to="/admin/smtp" className="iq-waves-effect">
                                            <i className="la la-palette" />
                                            <span>SMTP Details</span>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className={activeItem === '/user/dashboard' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, '/user/dashboard')}>
                                        <Link to="/user/dashboard" className="iq-waves-effect">
                                            <i className="ri-hospital-fill" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>

                                    </li>
                                    <li className={activeItem === 'technical/pattern' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'technical/pattern')}>

                                        <Link to="technical/pattern" className="iq-waves-effect">
                                            <i className="lab la-joget" />
                                            <span>Technical Patterns</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'lastpattern' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'lastpattern')}>
                                        <Link to="lastpattern" className="iq-waves-effect">
                                            <i className="lab la-ioxhost" />
                                            <span>Last Patterns</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'tradehistory' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'tradehistory')}>
                                        <Link to="tradehistory" className="iq-waves-effect">
                                            <i className="la la-palette" />
                                            <span>Trade History</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'tradereport' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'tradereport')}>
                                        <Link to="tradereport" className="iq-waves-effect">
                                            <i className="la la-sellsy" />
                                            <span>Trade Report</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'traderesponse' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'traderesponse')}>
                                        <Link to="traderesponse" className="iq-waves-effect">
                                            <i className="la la-sellsy" />
                                            <span>Trade Response</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'profitandloss' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'profitandloss')}>
                                        <Link to="profitandloss" className="iq-waves-effect">
                                            <i className="las la-universal-access" />
                                            <span>Net P&L</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'pannel' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'pannel')}>
                                        <Link to="pannel" className="iq-waves-effect">
                                            <i className="lab la-ello" />
                                            <span>Panel Track</span>
                                        </Link>
                                    </li>
                                    <li className={activeItem === 'discription' ? 'active' : ''} onClick={(e) => handleSidebarClick(e, 'discription')}>
                                        <Link to="discription" className="iq-waves-effect">
                                            <i className="lab la-get-pocket" />
                                            <span>Description</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                    <div className="p-3" />
                </div>
                <div className="scrollbar-track scrollbar-track-x" style={{ display: 'none' }}>
                    <div
                        className="scrollbar-thumb scrollbar-thumb-x"
                        style={{ width: 80, transform: 'translate3d(0px, 0px, 0px)' }}
                    />
                </div>
                <div className="scrollbar-track scrollbar-track-y" style={{ display: 'block' }}>
                    <div
                        className="scrollbar-thumb scrollbar-thumb-y"
                        style={{
                            height: '84.5734px',
                            transform: 'translate3d(0px, 0px, 0px)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
