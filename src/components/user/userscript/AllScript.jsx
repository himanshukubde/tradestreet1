import React, { useState, useEffect } from 'react'
import { GetAllGroupService, GetGroupNames } from '../../Common API/Admin';
import { useNavigate } from 'react-router-dom';

const Addscript = () => {
    const navigate = useNavigate()
    const userName = localStorage.getItem('name')

    const [getGroupData, setGroupData] = useState({
        loading: true,
        data: []
    })
    const [refresh, setRefresh] = useState(false)
    const [selectGroup, setSelectGroup] = useState('')
    const [selectStrategyType, setStrategyType] = useState('')
    const [getAllService, setAllservice] = useState({
        loading: true,
        data: []
    })


 
    const GetAllGroupDetails = async () => {
        try {
            await GetGroupNames()
                .then((response) => {
                    if (response.Status) {
                        setGroupData({
                            loading: false,
                            data: response.StrGroupdf
                        })
                    }
                    else {
                        setGroupData({
                            loading: false,
                            data: []
                        })
                    }
                })
                .catch((err) => {
                    console.log("Group data fetch error", err)
                })
        }
        catch {
            console.log("Group data fetch error")
        }
    }

    useEffect(() => {
        GetAllGroupDetails()
    }, [])


    const getAllgroupService = async () => {
        const data = { Strategy: selectStrategyType, Group: selectGroup }
        await GetAllGroupService(data)
            .then((response) => {
                if (response.Status) {
                    setAllservice({
                        loading: false,
                        data: response.GroupScrdf
                    })
                    setRefresh(!refresh)
                }
                else {
                    setAllservice({
                        loading: false,
                        data: []
                    })
                    setRefresh(!refresh)

                }
            })
            .catch((err) => {
                console.log("Error in finding group service")
            })
    }

    useEffect(() => {
        getAllgroupService()
    }, [selectStrategyType, selectGroup])


    const handleAddScript = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: selectStrategyType };
        navigate(selectStrategyType == "Scalping" ? '/user/addscript/scalping' :
            selectStrategyType == "Option Strategy" ? '/user/addscript/option' : '/user/addscript/pattern', { state: { data } });
    }


    useEffect(() => {
        if (getGroupData.data && getGroupData.data.length > 0) {
            setSelectGroup(getGroupData.data[0].GroupName);
        }
    }, [getGroupData]);

    useEffect(() => {
        setStrategyType('Scalping')
    }, []);


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                       
                        <div className="iq-card-body">
                            <div className="iq-card-body">

                                <ul
                                    className="nav nav-tabs justify-content-center"
                                    id="myTab-2"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            id="home-tab-justify"
                                            data-bs-toggle="tab"
                                            href="#home-justify"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            Copy Script
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
                                            Group Script
                                        </a>
                                    </li>

                                </ul>
                                
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addscript
