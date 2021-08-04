import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from '../logo';
import { NavItems } from "./items";

const Container = styled.div`
    min-height: 68px;
    max-height: 100px;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;
const LogoContainer = styled.div``;
export function Navbar() {
    return <Container>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavItems/>
    </Container>
}