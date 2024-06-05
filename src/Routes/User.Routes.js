import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Dashboard from '../components/user/userdash/Userdashboard';
import Broker from '../components/user/broker/Userbroker';
import Script from '../components/user/script/Userscript';


const UserRoute = () => {
 
  return (
    <>
      <div className='wrapper'>
        <Sidebar />
        <div id="content-page" className="content-page">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/broker" element={<Broker />} />
            <Route path="/script" element={<Script />} />
          </Routes>
          <Footer />
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default UserRoute;
