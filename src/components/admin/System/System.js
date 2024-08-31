import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Add_Group, GetGroupNames } from '../../CommonAPI/Admin';
import GridExample from '../../../ExtraComponent/CommanDataTable'
import { SquarePen } from 'lucide-react';
import AddForm from '../../../ExtraComponent/FormData';
import { useFormik } from 'formik';

const Strategygroup = () => {
    const [getGroupData, setGroupData] = useState({
        loading: true,
        data: []
    });
    const [showModal, setShowModal] = useState(false);
  

    const columns = [
        {
            name: "S.No",
            label: "S.No",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const rowIndex = tableMeta.rowIndex;
                    return rowIndex + 1;
                }
            },
        },
        {
            name: "GroupName",
            label: "Favicon",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Fund_Requierment",
            label: "Logo",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Risk",
            label: "login Image",
            options: {
                filter: true,
                sort: true,
            }
        },
        
        {
            name: 'Edit',
            label: 'Action',
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => (
                    <SquarePen
                        onClick={() => {
                            setShowModal(true);
                            
                        }}
                    />
                ),
            },
        },
    ];

    const GetAllGroupDetails = async () => {
        try {
            await GetGroupNames()
                .then((response) => {
                    if (response.Status) {
                        setGroupData({
                            loading: false,
                            data: response.Data
                        });
                    } else {
                        setGroupData({
                            loading: false,
                            data: []
                        });
                    }
                })
                .catch((err) => {
                    console.log("Error Group data fetch error", err);
                });
        } catch {
            console.log("Error Group data fetch error");
        }
    };

    useEffect(() => {
        GetAllGroupDetails();
    }, [ ]);

   
    const fields = [
        {
            name: 'Panelname',
            label: 'Panel Name',
            type: 'text',
            label_size: 12,
            col_size: 6,
        },
        {
            name: 'Logo',
            label: 'Logo',
            type: 'file1',
            label_size: 12,
            col_size: 6,
        },
        {
            name: 'Favicon',
            label: 'Favicon',
            type: 'file1',
            label_size: 12,
            col_size: 6,
        },
        {
            name: 'loginImg',
            label: 'Broker',
            type: 'file1',
            label_size: 12,
            col_size: 6,
        },
    ];


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
             
            return errors;
        },
        onSubmit: async (values) => {
            const data  = {
                Panelname: values.Panelname,
                Logo: values.Logo,
                Favicon: values.Favicon,
                loginImg: values.loginImg,
            };

            }
             
        },
    );
  

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">System</h4>
                            </div>
                            
                        </div>

                        <div className="iq-card-body">
                            <div className="table-responsive customtable">

                                <GridExample
                                    columns={columns}
                                    data={getGroupData.data}
                                    checkBox={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className='modal custom-modal d-flex' id='add_vendor' role='dialog'>
                    <div className='modal-dialog modal-dialog-centered modal-lg'>
                        <div className='modal-content'>
                            <div className='modal-header clientheader border-0 pb-0'>
                                <div className='form-header modal-header-title text-start mb-0'>
                                    <h4 className='mb-0'>Update</h4>
                                </div>
                                <button
                                    type='button'
                                    className='btn-close'
                                    data-bs-dismiss='modal'
                                    aria-label='Close'
                                    onClick={() => {
                                        setShowModal(false);
                                        formik.resetForm();
                                        
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
                                
                            />
                        </div>
                    </div>
                </div>
            )}

             
        </>
    );
};

export default Strategygroup;
