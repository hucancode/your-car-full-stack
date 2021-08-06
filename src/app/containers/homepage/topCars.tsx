import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car } from "../../components/car";
import { ICar } from "../../model/car";

const Container = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-1
        md:pl-1
        mb-10
    `}
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
    `}
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`;

export function TopCars() {
    const testCar: ICar = {
        name: "Audi S3",
        mileage: "10k",
        thumbnailSrc:
          "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
      };
    
      const testCar2: ICar = {
        name: "Honda City 5",
        mileage: "20k",
        thumbnailSrc:
          "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
      };
    const testCar3: ICar = {
        name: "Honda City 5 Alpha",
        mileage: "10k",
        thumbnailSrc:
          "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1200,
        gearType: "Auto",
        gas: "Petrol",
      };
    return <Container>
        <Title>Explore our top deals</Title>
        <CarsContainer>
            <Car {...testCar} />
            <Car {...testCar2} />
            <Car {...testCar3} />
        </CarsContainer>
    </Container>
}