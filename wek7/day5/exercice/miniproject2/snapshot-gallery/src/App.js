import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GalleryPage query="Mountain" />} />
        <Route path="/mountain" element={<GalleryPage query="Mountain" />} />
        <Route path="/beach" element={<GalleryPage query="Beach" />} />
        <Route path="/birds" element={<GalleryPage query="Birds" />} />
        <Route path="/food" element={<GalleryPage query="Food" />} />
        <Route path="/search/:query" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}
export default App;
