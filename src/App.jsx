import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import SingInPage from './pages/SingInPage';
import Layout from './components/Layout';
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ResumesPage from './pages/ResumesPage';


function App() {

  return (
      <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='settings' element={<ProfilePage/>}></Route>
            <Route path='profile' element={<SingInPage/>}></Route>
            <Route path='my-orders' element={<SingInPage/>}></Route>
            <Route path='resumes' element={<ResumesPage/>}></Route>
          </Route>
          <Route path='singin' element={<SingInPage/>}></Route>
          <Route path='register' element={<RegisterPage/>}/>
        </Routes>
      </>
  )
}

export default App
