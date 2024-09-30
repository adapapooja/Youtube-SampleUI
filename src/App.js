import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Center from './components/Navigation/Center';
import Sidenav from './components/Navigation/Sidenav';
import Videos from './components/Videos/Videos_section';

function App() {
  return (
<div className='bg-[rgb(32,32,32)]'>
    {/* <h1>Hello this is youtube page</h1> */}
    <Center></Center>
    <div className='flex flex-row'>
    <Sidenav></Sidenav>
    <Videos></Videos>
    </div>
    
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Header />} />
    //       <Route path="/page1" element={<Page1 />} />
    //       <Route path="/page2" element={<Page2 />} />
    //       {/* <Route path="*" element={<NoPage />} /> */}
        
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
