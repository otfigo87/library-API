import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Search from './pages/Search';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
