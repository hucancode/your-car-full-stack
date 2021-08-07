import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from "../logo";
import { SCREENS } from "../responsive";

const Container = styled.div`
    background-color: #1d2124;
    ${tw`
        flex
        flex-wrap
        items-start
        justify-center
        min-w-full
        pt-7
        pb-20
    `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        pl-10
        pr-10
        mr-2
        mt-7
        md:w-auto
        md:mr-16
        md:mt-0
        md:pl-3
        md:pr-3
    `}
`;

const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-5
    `}
`;

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        pl-10
        pr-10
        mr-2
        mt-7
        md:w-auto
        md:mr-16
        md:mt-0
        md:pl-3
        md:pr-3
    `}
`;

const Links = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`;

const Link = styled.li`
    ${tw`
        mb-3
    `}
    & > a {
        ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-400
        `}
    }
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-2xl
        font-black
        text-white
        mb-3
    `}
`;

const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const RedIcon = styled.span`
    ${tw`
        w-7
        h-7
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`;

const SmallText = styled.h6`
    ${tw`
        text-sm
        text-white
    `}
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    mt-7
    md:mt-3
  `};
`;

const CopyrightText = styled.small`
  ${tw`
    text-sm
    text-gray-300
  `}
`;


export function Footer() {
    return <Container>
        <InnerContainer>
            <AboutContainer>
                <Logo theme='dark' />
                <AboutText>Your Car is a Car renting and selling company located in many
                countries across the world which has high quality cars and top rated
                service.</AboutText>
            </AboutContainer>
            <SectionContainer>
                <HeaderTitle>
                    Our Links
                </HeaderTitle>
                <Links>
                    <Link><a href="#">Home</a></Link>
                    <Link><a href="#">About Us</a></Link>
                    <Link><a href="#">Services</a></Link>
                    <Link><a href="#">Models</a></Link>
                    <Link><a href="#">Blog</a></Link>
                </Links>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>
                    Other Links
                </HeaderTitle>
                <Links>
                    <Link><a href="#">FAQ</a></Link>
                    <Link><a href="#">Privacy Policy</a></Link>
                    <Link><a href="#">Terms and Conditions</a></Link>
                </Links>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>
                    Call Now
                </HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                    </RedIcon>
                    <SmallText>016171819110</SmallText>
                </HorizontalContainer>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>
                    Support
                </HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </RedIcon>
                    <SmallText>support@yourcar.com</SmallText>
                </HorizontalContainer>
            </SectionContainer>
        </InnerContainer>
        <BottomContainer>
            <CopyrightText>
            Copyright &copy; {new Date().getFullYear()} Your Car All rights
            reserved.
            </CopyrightText>
        </BottomContainer>
    </Container>
}