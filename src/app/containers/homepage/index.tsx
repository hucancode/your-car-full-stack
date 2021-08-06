import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from "../../components/navbar";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { TopSection } from "./topSection";
import { BookingSteps } from "./bookingSteps";
import { AboutUs } from "./aboutUs";
import { TopCars } from "./topCars";

const Container = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;
export function HomePage() {
    return <Container>
        <Navbar />
        <TopSection />
        <Marginer direction="vertical" margin="4em" />
        <BookCard />
        <Marginer direction="vertical" margin="4em" />
        <BookingSteps />
        <Marginer direction="vertical" margin="4em" />
        <AboutUs/>
        <Marginer direction="vertical" margin="4em" />
        <TopCars/>
    </Container>
}