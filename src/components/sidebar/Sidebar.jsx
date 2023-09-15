import Aside from "components/common/aside/Aside";
import Text from "components/common/text/Text";
import SelectCarBrand from "components/sidebar/selectCarBrand/SelectCarBrand";
import SelectPrice from "components/sidebar/selectPrice/SelectPrice";
import EnterCarMileage from "./enterCarMileage/EnterCarMileage";
import Button from "components/common/button/Button";

const Sidebar = () => {
    return (
<Aside>
    <Text>Car brand</Text>
    <SelectCarBrand/>
    <Text>Price/ 1 hour</Text>
    <SelectPrice/>
    <Text>Сar mileage / km</Text>
    <EnterCarMileage/>
    <Button type='submit'>Search</Button>
</Aside>
    )
}

export default Sidebar;