import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
    min-height: 4.5em;
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
    ${tw`
        flex
        justify-center
        relative
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        ml-3
        mr-3
        md:pt-2
        md:pb-2
        md:pr-6
        md:pl-6
    `}
`;

const ItemContainer = styled.div`
    ${tw`
        flex
        relative
    `}
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-700
        fill-current
        text-xs
        md:text-base
        ml-1
        md:ml-3
    `}
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md: text-sm
        select-none
        cursor-pointer
    `}
`;

const LineSeperator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`;

const DateCalendar = styled(Calendar)<{offset?: number}>`
    user-select: none;
    position: absolute;
    max-width: none !important;
    top: 4em;
    ${({offset}) => css`
        left: ${offset?offset:0}em;
    `}
`;

export function BookCard() {
    const [startDate, setStartDate] = useState(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

    const [returnDate, setReturnDate] = useState(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    const toggleStartCalendar = () => {
        if(!isStartCalendarOpen)
        {
            setReturnCalendarOpen(false);
        }
        setStartCalendarOpen(!isStartCalendarOpen);
        
    }
    const toggleReturnCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if(!isReturnCalendarOpen)
        {
            setStartCalendarOpen(false);
        }
    }

    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isStartCalendarOpen?faCaretUp:faCaretDown} />
            </SmallIcon>
            
        </ItemContainer>
        {isStartCalendarOpen &&
            <DateCalendar value={startDate} onChange={setStartDate as any}/>
        }
        <LineSeperator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleReturnCalendar}>Return Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isReturnCalendarOpen?faCaretUp:faCaretDown} />
            </SmallIcon>
        </ItemContainer>
        {isReturnCalendarOpen &&
            <DateCalendar value={returnDate} onChange={setReturnDate as any} offset={4} />
        }
        <LineSeperator />
        {/* <Marginer direction='horizontal' margin='2em' /> */}
        <Button theme='filled' text='Book Your Ride'/>
    </CardContainer>
}