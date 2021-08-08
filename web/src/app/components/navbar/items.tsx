import React from "react";
import styled, { css } from 'styled-components';
import tw from "twin.macro";
import {useMediaQuery} from 'react-responsive';
import { SCREENS } from "../responsive";
import { slide as Menu } from 'react-burger-menu';
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};
`;

const NavItem = styled.li<{mobile?: any}>`
    ${tw`
        text-xl
        text-black
        font-medium
        mr-3
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-500
    `};
    ${({mobile}) => mobile && css`
        ${tw`
            text-white
            mb-3
            focus:text-gray-300
            hover:text-gray-300
        `}
    `
    };
`;

export function NavItems() {
    const isMobile = useMediaQuery( {maxWidth: SCREENS.sm});
    if(isMobile)
    {
        return <Menu right styles={menuStyles}>
            <ListContainer>
                <NavItem mobile>
                    <a href='#'>Home</a>
                </NavItem>
                <NavItem mobile>
                    <a href='#'>Cars</a>
                </NavItem>
                <NavItem mobile>
                    <a href='#'>Services</a>
                </NavItem>
                <NavItem mobile>
                    <a href='#'>Contact Us</a>
                </NavItem>
            </ListContainer>
        </Menu>
    }
    return <ListContainer>
        <NavItem>
            <a href='#'>Home</a>
        </NavItem>
        <NavItem>
            <a href='#'>Cars</a>
        </NavItem>
        <NavItem>
            <a href='#'>Services</a>
        </NavItem>
        <NavItem>
            <a href='#'>Contact Us</a>
        </NavItem>
    </ListContainer>
}