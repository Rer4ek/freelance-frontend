import { Outlet } from "react-router-dom";
import NaviBar from "./NavBar";

export default function Layout(){
    return (
      <>
        <NaviBar></NaviBar>
        <div className="body-container">
          <Outlet></Outlet>
        </div>
      </>
    );
  }