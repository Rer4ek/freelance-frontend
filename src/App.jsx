import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import SingInPage from './pages/SingInPage';
import Layout from './components/Layout';
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";


function App() {

  return (
      <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='singin' element={<SingInPage/>}></Route>
            <Route path='profile' element={<ProfilePage/>}></Route>
            <Route path='settings' element={<SingInPage/>}></Route>
            <Route path='my-orders' element={<SingInPage/>}></Route>
          </Route>
          <Route path='register' element={<RegisterPage/>}/>
        </Routes>
      </>
  )
}

export default App
