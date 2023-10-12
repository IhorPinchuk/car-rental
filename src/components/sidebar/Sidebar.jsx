import Aside from 'components/common/aside/Aside';
import Text from 'components/common/text/Text';
import SelectCarBrand from 'components/sidebar/selectCarBrand/SelectCarBrand';
import SelectPrice from 'components/sidebar/selectPrice/SelectPrice';
import EnterCarMileage from './enterCarMileage/EnterCarMileage';
import Button from 'components/common/button/Button';
import Wrapper from 'components/common/wrapper/Wrapper';
import Form from 'components/common/form/Form';
import Container from 'components/common/container/Container';

const Sidebar = () => {

const handleClickSearch = (e) => {
  e.preventDefault();
   
}

  return (
    <Aside>
        <Container>
      <Form>
        <Wrapper display="block" maxWidth="224px">
          <Text fontSize="18px">Car brand</Text>
          <SelectCarBrand />
        </Wrapper>
        <Wrapper display="block" maxWidth="125px">
          <Text fontSize="18px">Price/ 1 hour</Text>
          <SelectPrice />
        </Wrapper>
        <Wrapper display="block" maxWidth="320px">
          <Text fontSize="18px">Сar mileage / km</Text>
          <EnterCarMileage />
        </Wrapper>
        <Button
        onClick={handleClickSearch}
          type="submit"          
          width="136px"
          height="48px"          
          fontSize='14px'
          fontWeight='600'
        >
          Search
        </Button>
      </Form>
      </Container>
    </Aside>
  );
};

export default Sidebar;
