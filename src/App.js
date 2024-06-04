import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboards from './components/admin/Dashboard/Dashboards';
import Sidebar from './components/layouts/Sidebar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Adduser from './components/admin/User/Adduser';
import Clientservice from './components/admin/client/Clientservice';
import Tradehistory from './components/admin/trade/Tradehistory';
import Addscript from './components/admin/script/Addscript';
import Brokercredential from './components/admin/broker/Brokercredential';
import Clientactivity from './components/admin/client/Clientactivity';
import Clientreport from './components/admin/client/Clientreport';
import Smtp from './components/admin/detail/Smtp';
import Servicereport from './components/admin/report/Servicereport';
import Strategygroup from './components/admin/group/Strategygroup';
import Userlog from './components/admin/User/Userlog';
import Login from './components/auth/Login1';
import Userdashboard from './components/user/userdash/Userdashboard';
import Userbroker from './components/user/broker/Userbroker';
import Userscript from './components/user/script/Userscript';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {isLoginPage ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <div className='wrapper'>
          <Sidebar />
          <div id="content-page" className="content-page">
            <Header />
            <Routes>
              {/* ----------------Admin routes-------------------- */}
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/dashboards" element={<Dashboards />} />
              <Route path="/adduser" element={<Adduser />} />
              <Route path="/clientservice" element={<Clientservice />} />
              <Route path="/tradehistory" element={<Tradehistory />} />
              <Route path="/addscript" element={<Addscript />} />
              <Route path="/brokercredential" element={<Brokercredential />} />
              <Route path="/clientactivity" element={<Clientactivity />} />
              <Route path="/clientreport" element={<Clientreport />} />
              <Route path="/smtp" element={<Smtp />} />
              <Route path="/servicereport" element={<Servicereport />} />
              <Route path="/strategygroup" element={<Strategygroup />} />
              <Route path="/userlog" element={<Userlog />} />


              {/* ----------------User routes-------------------- */}
              <Route path="/userdashboard" element={<Userdashboard />} />
              <Route path="/userbroker" element={<Userbroker />} />
                <Route path="/userscript" element={<Userscript />} />

            </Routes>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
