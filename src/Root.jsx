import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className="my-5">
         <Outlet></Outlet>
        </div>
    );
};

export default Root;