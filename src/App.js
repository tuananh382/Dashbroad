
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import List from './components/List';
import {Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="font-inter h-screen max-w-screen-2xl bg-[#F4F4F4]">
      <LeftSide />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/overview" element={<Dashboard />} />
        <Route path="/customer-list" element={<List/>} />
      </Routes>

      
    </div>
  );
}

export default App;
