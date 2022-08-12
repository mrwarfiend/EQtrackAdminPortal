import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/SignIn';
import Layout from './Pages/Layout';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn />}>

      </Route>
      <Route path='/portal' element={<Layout />}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
