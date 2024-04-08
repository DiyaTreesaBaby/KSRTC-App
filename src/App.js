import logo from './logo.svg';
import './App.css';
import { BrowserRouter,RouterProvider,Routes } from 'react-router-dom';
import AllBus from './components/AllBus';
import AddBus from './components/AddBus';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AllBus/>} />
    <Route path="/Add" element={<AddBus/>} />
    <Route path="/Delete" element={<DeleteBus/>} />
    <Route path="/Search" element={<SearchBus/>} />
  </Routes>

  
  </BrowserRouter>

  );
}

export default App;
