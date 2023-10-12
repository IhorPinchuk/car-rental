import Input from "components/common/input/Input";
import Label from "components/common/label/Label";
import Wrapper from "components/common/wrapper/Wrapper";
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
<Wrapper display='flex'>
    <Wrapper position='relative' maxWidth='160px'>    
    <Input
        onChange={handleChangeFromMileage}
        value={fromMileage}
        type="text"
        name="fromMileage"
        title="From mileage"
        autocomplete="off"
        borderRadius='14px 0px 0px 14px'        
        borderRight='1px solid var(--border-right-color-input-selectPrice)'
        paddingLeft='70px'        
      />
      <Label position='absolute' left='24px'>
        From
      </Label>
      </Wrapper>
      <Wrapper position='relative' maxWidth='160px'>
<Input
        onChange={handleChangeToMileage}
        value={toMileage}
        type="text"
        name="toMileage"
        title="To mileage"
        autocomplete="off"
        borderRadius='0px 14px 14px 0px'
        paddingLeft='45px'        
      />
      <Label position='absolute' left='24px'>
        To
      </Label>
      </Wrapper>
      </Wrapper>
)
}

export default EnterCarMileage;