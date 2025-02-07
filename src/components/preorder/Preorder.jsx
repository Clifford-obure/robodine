import { Outlet } from "react-router-dom";
// import PreorderHeader from "./components/utils/PreorderHeader";
// import PreorderFooter from "./components/utils/PreorderFooter";

const Preorder = () => {
  return (
    <div className="h-screen">
      {/* <PreorderHeader /> */}
      <div style={{ margin: "0 auto", padding: "2rem", textAlign: "center" }}>
        <Outlet />
        {/* <PreorderFooter /> */}
      </div>
    </div>
  );
};

export default Preorder;
