import styled from 'styled-components';
import { globalStyled } from "./styles/GlobalStyled";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
    return (
        <Container>
            <globalStyled />
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </Container>
    )
}
const Container = styled.div``;

export default App;