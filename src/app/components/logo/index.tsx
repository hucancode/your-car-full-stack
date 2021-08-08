import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from '../../../assets/images/car-logo.png';
import CarLogoDarkImg from '../../../assets/images/car-logo-dark.png';

interface ILogoProps {
    theme?: "light" | "dark";
}
const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `};
`;
const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        m-1
    `};
    ${({theme}: any) => (theme === 'dark'? tw`text-white` : tw`text-black`)}
`;
const Image = styled.div`
    width: auto;
    ${tw`
        h-6
        md:h-9
    `};
    img  {
        width: auto;
        height: 100%;
    }
`;
export function Logo(props: ILogoProps) {
    return <LogoContainer>
        <Image>
            <img src={props.theme === 'dark' ? CarLogoDarkImg : CarLogoImg} />
        </Image>
        <LogoText theme={props.theme}>Your Car</LogoText>
    </LogoContainer>
}