import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './topCars.css'
import { Car } from "../../components/car";
import { ICar } from "../../model/car";
import carService from "../../services/carService";
import { carSelector, setTopCars } from "./slice";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import MoonLoader from 'react-spinners/MoonLoader';

SwiperCore.use([Pagination]);

const Container = styled.div`
    ${tw`
        max-w-screen-xl
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
        select-none
    `}
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    mt-10
    text-base
    text-black
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

export function TopCars() {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchTopCars = () => {
    setLoading(true);
    carService.getCars()
      .then((cars) => {
        if(cars)
        {
          dispatch(setTopCars(cars));
        }
        setLoading(false);
        console.log(cars);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(fetchTopCars, []);
  const topCars = useSelector(carSelector);
  const breakPoints = {
    "@0.75": {
      "slidesPerView": 1
    },
    "@1.00": {
      "slidesPerView": 2
    },
    "@1.50": {
      "slidesPerView": 3
    }
  };
  const isEmpty = !topCars || topCars.length === 0;
  return <Container>
    <Title>Explore our top deals</Title>
    {isLoading && 
      <LoadingContainer>
        <MoonLoader loading size={30} />
      </LoadingContainer>
    }
    {isEmpty && !isLoading && 
      <EmptyCars>No cars to show!</EmptyCars>
    }
    {!isEmpty && !isLoading && (
      <CarsContainer>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={breakPoints}
        >
          {
            topCars.map((car: GetCars_cars) => ({
              id: car.id,
              name: car.name,
              mileage: car.mileage,
              thumbnailSrc: car.thumbnailUrl,
              dailyPrice: car.dailyPrice,
              monthlyPrice: car.monthlyPrice,
              gearType: car.gearType,
              gas: car.gas,
            }) as ICar)
            .map((car: ICar) => 
              <SwiperSlide key={car.id}><Car {...car} /></SwiperSlide>
            )
          }
        </Swiper>
      </CarsContainer>
    )}
  </Container>
}

export function TestTopCars() {
  const testCar: ICar = {
    id: "",
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
    id: "",
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
    id: "",
    name: "Honda City 5 Alpha",
    mileage: "10k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1200,
    gearType: "Auto",
    gas: "Petrol",
  };
  const breakPoints = {
    "@0.75": {
      "slidesPerView": 1
    },
    "@1.00": {
      "slidesPerView": 2
    },
    "@1.50": {
      "slidesPerView": 3
    }
  };
  return <Container>
    <Title>Explore our top deals</Title>
    <CarsContainer>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={breakPoints}
      ><SwiperSlide><Car {...testCar} /></SwiperSlide>
        <SwiperSlide><Car {...testCar2} /></SwiperSlide>
        <SwiperSlide><Car {...testCar3} /></SwiperSlide>
        <SwiperSlide><Car {...testCar} /></SwiperSlide>
      </Swiper>
    </CarsContainer>
  </Container>
}