import React from 'react';
import styled from 'styled-components';
import Header from "../header";

function Layout( {children} ) {
    return (
        <Container>
            <Header/>
            {children}
        </Container>
    )
}
const Container = styled.div``;

export default Layout;