import React from "react";
import HeaderComponent from "components/headerComponent/HeaderComponent";
import MainComponent from "components/mainComponent/MainComponent";
import Sidebar from "components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const SharedLayout = () => {

  const location = useLocation();  

  return (
    <>
    <HeaderComponent/>
   {location.pathname !== '/' && <Sidebar/>}
    <MainComponent/>
    </>
  );
};

export default SharedLayout;
