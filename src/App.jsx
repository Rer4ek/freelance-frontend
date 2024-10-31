import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./Pages/RegisterPage"
import SingInPage from './Pages/SingInPage';
import Layout from './Components/Layout';
import './App.css';

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='singin' element={<SingInPage/>}></Route>
          </Route>
        </Routes>
      </>
  )
}

export default App
