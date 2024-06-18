import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Dashboard from '../components/user/userdash/Userdashboard';
import Broker from '../components/user/broker/Userbroker';
import Addscript from '../components/user/userscript/Addscript';
import Allscript from '../components/user/userscript/AllScript';
import Profile from '../components/user/userprofile/Profile';
import AddScriptOption from '../components/user/userscript/AddScript.Option'
import Last from '../components/user/pattern/Last';
import Editprofile from '../components/user/userprofile/Editprofile';
import Discription from '../components/user/describe/Discription';
import Tradehistory from '../components/user/history/Tradehistory';
import Updateparameter from '../components/user/parameter/Updateparameter';

const UserRoute = () => {

  return (
    <>
      <div className='wrapper'>
        <Sidebar />
        <div id="content-page" className="content-page">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/allscript" element={<Allscript />} />
            <Route path="/broker" element={<Broker />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<Editprofile />} />
            <Route path="/last" element={<Last />} />

            <Route path="/addscript/scalping" element={<Addscript />} />
            
            <Route path="/addscript/option" element={<AddScriptOption />} />
            <Route path="/discription" element={<Discription />} />
            <Route path="/tradehistory" element={<Tradehistory />} />
            <Route path="/updateparameter" element={<Updateparameter />} />
          </Routes>
          <Footer />
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default UserRoute;
