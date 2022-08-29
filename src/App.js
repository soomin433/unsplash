import React from 'react';
import styled from 'styled-components';
import { GlobalStyled } from "./styles/GlobalStyled";
import Layout from "./shared/layout";
import Routes from "./Routes";

function App() {
    return (
        <Container>
            <GlobalStyled />
            <Layout>
                <Routes/>
            </Layout>
        </Container>
    )
}
const Container = styled.div``;

export default App;