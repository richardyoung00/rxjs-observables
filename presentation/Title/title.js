import React from "react";
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
} from "spectacle";

import './style.css'
import rxjsImage from '../../assets/rxjs.png'

export function titleSlide() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={2} textColor="secondary">Next level async with RxJS and Observables</Heading>
            <img src={rxjsImage} className='rxjs'/>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;