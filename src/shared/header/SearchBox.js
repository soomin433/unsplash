import styled from 'styled-components';
import {SearchbarIcon} from "../../icons";

function SearchBox() {
    return (
        <Container>
            <Form>
                <Button type="submit"><SearchbarIcon/></Button>
                <Input type="text"
                       placeholder="Search free high-resolution photos"
                />
            </Form>
        </Container>
    )
}
const Container = styled.div`
  flex: 1;
  
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  background: #eee;
  border-radius: 100px;
`;
const Button = styled.button`
  display: flex;
  background: transparent;
  border: 0;
  padding-left: 10px;
  svg{
    width: 20px;
  }
  
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 38px;
  background: transparent;
  border: 0;
  outline: 0;
`;

export default SearchBox;