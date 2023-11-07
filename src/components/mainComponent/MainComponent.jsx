import Main from "components/common/main/Main"
import Sidebar from "components/sidebar/Sidebar";
import { SelectCarBrandProvider } from "components/sidebar/selectCarBrand/SelectCarBrandContext";
import { useLocation } from "react-router-dom";
const { Outlet } = require("react-router-dom")

const MainComponent = () => {
    const location = useLocation(); 

    return (
        <Main>
            <SelectCarBrandProvider>
            {location.pathname !== '/' && <Sidebar/>}
            <Outlet/>
            </SelectCarBrandProvider>
        </Main>
    )
}

export default MainComponent;