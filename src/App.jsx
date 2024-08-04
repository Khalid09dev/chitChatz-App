// import messengerSound from './assets/sound/notification.mp3';
import {Outlet} from 'react-router-dom'; 
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-[#EFF6FC] pl-8 h-screen flex">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
