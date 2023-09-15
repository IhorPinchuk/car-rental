import Input from "components/common/input/Input";
import Label from "components/common/label/Label";
import { useState } from "react";

const EnterCarMileage = () => {
const [fromMileage, setFromMileage] = useState('');
const [toMileage, setToMileage] = useState('');

const handleChangeFromMileage = (e) => {
    const { value } = e.currentTarget;
    setFromMileage(value);
}

const handleChangeToMileage = (e) => {
    const { value } = e.currentTarget;
    setToMileage(value);
}

return (
    <>
    <Label>
        From
    <Input
        onChange={handleChangeFromMileage}
        value={fromMileage}
        type="text"
        name="fromMileage"
        title="From mileage"        
      />
      </Label>
      <Label>
        To
<Input
        onChange={handleChangeToMileage}
        value={toMileage}
        type="text"
        name="toMileage"
        title="To mileage"        
      />
      </Label>
      </>
)
}

export default EnterCarMileage;