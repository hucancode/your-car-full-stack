import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import JeepImg from "../../../assets/images/jeep.png"
import { SCREENS } from "../../components/responsive";

const Container = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        2xl:justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-1
        md:pr-1
        bg-white
    `}
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;
    img {
        width: auto;
        height: 100%;
    }
    @media (min-width: ${SCREENS.md})
    {
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg})
    {
        height: 30em;
    }
    @media (min-width: ${SCREENS['2xl']})
    {
        height: 30em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        xl:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;

const InfoText = styled.p`
    ${tw`
        max-w-4xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `}
`;
export function AboutUs()
{
    return <Container>
        <CarContainer>
            <img src={JeepImg}/>
        </CarContainer>
        <InfoContainer>
            <Title>Fell the best experience with our rental deals</Title>
            <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</InfoText>
        </InfoContainer>
    </Container>
}