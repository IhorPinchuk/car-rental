import Li from "components/common/li/Li";
import Nav from "components/common/nav/Nav";
import NavLink from "components/common/navLink/NavLink";
import Ul from "components/common/ul/Ul";
import Header from "components/header/Header";

const HeaderComponent = () => {
    return (
<Header>
      <Nav>
        <Ul flexWrap='nowrap'>
          <Li>
            <NavLink to='/'>Home</NavLink>
          </Li>
          <Li>
            <NavLink to='catalog'>Catalog</NavLink>
          </Li>
          <Li>
            <NavLink to='favorites'>Favorites</NavLink>
          </Li>
        </Ul>
      </Nav>
    </Header>
    )
}

export default HeaderComponent;