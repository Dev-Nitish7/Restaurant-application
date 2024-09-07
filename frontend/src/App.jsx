import './App.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import Home from './pages/home.jsx';
import Success from './pages/Success.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/success" element={<Success/>}/>
         <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App