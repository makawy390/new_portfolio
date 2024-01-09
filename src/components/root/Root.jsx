import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import "./root.css";
// import SwitchApp from "./SwitchApp";
import SpinnerApp from "./Spinner";
import Navigation from './../navigation/Navigation';
// import Switches from "./Switches";
import SmallNavgation from "./SmallNavgation";
const Root = () => {
  const mode = useSelector((state) => state.mode.mode);
  // const modes = sessionStorage.setItem("mode" , '')
  return (
    <>
      <Navigation />
      <div className={`${mode === false ? "light" : "dark"}`}>
        {/* <SwitchApp /> */}
        {/* <Switches /> */}
        <SmallNavgation />
        <Suspense fallback={<SpinnerApp />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Root;
