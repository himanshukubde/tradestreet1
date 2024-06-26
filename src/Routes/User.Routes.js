import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Dashboard from '../components/user/userdash/Userdashboard';
import Broker from '../components/user/broker/Userbroker';
import Addscript from '../components/user/userscript/Addscript.scalping';
import Allscript from '../components/user/userscript/AllScript';
import Profile from '../components/user/userprofile/Profile';
import AddScriptOption from '../components/user/userscript/AddScript.Option'
import LastPattern from '../components/user/pattern/LastPattern';
import Editprofile from '../components/user/userprofile/Editprofile';
import Discription from '../components/user/describe/Discription';
import Tradehistory from '../components/user/Tradehistory/Tradehistory';
import Updateparameter from '../components/user/parameter/Updateparameter';
import Traderesponse from '../components/user/TradeResponse/Traderesponse';
import ProfitAndLoss from '../components/user/ProfitAndLoss/ProfitAndLoss';
import Pannel from '../components/user/track/Pannel';

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
            <Route path="/lastpattern" element={<LastPattern />} />

            <Route path="/addscript/scalping" element={<Addscript />} />

            <Route path="/addscript/option" element={<AddScriptOption />} />
            <Route path="/discription" element={<Discription />} />
            <Route path="/tradehistory" element={<Tradehistory />} />
            <Route path="/updateparameter" element={<Updateparameter />} />
            <Route path="/traderesponse" element={<Traderesponse />} />
            <Route path="/profitandloss" element={<ProfitAndLoss />} />
            <Route path="/pannel" element={<Pannel />} />
          </Routes>
          <Footer />
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default UserRoute;
