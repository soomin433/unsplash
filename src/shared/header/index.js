import styled from 'styled-components';
import SearchBox from "./SearchBox";
import Nav from "./Nav";
import {IconLogo} from "../../icons";

function Header() {
    return (
        <Container>
            <Logo>
                <IconLogo/>
            </Logo>
            <SearchBox/>
            <Nav/>
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 62px;
`;
const Logo = styled.div`
  margin-right: 20px;
`;


export default Header;