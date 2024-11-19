import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import ReportPage from './pages/ReportPage';
import DetailedAnalysis from './pages/DetailedAnalysis';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/details" element={<DetailedAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
