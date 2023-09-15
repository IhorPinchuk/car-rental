import Main from "components/common/main/Main"
const { Outlet } = require("react-router-dom")

const MainComponent = () => {
    return (
        <Main>
            <Outlet/>
        </Main>
    )
}

export default MainComponent;