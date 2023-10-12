import Main from "components/common/main/Main"
import Sidebar from "components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
const { Outlet } = require("react-router-dom")

const MainComponent = () => {
    const location = useLocation(); 

    return (
        <Main>
            {location.pathname !== '/' && <Sidebar/>}
            <Outlet/>
        </Main>
    )
}

export default MainComponent;