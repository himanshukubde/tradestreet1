import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Coptyscript from './Copyscript'

const Userdashboard = () => {
    const [selectStrategyType, setStrategyType] = useState('')
    const [activeTab1, setActiveTab1] = useState('CurrentPosition')
    const [activeTab, setActiveTab] = useState('copyScript')
    const [subTab, setSubTab] = useState('scalping')


    console.log("activeTab", activeTab)


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-body">
                            <ul className="nav nav-tabs justify-content-center" id="myTab-2" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a
                                        className={`nav-link ${activeTab1 === 'CurrentPosition' ? 'active' : ''}`}
                                        id="home-tab-justify"
                                        data-bs-toggle="tab"
                                        href="#home-justify"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected={activeTab1 === 'CurrentPosition'}
                                        onClick={() => setActiveTab1('CurrentPosition')}
                                    >
                                        Current Position
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className={`nav-link ${activeTab1 === 'OpenPosition' ? 'active' : ''}`}
                                        id="profile-tab-justify"
                                        data-bs-toggle="tab"
                                        href="#profile-justify"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected={activeTab1 === 'OpenPosition'}
                                        onClick={() => setActiveTab1('OpenPosition')}
                                    >
                                        Open Position
                                    </a>
                                </li>
                            </ul>


                            <div className='row'>

                                {activeTab1 === 'CurrentPosition' && (

                                    <div className='d-flex'>

                                        <div className="form-group col-md-6 ms-2">
                                            <label>Type</label>
                                            <select className="form-select" required=""
                                                onChange={(e) => { setActiveTab(e.target.value) }}
                                                value={activeTab}>
                                                <option value="copyScript">Copy Script</option>
                                                <option value="group">Group Script</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-3 ms-2">
                                            <label>Strategy Type</label>
                                            <select className="form-select" required=""
                                                onChange={(e) => { setSubTab(e.target.value) }}
                                                value={subTab}>
                                                <option value="scalping">Scalping</option>
                                                <option value="optionStrategy">Option Strategy</option>
                                                <option value="pattern">Pattern Script</option>
                                            </select>
                                        </div>

                                        {activeTab == "group" && (
                                            <div className="form-group col-md-3 ms-2">
                                                <label>Group Name</label>
                                                <select className="form-select" required=""
                                                    onChange={(e) => { setSubTab(e.target.value) }}
                                                    value={subTab}>
                                                    <option value="scalping">Scalping</option>
                                                    <option value="optionStrategy">Option Strategy</option>
                                                    <option value="pattern">Pattern Script</option>
                                                </select>
                                            </div>
                                        )}

                                    </div>
                                )}
                            </div>


                            <div className="tab-content">
                                {activeTab1 === 'CurrentPosition' && (
                                    <>
                                        {activeTab === 'copyScript' && (
                                            <div className="tab-pane fade show active" id="home-justify" role="tabpanel">
                                                <div className="tab-content mt-3">
                                                    {subTab === 'scalping' && <Coptyscript data="scalping" />}
                                                    {subTab === 'optionStrategy' && <Coptyscript data="optionStrategy" />}
                                                    {subTab === 'pattern' && <Coptyscript data="pattern" />}
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'group' && (
                                            <div className="tab-pane fade show active" id="home-justify" role="tabpanel">
                                                <div className="tab-content mt-3">
                                                    {subTab === 'scalping' && <Coptyscript data="scalping" />}
                                                    {subTab === 'optionStrategy' && <Coptyscript data="optionStrategy" />}
                                                    {subTab === 'pattern' && <Coptyscript data="pattern" />}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdashboard
