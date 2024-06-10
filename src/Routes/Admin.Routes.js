import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboards from '../components/admin/Dashboard/Dashboards';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Adduser from '../components/admin/User/Adduser';
import Clientservice from '../components/admin/client/Clientservice';
import Tradehistory from '../components/admin/trade/Tradehistory';
import Allscript from '../components/admin/script/AllScript';
import Brokercredential from '../components/admin/broker/Brokercredential';
import Clientactivity from '../components/admin/client/Clientactivity';
import Clientreport from '../components/admin/client/Clientreport';
import Smtp from '../components/admin/detail/Smtp';
import Servicereport from '../components/admin/report/Servicereport';
import Strategygroup from '../components/admin/group/Strategygroup';
import Userlog from '../components/admin/User/Userlog';
import Addscript from '../components/admin/script/AddScript'
 



const AdminRoute = () => {
  return (
    <>

      <div className='wrapper'>
        <Sidebar />
        <div id="content-page" className="content-page">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboards />} />
            <Route path="/adduser" element={<Adduser />} />
            <Route path="/clientservice" element={<Clientservice />} />
            <Route path="/tradehistory" element={<Tradehistory />} />
            <Route path="/allscript" element={<Allscript />} />
            <Route path="/addscript" element={<Addscript />} />
            <Route path="/brokercredential" element={<Brokercredential />} />
            <Route path="/clientactivity" element={<Clientactivity />} />
            <Route path="/clientreport" element={<Clientreport />} />
            <Route path="/smtp" element={<Smtp />} />
            <Route path="/servicereport" element={<Servicereport />} />
            <Route path="/strategygroup" element={<Strategygroup />} />
            <Route path="/userlog" element={<Userlog />} />
          </Routes>
          <Footer />
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default AdminRoute;
