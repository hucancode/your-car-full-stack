import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarBg from '../../../assets/images/blob.svg'
import CarImg from '../../../assets/images/mclaren-orange.png'
import { Button } from "../../components/button";
import { SCREENS } from "../../components/responsive";

const TopContainer = styled.div`
    min-height:400px;
    margin-top:6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
    `}
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        md:text-5xl
        sm:text-3xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`;

const CarBackgroundContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);
    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }
    @media (min-width: ${SCREENS.sm}) {
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
    }

    @media (min-width: ${SCREENS.lg}) {
        width: 50em;
        max-height: 30em;
        right: -7em;
        top: -20em;
    }

    @media (min-width: ${SCREENS.xl}) {
        width: 60em;
        max-height: 30em;
        right: -5em;
        top: -25em;
    }
`;

const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    position: absolute;
    right: -6em;
    top: -5em;
    img {
        width: auto;
        height: 60%;
        max-width: fit-content;
    }
    
    @media (min-width: ${SCREENS.sm}) {
        height: 15em;
        right: -6em;
        top: -5em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 20em;
        right: -6em;
        top: -5em;
    }

    @media (min-width: ${SCREENS.xl}) {
        height: 25em;
        right: -6em;
        top: -5em;
    }
`;

const ButtonContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-5
    `}
`;

export function TopSection() {
    return <TopContainer>
        <LeftContainer>
            <Slogan>Rent the highest quality car with us!</Slogan>
            <Description>
            My mother always used to say: The older you get, the better you get, unless you’re a banana. 
            That's why you should have faith in our service. I know this is not the best description you can get for a car service, but whatever.
            </Description>
            <ButtonContainer>
                <Button text="Rent a Car"/>
                <Button text="Lend a Car"/>
            </ButtonContainer>
        </LeftContainer>
        <RightContainer>
            <CarBackgroundContainer>
                <img src={CarBg} />
            </CarBackgroundContainer>
            <StandaloneCar>
            <img src={CarImg} />
            </StandaloneCar>
        </RightContainer>
    </TopContainer>
}