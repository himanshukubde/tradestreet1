import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Coptyscript from './Copyscript'
import GroupScript from './Groupscript'
import CurrentScript from './CurrentScript'
import { GetAllUserGroup } from '../../Common API/User'

const Userdashboard = () => {
    const userName = localStorage.getItem('name')
    const [selectStrategyType, setStrategyType] = useState('')
    const [activeTab1, setActiveTab1] = useState('CurrentPosition')
    const [activeTab, setActiveTab] = useState('copyScript')
    const [subTab, setSubTab] = useState('Scalping')
    const [refresh , setRefresh] = useState(false)
    const [getGroup, setGroup] = useState('')
    const [getGroupName, setGroupName] = useState({
        loading: true,
        data: []
    })


    const getUserAllGroup = async () => {
        const data = { User: userName }
        await GetAllUserGroup(data)
            .then((response) => {
                if (response.Status) {
                    setRefresh(!refresh)
                    setGroupName({
                        loading: false,
                        data: response.Data
                    })
                }
                else {
                    setGroupName({
                        loading: false,
                        data: []
                    })
                    

                }
            })
            .catch((err) => {
                console.log("Error in finding the group name", err)
            })
    }


    useEffect(() => {
        getUserAllGroup()
    }, [activeTab , refresh])


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
                                                <option value="currentScript">Current Script</option>
                                                <option value="copyScript">Copy Script</option>
                                                <option value="group">Group Script</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-3 ms-2">
                                            <label>Strategy Type</label>
                                            <select className="form-select" required=""
                                                onChange={(e) => { setSubTab(e.target.value) }}
                                                value={subTab}>
                                                <option value="Scalping">Scalping</option>
                                                <option value="Option Strategy">Option Strategy</option>
                                                <option value="Pattern">Pattern Script</option>
                                            </select>
                                        </div>

                                        {activeTab == "group" && (
                                            <div className="form-group col-md-3 ms-2">
                                                <label>Group Name</label>
                                                <select className="form-select" required=""
                                                    onChange={(e) => { setGroup(e.target.value) }}
                                                    value={getGroup}>
                                                    <option value=''>Select Group Name</option>
                                                    {
                                                        getGroupName && getGroupName.data.map((item) => {
                                                            return <option value={item}>{item}</option>

                                                        })
                                                    }

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
                                                    {subTab && <Coptyscript data={subTab} selectedType={activeTab} />}
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'group' && (
                                            <div className="tab-pane fade show active" id="home-justify" role="tabpanel">
                                                <div className="tab-content mt-3">
                                                    {subTab && <GroupScript data={subTab} selectedType={activeTab} GroupName={getGroup} />}
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === 'currentScript' && (
                                            <div className="tab-pane fade show active" id="home-justify" role="tabpanel">
                                                <div className="tab-content mt-3">
                                                    {subTab && <CurrentScript data={subTab} selectedType={activeTab}/>}
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
