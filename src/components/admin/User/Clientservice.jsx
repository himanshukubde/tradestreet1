import React, { useEffect, useState } from 'react';
import { GetClientService, Get_Broker_Name, GetGroupNames, ExtendEndDate, EditClientPanle, ServiceCount } from '../../CommonAPI/Admin';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { Link } from 'react-router-dom';
import { SquarePen } from 'lucide-react';
import { useFormik } from 'formik';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';
import AddForm from '../../../ExtraComponent/FormData';
import Swal from 'sweetalert2';
import {ClientServiceColumn} from './UserAllColumn'

const Clientservice = () => {
    const [clientService, setClientService] = useState({ loading: true, data: [] });
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [optionsArray, setOptionsArray] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [groupData, setGroupData] = useState({ loading: true, data: [] });
    const [brokers, setBrokers] = useState({ loading: true, data: [] });
    const [getServiceCount, setServiceCount] = useState([]);
    const [getExtendDate, setExtendDate] = useState([]);
    const [getDate, setExDate] = useState('');
    const [refresh, setRefresh] = useState(false)

     

    useEffect(() => {
        const fetchBrokerName = async () => {
            try {
                const response = await Get_Broker_Name();
                if (response.Status) {

                  
                    const brokerList = response.Brokernamelist.filter(item => item.BrokerName !== 'DEMO');
                    setBrokers({ loading: false, data: brokerList });
                } else {
                    setBrokers({ loading: false, data: [] });
                }
            } catch (error) {
                console.log('Error in fetching brokers', error);
            }
        };

        fetchBrokerName();
    }, []);


    const fetchClientService = async () => {
        try {
            const response = await GetClientService();
            if (response.Status) {

                setClientService({ loading: false, data: response.Data });
            } else {
                setClientService({ loading: false, data: [] });
            }
        } catch (error) {
            console.log('Error in fetching client services', error);
        }
    };

    useEffect(() => {
        fetchClientService();
    }, [refresh]);

    useEffect(() => {
        const fetchGroupDetails = async () => {
            try {
                const response = await GetGroupNames();
                if (response.Status) {
                    const options = response.Data.map(item => ({
                        label: item.GroupName,
                        key: item.GroupName,
                    }));
                    setOptionsArray(options);
                    setGroupData({ loading: false, data: response.Data });
                } else {
                    setGroupData({ loading: false, data: [] });
                }
            } catch (error) {
                console.log('Error in fetching group data', error);
            }
        };

        fetchGroupDetails();
    }, []);


    
    const formik = useFormik({
        initialValues: {
            User: "",
            Service_Count: "",
            Broker: "",
            Day: "",
            SSDate: "",
            SEDate: "",
            GroupName: "",
            select: ""
        },
        validate: values => {
            const errors = {};
            if (showModal && clientService.data[selectedIndex].BrokerName != "Demo" && !values.Select_Product_Type) {
                errors.Select_Product_Type = "Select Edit Type"
            }
            if (!values.Select_Broker) {
                errors.Select_Broker = "Select Broker Type"
            }
            if (showModal && clientService.data[selectedIndex].BrokerName === "Demo" && !values.Select_Day) {
                errors.Select_Day = "Select Days"
            }
            return errors;
        },
        onSubmit: async (values) => {
            const req = {
                User: showModal ? clientService.data[selectedIndex].Username : '',
                ser : values.Select_Day === 'todays' && showModal && clientService.data[selectedIndex].BrokerName === "Demo" ? 1 : values.Service_Count,
                Broker: values.Select_Broker,
                Day: showModal && clientService.data[selectedIndex].BrokerName === 'Demo' ? values.Select_Day : '',
                SSDate: values.Select_Product_Type === "Extend Service Count" && showModal && clientService.data[selectedIndex].BrokerName !== "Demo" ? getDate : form_Date,
                SEDate: formattedDate,
                GroupName: selectedOptions,
                select: values.Select_Product_Type
            };
            try {
                const response = await EditClientPanle(req);
                if (response.Status) {
                  
                    setRefresh(!refresh)
                    Swal.fire({
                        title: "Updated",
                        text: response.massage,
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true
                    });
                    setTimeout(() => {
                        setShowModal(false);
                        formik.resetForm();
                        setSelectedOptions([]);
                    }, 1500);
                } else {
                    Swal.fire({
                        title: "Error",
                        text: response.massage,
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
            } catch (err) {
                console.log("Error in update client", err);
            }
        },
    });

    const fields = [
        {
            name: 'Select_Product_Type',
            label: 'Product Type',
            type: 'select1',
            options: [
                { label: 'Add New Service', value: 'Add New Services' },
                { label: 'Extend Service Count', value: 'Extend Service Count' },
            ],
            showWhen: () => showModal && clientService.data[selectedIndex].BrokerName !== 'Demo',
            label_size: 12,
            col_size: 12,
        },
        {
            name: 'Select_Broker',
            label: 'Broker',
            type: 'select1',
            options: brokers.data.map(item => ({
                label: item.BrokerName,
                value: item.BrokerName,
            })),
            label_size: 12,
            col_size: 6,
        },
        {
            name: 'Select_Day',
            label: 'Day',
            type: 'select1',
            options: [
                { value: 'todays', label: 'Two Days' },
                { value: 'onemonth', label: 'One Month' },
            ],
            showWhen: () => showModal && clientService.data[selectedIndex].BrokerName === 'Demo',
            label_size: 12,
            col_size: 6,
        },
        {
            name: 'Service_Count',
            label: 'Service Count',
            type: 'select1',
            options: showModal && clientService.data[selectedIndex].BrokerName !== 'Demo' &&
                formik.values.Select_Product_Type === 'Extend Service Count'
                ? getServiceCount.map(item => ({
                    label: item,
                    value: item,
                }))
                : [
                    { label: '0', value: 0 },
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '5', value: 5 },
                ],
            showWhen: () =>
                showModal &&
                (clientService.data[selectedIndex].BrokerName !== 'Demo' ||
                    formik.values.Select_Day === 'onemonth'),
            label_size: 12,
            col_size: 6,
        },
    ];


    useEffect(()=>{
        formik.setFieldValue('Select_Product_Type', "Add New Services")
        formik.setFieldValue('Select_Broker', showModal && clientService.data[selectedIndex].BrokerName)
        formik.setFieldValue('Service_Count', 0)
    },[showModal])

    const Service_Count = async () => {
        if (showModal && clientService.data[selectedIndex].Username) {
            const data = { Username: showModal && clientService.data[selectedIndex].Username };
            try {
                const response = await ServiceCount(data);
                if (response.Status) {
                    setServiceCount(response.ServiceCount);
                } else {
                    setServiceCount('');
                }
            } catch (err) {
                console.log("Error in finding the service count", err);
            }
        }
    };

    const ExtendDate = async () => {
        if (showModal && clientService.data[selectedIndex].Username && showModal && clientService.data[selectedIndex].ServiceCount) {
            const data = { Username: showModal ? clientService.data[selectedIndex].Username : '', ser: showModal ? clientService.data[selectedIndex].ServiceCount : '' };
            try {
                const response = await ExtendEndDate(data);
                if (response.Status) {
                    setExtendDate(response.ServiceStartDate);
                } else {
                    setExtendDate([]);
                }
            } catch (err) {
                console.log("Error in finding the service count", err);
            }
        }
    };

    useEffect(() => {
        ExtendDate();
    }, [formik.values.Service_Count, formik.values.Select_Product_Type, showModal]);

    useEffect(() => {
        Service_Count();
    }, [showModal]);

    const columns = [
        {
            name: 'S.No',
            label: 'S.No',
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => tableMeta.rowIndex + 1,
            },
        },
        {
            name: 'Edit',
            label: 'Edit',
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => (
                    <SquarePen
                        onClick={() => {
                            setShowModal(true);
                            setSelectedIndex(tableMeta.rowIndex);
                        }}
                    />
                ),
            },
        },
        { 
            name: 'Username', 
            label: 'Username', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value) => value || '-' 
            } 
        },
        { 
            name: 'Mobile_No', 
            label: 'Mobile Number', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value) => value || '-' 
            } 
        },
        { 
            name: 'BrokerName', 
            label: 'Broker Name', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value) => value || '-' 
            } 
        },
        { 
            name: 'EmailId', 
            label: 'Email ID', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value) => value || '-' 
            } 
        },
        {
            name: 'Group',
            label: 'Group',
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => (
                    
                    <span>{Array.isArray(value) ? value.join(' , ') : value ? "-" : value || '-'}</span>
                ),
            }
        },
        { 
            name: 'CreateDate', 
            label: 'Account Create Date', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value) => value || '-' 
            } 
        },
        { 
            name: 'ServiceStartDate', 
            label: 'Service Start Date', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value) => value || '-' 
            } 
        },
        { 
            name: 'ServiceEndDate', 
            label: 'Service End Date', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value) => value || '-' 
            } 
        },
        { 
            name: 'Total Service Count', 
            label: 'Total Service Count', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value) => value || '-' 
            } 
        },
    ];
    
  
     
    const currentDate = new Date();
    currentDate.setDate(
        currentDate.getDate() +
        (formik.values.Select_Day === 'onemonth' ||
            (showModal && clientService.data[selectedIndex].BrokerName !== 'Demo')
            ? 30
            : formik.values.Select_Day === 'todays'
                ? 2
                : 0)
    );
    const formattedDate = currentDate.toISOString().split('T')[0];
    const fromDate = new Date();
    const form_Date = fromDate.toISOString().split('T')[0];


   
 
    useEffect(()=>{
        if(showModal)
        setSelectedOptions(showModal && clientService.data[selectedIndex].Group)
    },[showModal])
    return (
        <>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='iq-card'>
                        <div className='iq-card-header d-flex justify-content-between'>
                            <div className='iq-header-title'>
                                <h4 className='card-title'>Client Service</h4>
                            </div>
                            <Link to='/admin/adduser' className='btn btn-primary rounded'>
                                Add New Client
                            </Link>
                        </div>
                        <div className='iq-card-body'>
                            <FullDataTable columns={columns} data={clientService.data} checkBox={false} />
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className='modal custom-modal d-flex' id='add_vendor' role='dialog'>
                    <div className='modal-dialog modal-dialog-centered modal-xl'>
                        <div className='modal-content' style={{ width: '50rem' }}>
                            <div className='modal-header border-0 pb-0'>
                                <div className='form-header modal-header-title text-start mb-0'>
                                    <h4 className='mb-0'>Edit Client</h4>
                                </div>
                                <button
                                    type='button'
                                    className='btn-close'
                                    data-bs-dismiss='modal'
                                    aria-label='Close'
                                    onClick={() => {
                                        setShowModal(false);
                                        formik.resetForm();
                                        setSelectedOptions([]);
                                    }}
                                ></button>
                            </div>
                            <hr />
                            <AddForm
                                fields={fields.filter(
                                    field => !field.showWhen || field.showWhen(formik.values)
                                )}
                                btn_name='Update'
                                formik={formik}
                                btn_name1_route='/admin/clientservice'
                                additional_field={
                                    <div className='mt-2'>
                                        <div className='row'>
                                            {formik.values.Select_Day === 'todays' && showModal && clientService.data[selectedIndex].BrokerName === "Demo" && (
                                                <div className='col-lg-6'>
                                                    <h6>Service Count</h6>
                                                    <h4>1</h4>
                                                </div>
                                            )}
                                            {(formik.values.Select_Product_Type === "Add New Services" || showModal && clientService.data[selectedIndex].BrokerName === "Demo") ? (
                                                <div className='col-lg-3'>
                                                    <h6>Service Start Date</h6>
                                                    <h6>{form_Date}</h6>
                                                </div>
                                            ) : (
                                                <div className='col-lg-3'>
                                                    <h6>Service Start Date</h6>
                                                    <select
                                                        value={getDate}
                                                        onChange={(e) => setExDate(e.target.value)}
                                                        className="form-control"
                                                    >
                                                        <option value="">Select Service Type</option>
                                                        {getExtendDate.map((item) => (
                                                            <option value={item} key={item}>{item}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            )}
                                            <div className='col-lg-3'>
                                                <h6>Service End Date:</h6>
                                                <h6>{formattedDate}</h6>
                                            </div>
                                            <div className='col-lg-6'>
                                                <h6>Select Group</h6>
                                                <DropdownMultiselect
                                                    options={optionsArray}
                                                    name='groupName'
                                                    handleOnChange={(selected) => setSelectedOptions(selected)}
                                                    selected={showModal ? clientService.data[selectedIndex].Group : ''}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Clientservice;
