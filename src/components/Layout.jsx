import { Outlet } from "react-router-dom";
import NaviBar from "./NavBar";

export default function Layout(){
  return (
      <>
        <NaviBar></NaviBar>
        <Outlet></Outlet>
      </>
  );
}