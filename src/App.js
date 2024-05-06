
import {Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Gallary from './Pages/Gallary';
import OurMission from './Pages/OurMission';
import PrincipleMsg from './Pages/PrincipleMsg';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutUs />} />
    <Route path='/ContactUs' element={<ContactUs />} />
    <Route path='/AboutUs' element={<AboutUs />} />
    <Route path='/Gallary' element={<Gallary/>} />
    <Route path='/OurMission' element={<OurMission />} />
    <Route path='/PrincipleMsg' element={<PrincipleMsg/>} />
   </Routes>
   </>
  );
}

export default App;
