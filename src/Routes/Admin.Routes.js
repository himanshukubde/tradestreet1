import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboards from '../components/admin/Dashboard/Dashboards';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/layouts/Header';
import Adduser from '../components/admin/User/Adduser';
import Clientservice from '../components/admin/User/Clientservice';
import Tradehistory from '../components/admin/trade/Tradehistory';
import Allscript from '../components/admin/AdminScript/AllScript';
import Clientactivity from '../components/admin/User/Clientactivity';
import Clientreport from '../components/admin/User/Clientreport';
import Smtp from '../components/admin/Smtp/Smtp';
import UserLogs from '../components/admin/User/UserLogs';
import StrategyGroup from '../components/admin/Groups/StrategyGroup';
import ServiceReport from '../components/admin/User/ServiceReport';
import Addscript from '../components/admin/script/Addscript.Scalping';
import AddScriptOption from '../components/admin/script/AddScript.Option'
import PatternScript from '../components/admin/script/AddScript.Pattern'




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
            <Route path="/addscript/scalping" element={<Addscript />} />
            <Route path="/addscript/pattern" element={<PatternScript />} />
            <Route path="/clientactivity" element={<Clientactivity />} />
            <Route path="/clientreport" element={<Clientreport />} />
            <Route path="/smtp" element={<Smtp />} />
            <Route path="/userlogs" element={<UserLogs />} />
            <Route path="/strategygroup" element={<StrategyGroup />} />
            <Route path="/servicerepor" element={<ServiceReport />} />
            <Route path="/addscript/option" element={<AddScriptOption />} />
           
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default AdminRoute;
